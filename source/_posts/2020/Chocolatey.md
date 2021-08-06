title: Chocolatey Window设计的包管理器
date: 2020-05-11 14:15:06
tags:
- Chocolatey
categories:
- Configuration
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: https://z3.ax1x.com/2021/08/06/fnM1HA.jpg
thumbnail: https://z3.ax1x.com/2021/08/06/fnM1HA.md.jpg
---

`Chocolatey` Windows设计的包管理器，有了它，你也可以

{% codeblock "Git Bash/Shell" lang:bash %}
choco install docker
{% endcodeblock %}

[Why Chocolatey](https://chocolatey.org/why-chocolatey)

<!-- more -->

## 安装

- Windows 7+ / Windows Server 2003+
- PowerShell v2+ (minimum is v3 for install from this website due to TLS 1.2 requirement)
- .NET Framework 4+ (the installation will attempt to install .NET 4.0 if you do not have it installed)(minimum is 4.5 for install from this website due to TLS 1.2 requirement)

只要你的系统在**Win7**以上就可以了，打开开始菜单，右键以管理员身份运行**PowerShell**，然后粘贴以下命令

{% codeblock "Git Bash/Shell" lang:bash %}
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
{% endcodeblock %}

[Installing Chocolatey](https://chocolatey.org/install)

*检查是否安装成功*

{% codeblock "Git Bash/Shell" lang:bash %}
choco
{% endcodeblock %}

*安装一个应用*

以[deno](https://github.com/denoland/deno)为例

{% codeblock "Git Bash/Shell" lang:bash %}
choco install deno
{% endcodeblock %}

## 一些命令

1. 安装`choco install deno`
2. 升级`choco upgrade deno`
3. 卸载`choco uninstall deno`
4. 搜索`choco search deno`
5. 查看已安装的包`choco list -lo`

[Chocolatey docs](https://chocolatey.org/docs#usage)

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/blacklisten/nblogs/edit/site/source/_posts/2020/Chocolatey.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://wallhaven.cc" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>
