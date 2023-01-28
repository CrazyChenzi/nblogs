title: Window Terminal美化💖
date: 2020-07-13
tags:
- terminal
categories:
- Configuration
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: https://z3.ax1x.com/2021/08/06/fnM2gU.png
thumbnail: https://z3.ax1x.com/2021/08/06/fnM2gU.md.png
---

**Window Terminal**终端程序是一款新式、快速、高效、强大且高效的终端应用程序，适用于命令行工具和命令提示符，*PowerShell*和*WSL*等*Shell*用户。
主要功能包括多个选项卡、窗格、Unicode、和UTF-8字符支持，GPU加速文本渲染引擎以及**自定义主题、样式和配置**。

<!-- more -->

## 安装**Window Terminal**

安装**Window Terminal**，通过Microsoft Store商店安装即可，安装**Window Terminal**对系统有一定的要求。系统版本必须为Windows 10版本 18362.0或更好的版本，必须为x86 ARM64 x64体系结构。
**Window Terminal**是一个开源项目，[地址](https://github.com/microsoft/terminal)

## 配置字体

这里我使用的事**Fira Code**字体，[地址](https://github.com/tonsky/FiraCode/releases)

## 配置主题

这里我使用的是**posh-git、on-my-posh**主题。
**安装**，使用`window powerShell` 最好使用管理员权限
{% codeblock "window powerShell" lang:bash %}
Install-Module posh-git -Scope CurrentUser 
Install-Module oh-my-posh -Scope CurrentUser
{% endcodeblock %}

**配置和切换主题**
{% codeblock "window powerShell" lang:bash %}
$PROFILE

if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
{% endcodeblock %}
也可直接使用命令`$PROFILE`，会输出默认配置文件的地址，一般会在C盘

**在打开的文件中添加**，这样配置的是默认的主题
{% codeblock "ps1" lang:ps1 %}
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme Sorin
{% endcodeblock %}

**切换主题**
{% codeblock "Git Bash/Shell/Terminal" lang:bash %}
Set-Theme ${主题名字}
{% endcodeblock %}
以下是可用的主题名字：Agnoster、Avit、Darkblood、Fish、Honukai、Paradox、Sorin、tehrob

## 配置Window Terminal

打开设置

![window terminal](https://z3.ax1x.com/2021/08/06/fnMcCV.png)
添加defaults和schemes
{% codeblock "点击展开代码" lang:json >folded %}
"defaults": {
  // Put settings here that you want to apply to all profiles.
  "fontFace": "Fira Code", // oh-my-posh 主题原因，使用其他的字体可能会出现乱码
  "backgroundImage": "F:\\vscodeBg\\014.jpg", // 背景图片地址
  "backgroundImageOpacity": 0.4, // 透明度
  "colorScheme": "Andromeda", // 颜色方案
  "acrylicOpacity": 0.7,
  "useAcrylic": true
},
"schemes": [
    {
      "name": "Andromeda",
      "black": "#000000",
      "red": "#cd3131",
      "green": "#05bc79",
      "yellow": "#09da0f",
      // "yellow": "#e5e512",
      "blue": "#2472c8",
      "purple": "#bc3fbc",
      "cyan": "#0fa8cd",
      "white": "#e5e5e5",
      "brightBlack": "#666666",
      "brightRed": "#cd3131",
      "brightGreen": "#05bc79",
      "brightYellow": "#09da0f",
      // "brightYellow": "#e5e512",
      "brightBlue": "#2472c8",
      "brightPurple": "#bc3fbc",
      "brightCyan": "#0fa8cd",
      "brightWhite": "#e5e5e5",
      "background": "#262a33",
      "foreground": "#e5e5e5"
    },
    {
      "name": "Campbell",
      "foreground": "#F2F2F2",
      "background": "#0C0C0C",
      "colors": [
        "#0C0C0C",
        "#C50F1F",
        "#13A10E",
        "#C19C00",
        "#0037DA",
        "#881798",
        "#3A96DD",
        "#CCCCCC",
        "#767676",
        "#E74856",
        "#16C60C",
        "#F9F1A5",
        "#3B78FF",
        "#B4009E",
        "#61D6D6",
        "#F2F2F2"
      ]
    },
    {
      "name": "Solarized Dark",
      "foreground": "#FDF6E3",
      "background": "#073642",
      "colors": [
        "#073642",
        "#D30102",
        "#859900",
        "#B58900",
        "#268BD2",
        "#D33682",
        "#2AA198",
        "#EEE8D5",
        "#002B36",
        "#CB4B16",
        "#586E75",
        "#657B83",
        "#839496",
        "#6C71C4",
        "#93A1A1",
        "#FDF6E3"
      ]
    }
  ]
  {% endcodeblock %}

[官方配置详解](https://docs.microsoft.com/zh-cn/windows/terminal/)

<hr>

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/CrazyChenzi/nblogs/edit/site/source/_posts/2020/Window-Terminal.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://wallhaven.cc" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>