title: commitizen规范commit
date: 2020-09-24
tags:
- commitizen
categories:
- Git
language: zh-CN
toc: true
providers:
    cdn: loli
    fontcdn: loli
    iconcdn: loli
cover: https://z3.ax1x.com/2021/08/06/fnMJ4P.jpg
thumbnail: https://z3.ax1x.com/2021/08/06/fnMJ4P.md.jpg
---

在多人协作的项目中，如果`Git`提交说明过于混乱，是不利于代码**review**的。如果`Git`提交说明足够精准、详细，不仅有利于代码的**review**也有利于后期排查问题，甚至我们可以根据`commit`信息生成响应日志。
本文主要介绍通过[cz](https://github.com/commitizen/cz-cli)工具，以及附和`Angular`规范的提交说明来规范`commit`信息。也可以查看[vuejs](https://github.com/vuejs/vue)，他的提交说明就是根据`Angular`规范来的。
本文示例: [cz-example](https://github.com/CrazyChenzi/cz-example)

<!-- more -->

## 配置

{% codeblock "Git Bash/Shell" lang:bash %}
npm install -g commitizen
npm install @commitlint/cli @commitlint/config-conventional conventional-changelog conventional-changelog-cli cz-conventional-changelog husky -D
{% endcodeblock %}

创建**commitlint.config.js**

{% codeblock "javascript" lang:javascript %}
module.exports = {
  extends: ['@commitlint/config-conventional']
}
{% endcodeblock %}

修改**package.json**

{% codeblock "点击展开代码" lang:json >folded %}
"scripts": {
    "version": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
},
"config": {
    "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
    }
},
"husky": {
    "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}
{% endcodeblock %}

## 提交流程

- git cz
- Select the type of change that you're committing
  - feat:     A new feature
  - fix:      A bug fix
  - docs:     Documentation only changes
  - style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - refactor: A code change that neither fixes a bug nor adds a feature
  - perf:     A code change that improves performance
  - test:     Adding missing tests or correcting existing tests
- What is the scope of this change (e.g. component or file name): (press enter to skip)   填写所修改的组件、文件名。**可跳过**
- Write a short, imperative tense description of the change 进行一个简短的描述  max 94
- Provide a longer description of the change 进行一个详细的描述**可跳过**
- Are there any breaking changes? 是否发生重大改变 **可跳过**
  - A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself：重大改变的描述

- git pull
- git push

- 在merge到master之前需要生成CHANGELOG，之后合并最近的两个commit即可merge

## 具体解释

### 规范的Git提交说明

- 提供更多的历史信息，方便快速浏览
- 可以过滤某些`commit`，便于筛选代码`review`
- 可以追踪`commit`生成更新日志
- 可以关联**issues**

#### `Git`提交说明结构

`Git`**提交说明**可分为三个部分：**Header、Body**和**Footer**。

{% codeblock  lang:html %}
<Header> <Body> <Footer>
{% endcodeblock %}

#### Header

**Header**部分包括三个字段**type（必需）**、*scope（可选）*和**subject（必需）**。

{% codeblock  lang:html %}
<type>(<scope>): <subject>ja
{% endcodeblock %}

{% raw %}<article class="message is-info"><div class="message-body">{% endraw %}
Vue源码的提交说明省略了*scope*。
{% raw %}</div></article>{% endraw %}

#### type

**type**用于说明 `commit` 的提交性质。

| 值       | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新增一个功能                                                 |
| fix      | 修复一个bug                                                  |
| docs     | 文档变更                                                     |
| style    | 代码格式（不影响功能，例如空格、分号等格式修正）             |
| refactor | 代码重构                                                     |
| perf     | 改善性能                                                     |
| test     | 测试                                                         |
| build    | 变更项目构建或外部依赖（例如scopes：`webpack`、`gulp`、`npm`等）   |
| ci       | 更改持续集成软件的配置文件和`package`中的`scripts`命令，例如scopes：Travis、Circle等 |
| chore    | 变更构建流程活辅助工具                                       |
| revert   | 代码回退                                                     |

#### scope

*scope*说明`commit`影响的范围。*scope*依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。

{% raw %}<article class="message is-warning"><div class="message-body">{% endraw %}
提示：*scope*可以省略。
{% raw %}</div></article>{% endraw %}

#### subject

**subject**是`commit`的简短描述。

#### Body

`commit`的详细描述，说明代码提交的详细说明。

#### Footer

如果代码的提交是**不兼容变更**或**关闭缺陷**，则**Footer**必需，否则可以省略。

#### 不兼容变更

当前代码与上一个版本不兼容，则**Footer**以**BREAKING CHANGE**开头，后面是对变动的描述、以及变动的理由和迁移方法。

#### 关闭缺陷

如果当前提交是针对特定的issue，那么可以在**Footer**部分填写需要关闭的单个 issue 或一系列issues。

### Commitizen

[commitizen/cz-cli](https://github.com/commitizen/cz-cli)是一个可以实现规范的**提交说明**的工具：

**When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit (though that can still be helpful). No more digging through CONTRIBUTING.md to find what the preferred format is. Get instant feedback on your commit message formatting and be prompted for required fields.**

提供选择的提交信息类别，快速生成**提交说明**。安装cz工具:

{% codeblock "Git Bash/Shell" lang:bash %}
npm install -g commitizen
{% endcodeblock %}

### Commitizen适配器

#### cz-conventional-changelog

如果需要在项目中使用**commitizen**生成符合AngularJS规范的**提交说明**，初始化**cz-conventional-changelog**适配器：

{% codeblock "Git Bash/Shell" lang:bash %}
commitizen init cz-conventional-changelog --save --save-exact
{% endcodeblock %}

初始化命令主要进行了3件事情

1. 在项目中安装**cz-conventional-changelog** 适配器依赖
2. 将适配器依赖保存到`package.json`的`devDependencies`字段信息
3. 在`package.json`中新增`config.commitizen`字段信息，主要用于配置cz工具的适配器路径：

{% codeblock "json" lang:json %}
"devDependencies": {
 "cz-conventional-changelog": "^2.1.0"
},
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
{% endcodeblock %}

### Commitizen日志

如果使用了[cz](https://github.com/commitizen/cz-cli)工具集，配套[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog)可以快速生成开发日志：

{% codeblock "Git Bash/Shell" lang:bash %}
npm install conventional-changelog conventional-changelog-cli -D
{% endcodeblock %}

在`pacage.json`中加入生成日志命令：

{% codeblock "json" lang:json %}
"version": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
{% endcodeblock %}

You could follow the following workflow

- Make changes
- Commit those changes
- Pull all the tags
- Run the npm version [patch|minor|major] command
- Push

执行`npm run version`后可查看生产的日志[CHANGELOG.md](https://github.com/ziyi2/cz-example/blob/master/CHANGELOG.md)。

{% raw %}<article class="message is-warning"><div class="message-body">{% endraw %}
注意要使用正确的**Header**的**type**，否则生成的日志会不准确，这里只是一个示例，生成的日志不是很严格。
{% raw %}</div></article>{% endraw %}

## 参考

[Cz工具集使用介绍 - 规范Git提交说明](https://juejin.im/post/6844903831893966856)

<hr>

<article class="message message-immersive is-warning">
<div class="message-body">
<i class="fas fa-question-circle mr-2"></i>Something wrong with this article? 
Click <a href="https://github.com/CrazyChenzi/nblogs/edit/site/source/_posts/2020/Commitizen.md">here</a> 
to submit your revision.
</div>
</article>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;line-height:1.2;display:inline-block;border-radius:3px" href="https://wallhaven.cc" target="_blank" rel="noopener noreferrer" title="Vector Landscape Vectors by Vecteezy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Vector Landscape Vectors by Vecteezy</span></a>
