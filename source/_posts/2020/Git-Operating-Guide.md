title: Git操作指南
date: 2020-09-22
tags:
- Git操作指南
categories:
- Git
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: /gallery/covers/eezy_69.svg
thumbnail: /gallery/covers/eezy_69.svg
---

整理的一些`Git`常用命令，以及进阶命令`git rebase`，从这里你可以学到基础的`Git`配置命令、分支管理、`fetch`指令、`git`撤销、状态查询、文档查询、文件暂存、差异比较、基本操作、`git`进阶之`rebase`

<!-- more -->

## 配置命令

列出当前配置

  {% codeblock "Git Bash/Shell" lang:bash %}
  git config --list
  {% endcodeblock %}

列出`Repository`配置

  {% codeblock "Git Bash/Shell" lang:bash %}
  git config --local --list
  {% endcodeblock %}

列出全局配置

  {% codeblock "Git Bash/Shell" lang:bash %}
  git config --global --list
  {% endcodeblock %}

列出系统配置

  {% codeblock "Git Bash/Shell" lang:bash %}
  git config --system --list
  {% endcodeblock %}

配置用户名

  {% codeblock "Git Bash/Shell" lang:bash %}
  git config --global user.name "your name"
  {% endcodeblock %}

配置用户邮箱

  {% codeblock "Git Bash/Shell" lang:bash %}
  git config --global user.email "youremail@github.com"
  {% endcodeblock %}

## 分支管理

查看本地分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git branch
  {% endcodeblock %}

查看远程分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git branch -r
  {% endcodeblock %}

查看本地和远程分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git branch -a
  {% endcodeblock %}

从当前分支切换到其它分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git checkout <branch-name>
  {% endcodeblock %}

创建并切换到新分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git checkout -b <branch-name>
  {% endcodeblock %}

删除分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git branch -d <branch-name>
  {% endcodeblock %}

当前分支与指定分支合并

  {% codeblock "Git Bash/Shell" lang:bash %}
  git merge <branch-name>
  {% endcodeblock %}

查看哪些分支已经/没有合并到当前分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git branch --merged
  git branch --no-merged
  {% endcodeblock %}

查看各个分支最后一个提交对应的信息

  {% codeblock "Git Bash/Shell" lang:bash %}
  git branch -v
  {% endcodeblock %}

删除远程分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git push origin -d <branch-name>
  {% endcodeblock %}

重命名分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git branch -m <oldbranch-name> <newbranch-name>
  {% endcodeblock %}

拉取远程分支并创建本地分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git checkout -b 本地分支名 origin/远程分支名
  or
  git fetch origin <branch-name>:<local-branch-name>
  {% endcodeblock %}

## fetch指令

将远程仓库的内容更新到本地

{% codeblock "Git Bash/Shell" lang:bash %}
git fetch origin <branch-name>:<local-branch-name>
{% endcodeblock %}

- 一般而言，这个origin是远程主机名，一般默认就是origin。
- `branch-name` 你要拉取的分支
- `local-branch-name` 通常而言，就是你本地新建一个新分支，将origin下的某个分支代码下载到本地分支。



将某个远程主机的更新，全部取回本地

  {% codeblock "Git Bash/Shell" lang:bash %}
  git fetch <远程主机名>
  {% endcodeblock %}

取回特定分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git fetch <远程主机名> <分支名>
  {% endcodeblock %}

