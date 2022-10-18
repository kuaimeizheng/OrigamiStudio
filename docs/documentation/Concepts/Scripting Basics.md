---
title: Scripting Basics 脚本基础
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Scripting Basics 脚本基础

------

The Patch Editor offers a robust and flexible [programming environment](https://origami.design/tutorials/getting-started/coming-from-code.html) in Origami. However there are times when traditional imperative programming can be a better solution.

模块编辑器在Origami中提供了一个健壮而灵活的[编程环境](https://origami.design/tutorials/getting-started/coming-from-code.html)。然而，有时传统的命令式编程可能是更好的解决方案。

Thanks to the new Javascript Patch, Origami can now directly run JavaScript ([ES6*](https://github.com/facebook/hermes/blob/main/doc/Features.md)) via its Hermes runtime.

多亏了新的Javascript模块，Origami现在可以通过Hermes运行时直接运行Javascript ([ES6*](https://github.com/facebook/hermes/blob/main/doc/Features.md))。

## Getting a script into Origami 在Origami中编写脚本

There are two ways to add a JavaScript Patch into Origami:

有两种方法添加JavaScript模块到Origami:

