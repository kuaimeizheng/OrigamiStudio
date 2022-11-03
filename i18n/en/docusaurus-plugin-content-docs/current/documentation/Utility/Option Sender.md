---
title: Option Sender 选项发送器
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Option Sender 选项发送器

Pick one of the outputs to send the value to. Often used with Option Switch to control which output to send the value to. Formerly known as Demultiplexer.

把值发送到选中的一个输出口。 通常与 [Option Switch](./Option%20Switch.md) 一起使用来控制把值发送哪个输出口。

Right-click to change the type (ex: color, boolean), or to add additional options.

右键更改类型 (如：颜色、布尔值)，或添加其它选项。

![Image](./../../../static/img/docs/Utility/option-sender.png)

### Option 选项

An index (starting at 0) that represents the output to send the value to.

一个索引（从 0 开始），表示要将值发送到输出端口。

### Value 值

A value to be passed to the selected output.

传递到所选输出端口的值。

### Default 默认

A value to be passed to the unselected outputs.

要传递到未选择输出端口的值。

### Output 输出

If selected (option is 0), the value. Otherwise, the default.

如果选择（选项为 0），则该值。否则为默认。

### Output 输出

If selected (option is 1), the value. Otherwise, the default.

如果选择（选项为 0），则该值。否则为默认。

------

### Related Patches 相关模块

[Option Picker 选项选择器](./Option%20Picker.md)

[Option Equals 选项相等](./Option%20Equals.md)
