title: Electron问题集合
date: 2020-02-12 15:10:31
tags:
- Electron
categories:
- FAQ
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: https://z3.ax1x.com/2021/08/06/fnMBHs.jpg
thumbnail: https://z3.ax1x.com/2021/08/06/fnMBHs.md.jpg
---

Electron6.0.0版本部分window7设备上黑屏问题解决方案，官方问题[issues](https://github.com/electron/electron/issues/19569)

<!-- more -->

## Electron6.0.0版本部分window7设备上黑屏问题

具体解决方案，安装[.NET Framework 4.7.1](https://support.microsoft.com/en-us/help/4019990/update-for-the-d3dcompiler-47-dll-component-on-windows)window修复更新

![1HuKc4.png](https://s2.ax1x.com/2020/02/12/1HuKc4.png)

[下载修复页](https://support.microsoft.com/en-us/help/4020302/the-net-framework-4-7-installation-is-blocked-on-windows-7-windows-ser)

**根据不同的win7版本下载对应的补丁安装即可**

![1HusEt.png](https://s2.ax1x.com/2020/02/12/1HusEt.png)

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/blacklisten/nblogs/edit/site/source/_posts/2020/Electron-FAQ.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://wallhaven.cc" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>
