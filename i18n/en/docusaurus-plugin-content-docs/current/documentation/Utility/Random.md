---
title: Random 随机
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Random 随机

Generate a random number (with decimals) that falls between two numbers of your choice. The patch will generate and output a random number each time it receives a pulse on its Randomize port.

生成一个介于您设置的两个数字之间的随机数（带小数）。模块每次在其 Randomize 端口上接收到脉冲时，都会生成并输出一个随机数。

![Image](./../../../static/img/docs/Utility/random.png)

### Randomize 随机化

A pulse that generates a new random number.

产生新随机数的脉冲。

### Start Value 开始值

The lowest random number.

最小的随机数。

### End Value 结束值

The highest random number.

最大的随机数。

### Value 值

A random number (with decimals). Use the [Round](./../Math/Round.md) patch to round the number to an integer.

随机数(包括小数)。使用 [Round](./../Math/Round.md) 模块将数字四舍五入为整数。

------

### Related Patches 相关模块

[Round 四舍五入](./../Math/Round.md)
