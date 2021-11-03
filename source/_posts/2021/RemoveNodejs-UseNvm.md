title: 卸载 Node.js 并使用 NVM
data:  2021-11-03 11:21:00
tags: 
- NodeJs
- nvm
categories:
- Front
- MacOs
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: https://z3.ax1x.com/2021/08/06/fnM1HA.jpg
thumbnail: https://z3.ax1x.com/2021/08/06/fnM1HA.md.jpg
---

参照这篇文章卸载掉了原有的 nodejs https://www.jianshu.com/p/3e0206dd23ac

安装 nvm，参照这篇文章 https://segmentfault.com/a/1190000039005726

<!-- more -->

### 问题一： nvm not found

    解决方案：brew info nvm
    输出信息如下：
    
[![IAY1bV.png](https://z3.ax1x.com/2021/11/03/IAY1bV.png)](https://imgtu.com/i/IAY1bV)

最后在 .zshrc 文件中添加如下代码块：

```bash
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

问题得到解决。

### 问题二：v12.13.0 版本安装失败

    最终解决方案：arch -x86_64 zsh 
    通过这个命令可以让 shell 运行在Rosetta2下。
之后你可以通过 nvm install v12 来安装低版本 Node。
在此之后，您可以不用在 Rosetta2 中就可以使用安装的可执行文件，也就是说，您可以将 Node v15与其他节点版本互换使用。

    方法二就是通过 Rosetta2 启动终端

### 问题三：重启终端后 nvm use …version 失效

[![IAYQuq.jpg](https://z3.ax1x.com/2021/11/03/IAYQuq.jpg)](https://imgtu.com/i/IAYQuq)

[![IAYlD0.png](https://z3.ax1x.com/2021/11/03/IAYlD0.png)](https://imgtu.com/i/IAYlD0)



解决方案：https://stackoverflow.com/questions/24585261/nvm-keeps-forgetting-node-in-new-terminal-session

[![IAYKvn.png](https://z3.ax1x.com/2021/11/03/IAYKvn.png)](https://imgtu.com/i/IAYKvn)

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/blacklisten/nblogs/edit/site/source/_posts/2021/RemoveNodejs-UseNvm.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://wallhaven.cc" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>
