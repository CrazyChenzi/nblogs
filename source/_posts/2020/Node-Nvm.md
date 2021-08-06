title: 安装多个版本的node✨
date: 2020-03-25
tags:
- NodeJs
- nvm
categories:
- Configuration
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: https://z3.ax1x.com/2021/08/06/fnM8AI.jpg
thumbnail: https://z3.ax1x.com/2021/08/06/fnM8AI.md.jpg
---

`nodejs`是前端经常使用到的，`nodejs`拥有很多版本，我们一般使用官方提供的稳定版本就好了，当然，如果你想体验一些**新功能** **新特性** 可以使用最新版本的`nodejs`。
在我们团队的协作中，因为有`package.json`的存在，所以我们尽量保证团队是用的`nodejs`版本一致。
这个时候我们就需要版本控制工具[nvm](https://github.com/nvm-sh/nvm)了。

<!-- more -->

## window下使用nvm🚗

[下载链接](https://github.com/coreybutler/nvm-windows/releases)

程序安装过程中，在 `Set Node.js Symlink` 这一步目录设置，是待会 nvm use 存放你的 nodejs 程序的目录

{% codeblock "Git Bash/Shell" lang:bash %}
nvm v # 查看版本
nvm install latest # 下载最新版本的node
nvm install 12.1.0 # 下载12.1.0版本的node
nvm install 12.1.0 32 # 默认64位 32位需指定
nvm uninstall 12.1.0 # 卸载对应的版本
{% endcodeblock %}

下载完成后，会在\nvm文件下多一个v12.1.0的文件夹

{% codeblock "Git Bash/Shell" lang:bash %}
nvm use 12.1.0 # 引入使用
{% endcodeblock %}

{% codeblock "Git Bash/Shell" lang:bash %}
nvm ls # 查看已安装的node版本
  * 12.1.0 (Currently using 64-bit executable)
{% endcodeblock %}

## Mac下使用nvm🚗

{% codeblock "Git Bash/Shell" lang:bash %}
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
{% endcodeblock %}

或

{% codeblock "Git Bash/Shell" lang:bash %}
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
{% endcodeblock %}

执行完后重启终端

{% codeblock "Git Bash/Shell" lang:bash %}
nvm install 12.13.0 # 安装指定版本
{% endcodeblock %}

{% codeblock "Git Bash/Shell" lang:bash %}
nvm use 12.13.0 # 使用指定版本
{% endcodeblock %}

[文档链接](https://github.com/nvm-sh/nvm)

<hr>

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/blacklisten/nblogs/edit/site/source/_posts/2020/Node-Nvm.md">here</a> 
to submit your revision.
</div>
</article>
