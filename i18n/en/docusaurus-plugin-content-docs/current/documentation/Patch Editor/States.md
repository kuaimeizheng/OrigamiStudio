---
title: States 状态
sidebar_position: 10
last_update:
  author: 蒯美政
---

# States 状态

每个原型都有多个可以转换的状态。 在 Origami 中，[Switch 开关](./../Utility/Switch.md) 模块可以帮助追踪模块所处的状态。它们就像电灯开关，可以通过交互模块进行切换。

---

## State patches 状态模块

### Switch ⇧S 卡关

[Switch](./../Utility/Switch.md) 开关模块就像一个电灯开关：打开就保持打开状态，关闭就保持关闭状态。

它有助于构建简单的只有两种状态的交互，例如在弹出窗口中显示和隐藏评论。

![](@site/static/img/docs/Patch%20Editor/states-1.png)

多个开关模块可以与逻辑模块（[Or 或](./../Logic/Or.md), [And 和](./../Logic/And.md), [Not 非](./../Logic/Not.md) ）组合在一起，相互构建，例如，打开一个具有不同附件选项的装置，用户可以切换这些选项。

### Option Switch 选项开关

[Option Switch 选项开关](./../Utility/Option%20Switch.md)模块适用于不能共存的互斥状态，例如标签栏。选项开关通常与选项选择器一起使用，以根据状态传递不同的值。

例如，如果要在 3 种状态之间更改导航栏标题：

![](@site/static/img/docs/Patch%20Editor/states-2.png)

### Counter 计数器

[Counter 计数器](./../Utility/Counter.md)模块适用于不能共存的互斥状态，并且以固定的顺序递增，例如，入职流程。

![](@site/static/img/docs/Patch%20Editor/states-3.png)

## Index numbers represent states 索引序号表示状态

[Switch 开关](./../Utility/Switch.md) 和 [Option Switch 选项开关](./../Utility/Option%20Switch.md) 模块都会输出激活状态的数字。

开关模块输出 0（关闭）或 1（打开），选项开关模块输出一个数字，第一个状态从 0 开始，第二个状态从 1 开始，依此类推：

- Index 0 → Initial state / Off State 索引 0 → 初始状态/关闭状态
- Index 1 → 2nd state / On State 索引 1 → 第二状态/打开状态
- Index 2 → 3rd state 索引 2 → 第三状态
- Index 3 → 4th state 索引 3 → 第四状态
- ...

---

## Summary 总结

- 使用开关、选项开关或计数器模块管理状态
- 状态用整数表示，从 0 开始
