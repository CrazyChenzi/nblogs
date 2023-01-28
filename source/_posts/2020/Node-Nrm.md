title: 如何自定义切换Node源✨
date: 2020-03-25
tags:
- NodeJs
- nrm
categories:
- Configuration
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: /gallery/covers/nrm.svg
thumbnail: /gallery/covers/nrm.svg
---

在我们使用`nodejs`进行安包时，常常使用淘宝镜像 *https://registry.npm.taobao.org/* ，也是是`cnpm`源。
`nodejs`默认使用`npm`源，`npm`源在下载一些国外资源是速度比较慢，这个时候我们会考虑使用`npm config`全局配置`cnpm`源。
但由于我们有时候会有一些`package`放在自己的`npm`私服上面，我们可能需要在`npm cnpm 自己的npm`源上面来回切换，这个时候我们使用`npm config`进行全局配置就略显麻烦了。所以我们使用[nrm](https://github.com/Pana/nrm)进行`npm`源的管理。

<!-- more -->

全局**安装**`nrm`

{% codeblock "Git Bash/Shell" lang:bash %}
npm install nrm -g  or  yarn global add nrm
{% endcodeblock %}

一些基础命令

{% codeblock "Git Bash/Shell" lang:bash %}
nrm -V # 查看版本
nrm ls # 查看当前可选的源
  * npm -----  https://registry.npmjs.org/
  yarn ----- https://registry.yarnpkg.com
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  skimdb -- https://skimdb.npmjs.com/registry

nrm add <registry> <url> [home]  # 添加新源
nrm del <registry> # 删除
nrm use <registry> 选择你要使用的源
{% endcodeblock %}

<hr>

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/CrazyChenzi/nblogs/edit/site/source/_posts/2020/Node-Nrm.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://www.vecteezy.com/free-vector/vector-landscape" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>