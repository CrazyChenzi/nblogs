title: Electron学习笔记
date: 2020-07-09 17:10:31
tags:
- Electron
categories:
- Learning
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: https://z3.ax1x.com/2021/08/06/fnMajg.jpg
thumbnail: https://z3.ax1x.com/2021/08/06/fnMajg.md.jpg
---

记录自己学习`Electron`所整理出来的一些学习笔记。仅为个人笔记，所以写的不好，不够清晰，只会留下当时的部分思路，作为后来有问题时的速查笔记。大部分摘自官方文档，文档太长，只挑了当时的重点记录。

<!-- more -->

## webview
> By default the webview tag is disabled in Electron >= 5. 在构造 BrowserWindow 时，需要通过设置 webviewTag webPreferences选项来启用标签

当Electron版本大于等于5，需要在BrowserWindow的实例中手动开启webviewTag标签

![UB3EDJ.png](https://s1.ax1x.com/2020/07/16/UB3EDJ.png)


[webview](https://www.electronjs.org/docs/api/webview-tag#webviewtagprintoptions)

## BrowserWIndow


_使用BrowserWindow创建一个父子窗口_

{% codeblock "示例代码" lang:JavaScript %}
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  let parent = new BrowserWindow();
  // parent 代表是否放置在父窗体上方
  let child = new BrowserWindow({ parent });

  parent.loadURL("https://www.google.com");
  child.loadURL("https://www.baidu.com");

  parent.show();
  child.show();
};

app.on('ready', () => createWindow())
{% endcodeblock %}

[BrowserWindow](https://www.electronjs.org/docs/api/browser-window)

## Dialog

> 显示用于打开和保存文件、警报等的本机系统对话框

{% codeblock "示例代码" lang:JavaScript %}
dialog.showMessageBox(child, {
  message: '这是一条信息'
})
{% endcodeblock %}

[Dialog](https://www.electronjs.org/docs/api/dialog#dialogshowmessageboxsyncbrowserwindow-options)

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/blacklisten/nblogs/edit/site/source/_posts/2020/Electron-Learning.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://wallhaven.cc" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>