将某个分支的内容取回到本地的某个分支

  {% codeblock "Git Bash/Shell" lang:bash %}
  git fetch origin :<local-branch-name>
  {% endcodeblock %}

  [git pull 和 git fetch的区别？](https://www.zhihu.com/question/38305012)

## git撤销

撤销工作区修改

  {% codeblock "Git Bash/Shell" lang:bash %}
  git checkout--
  {% endcodeblock %}

暂存区文件撤销(不覆盖工作区)

  {% codeblock "Git Bash/Shell" lang:bash %}
  git reset HEAD
  {% endcodeblock %}

版本回退

  git reset --(soft|mixed|hard) <HEAD~(num)> |

  | 指令    | 作用范围                                 |
  | ------- | ---------------------------------------- |
  | --hard  | 回退全部，包括HEAD，index，working，tree |
  | --mixed | 回退部分，包括HEAD，index                |
  | --soft  | 只回退HEAD                               |

## 状态查询

查看状态

  {% codeblock "Git Bash/Shell" lang:bash %}
  git status
  {% endcodeblock %}

查看历史操作记录

  {% codeblock "Git Bash/Shell" lang:bash %}
  git reflog
  {% endcodeblock %}

查看日志

  {% codeblock "Git Bash/Shell" lang:bash %}
  git log
  {% endcodeblock %}

## 文档查询

展示Git命令大纲

  {% codeblock "Git Bash/Shell" lang:bash %}
  git help (--help)
  {% endcodeblock %}

展示Git命令大纲全部列表

  {% codeblock "Git Bash/Shell" lang:bash %}
  git help -a
  {% endcodeblock %}

展示具体命令说明手册

  {% codeblock "Git Bash/Shell" lang:bash %}
  git help
  {% endcodeblock %}

## 文件暂存

添加改动到stash

  {% codeblock "Git Bash/Shell" lang:bash %}
  git stash sava -a "message"
  {% endcodeblock %}

删除暂存

  {% codeblock "Git Bash/Shell" lang:bash %}
  git stash drop stash@{ID}
  {% endcodeblock %}

查看stash列表

  {% codeblock "Git Bash/Shell" lang:bash %}
  git stash list
  {% endcodeblock %}

删除全部缓存

  {% codeblock "Git Bash/Shell" lang:bash %}
  git stash clear
  {% endcodeblock %}

恢复改动

  {% codeblock "Git Bash/Shell" lang:bash %}
  git stash pop stash@{ID}
  {% endcodeblock %}

## 差异比较

比较工作区与缓存区

  {% codeblock "Git Bash/Shell" lang:bash %}
  git diff
  {% endcodeblock %}

比较缓存区与本地库最近一次commit内容

  {% codeblock "Git Bash/Shell" lang:bash %}
  git diff --cached
  {% endcodeblock %}

比较工作区与本地最近一次commit内容

  {% codeblock "Git Bash/Shell" lang:bash %}
  git diff HEAD
  {% endcodeblock %}

比较两个commit之间的差异

  {% codeblock "Git Bash/Shell" lang:bash %}
  git diff
  {% endcodeblock %}

## 基本操作

创建本地仓库

  {% codeblock "Git Bash/Shell" lang:bash %}
  git init
  {% endcodeblock %}

链接本地仓库与远程仓库

  {% codeblock "Git Bash/Shell" lang:bash %}
  git remote add origin
  origin默认是远端仓库别名url 可以使用https或者ssh的方式
  {% endcodeblock %}

检查配置信息

  {% codeblock "Git Bash/Shell" lang:bash %}
  git config --list
  {% endcodeblock %}

Git user name and email

  {% codeblock "Git Bash/Shell" lang:bash %}
  git config --global user.name "yourname"
  git config --global user.email "youremail"
  {% endcodeblock %}

生成SSH秘钥

  {% codeblock "Git Bash/Shell" lang:bash %}
  ssh-keygen -t rsa -C "youremail"
  cd ~/.ssh 里面有一个文件名为id_rsa.pub, 把里面的内容复制到git库的我的SSHKEYS中
  {% endcodeblock %}

查看远端仓库信息

  {% codeblock "Git Bash/Shell" lang:bash %}
  git remote -v
  {% endcodeblock %}

远端仓库重新命名

  {% codeblock "Git Bash/Shell" lang:bash %}
  git remote rename old new
  {% endcodeblock %}

提交到缓存区

  {% codeblock "Git Bash/Shell" lang:bash %}
  git add . 全部文件
  git add 指定文件
  {% endcodeblock %}

提交到本地仓库

  {% codeblock "Git Bash/Shell" lang:bash %}
  git commit -m "message"
  {% endcodeblock %}

提交到远程仓库

  {% codeblock "Git Bash/Shell" lang:bash %}
  git push <远程主机名> <本地分支名>:<远程分支名>
  {% endcodeblock %}

## git 进阶之rebase

[Git commits历史是如何做到如此清爽的？](https://www.zhihu.com/question/61283395)

### Rebase场景一：如何合并多次提交记录

1. 合并最近的n次提交记录

   {% codeblock "Git Bash/Shell" lang:bash %}
   git rebase -i HEAD~n
   {% endcodeblock %}

2. 进入vi编辑模式

   pick：保留该commit（缩写:p）

   reword：保留该commit，但我需要修改该commit的注释（缩写:r）

   edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）

   squash：将该commit和前一个commit合并（缩写:s）

   fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）

   exec：执行shell命令（缩写:x）

   drop：我要丢弃该commit（缩写:d）

3. 如果保存的时候，出错

   {% codeblock "JavaScript" lang:javascript %}
   error: cannot 'squash' without a previous commit
   {% endcodeblock %}

   **注意不要合并先前提交的东西，也就是已经提交远程分支的纪录。**

4. 如果你异常退出了 `vi` 窗口

   {% codeblock "Git Bash/Shell" lang:bash %}
   git rebase --edit-todo
   {% endcodeblock %}

   这时候会一直处在这个编辑的模式里，我们可以回去继续编辑，修改完保存一下

   {% codeblock "Git Bash/Shell" lang:bash %}
   git rebase --continue
   {% endcodeblock %}

5. 查看结果

   {% codeblock "Git Bash/Shell" lang:bash %}
   git log
   {% endcodeblock %}

### Rebase场景二：分支合并

1. 我们先从 `master` 分支切出一个 `dev` 分支，进行开发：

   {% codeblock "Git Bash/Shell" lang:bash %}
   git checkout -b feature
   {% endcodeblock %}

2. 这时候，你的同事完成了一次 `hotfix`，并合并入了 `master` 分支，此时 `master` 已经领先于你的 `feature` 分支了

3. 恰巧，我们想要同步 `master` 分支的改动，首先想到了 `merge`

4. 让我们来试试 `git rebase`而不是使用merge

   {% codeblock "Git Bash/Shell" lang:bash %}
   git rebase master
   {% endcodeblock %}

   首先，`git` 会把 `feature` 分支里面的每个 `commit` 取消掉；
   其次，把上面的操作临时保存成 `patch` 文件，存在 `.git/rebase` 目录下；
   然后，把 `feature` 分支更新到最新的 `master` 分支；
   最后，把上面保存的 `patch` 文件应用到 `feature` 分支上；

   从 `commit` 记录我们可以看出来，`feature` 分支是基于 `hotfix` 合并后的 `master` ，自然而然的成为了最领先的分支，而且没有 `merge` 的 `commit` 记录，是不是感觉很舒服了。

5. 在 `rebase` 的过程中，也许会出现冲突 `conflict`。在这种情况，`git` 会停止 `rebase` 并会让你去解决冲突。在解决完冲突后，用 `git add` 命令去更新这些内容

   {% codeblock "Git Bash/Shell" lang:bash %}
   git rebase --continue
   {% endcodeblock %}

   这样 `git` 会继续应用余下的 `patch` 补丁文件。

6. 在任何时候，我们都可以用 `--abort` 参数来终止 `rebase` 的行动，并且分支会回到 `rebase` 开始前的状态。

   {% codeblock "Git Bash/Shell" lang:bash %}
   git rebase —abort
   {% endcodeblock %}

## 参考

[https://juejin.im/post/6869519303864123399](https://juejin.im/post/6869519303864123399)

[http://jartto.wang/2018/12/11/git-rebase/](http://jartto.wang/2018/12/11/git-rebase/)

[https://git-scm.com/book/zh/v2/](https://git-scm.com/book/zh/v2/)

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/CrazyChenzi/nblogs/edit/site/source/_posts/2020/Git-Operating-Guide.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://www.vecteezy.com/free-vector/vector-landscape" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>