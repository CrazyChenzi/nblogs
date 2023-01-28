title: 如何配置多个提交账户
date: 2021-1209 14:07:00
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
cover: /gallery/covers/config_workflow.png
thumbnail: /gallery/covers/config_workflow.png
---

## git config user

假如你在 Github 上有个人项目，而公司项目存放在公司内网 gitlab 上，如何为这两种不同类型的项目配置不一样的提交用户呢？

Git 全局的用户配置文件存放在 ~/.gitconfig 中，我们可以通过以下命令设置全局默认的用户名和邮箱。

{% codeblock "bash zsh" %}
git config --global user.name "<Your Name>"
git config --global user.email "<Your Email>"
{% endcodeblock %}

如果需要为某一个项目配置不同的用户，则可以进入到项目对应的目录下，使用以下命令。它会在项目根目录的 .git/config 文件中保存这些配置信息：

{% codeblock "bash zsh" %}
git config user.name "<Another Name>"
git config user.email "<Another Email>"
{% endcodeblock %}
<!-- more -->

## Conditional Includes

在 git 2.13 版本中，增加了 [conditional includes](https://git-scm.com/docs/git-config#_includes) 配置，可以创建多个 gitconfig 文件，并针对不同的根目录使用不同的配置文件。例如，以下全局配置文件 ~/.gitconfig 中包含以下用户配置信息，当项目 clone 在 ~/dev/ 目录下时，会自动使用另外一份配置文件：

```
[user]
    name = Your Name
    email = your_email@example.com
[includeIf "gitdir:~/dev/"]
    path = .gitconfig-dev
```

以下是 ~/.gitconfig-dev 文件的配置：

```
[user]
    name = Another Name
    email = another_email@example.com
```

**注意：强烈建议将 global user 配置为你的 Github ID，避免默认提交中有效用户信息的缺失，导致 Github contributions 不准确。同时，不设置为公司邮箱，可以避免邮箱信息泄露。**

[原文](https://gb.yekai.net/questions/git-config-user)

<br />

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/CrazyChenzi/nblogs/edit/site/source/_posts/2021/Git Conditional Includes.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://www.vecteezy.com/free-vector/vector-landscape" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>
