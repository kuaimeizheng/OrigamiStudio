---
sidebar_position: 2
---

# Option Switch 选项开关

Control two or more states using an index (0, 1, 2…). For two states, use [Switch](./Switch.md). Useful for tracking a state that is one of multiple options (ex: tab bar). Often used with Option Picker to select from two or more options. Formerly known as Index Switch.

Right-click to add additional states.

See [State Basics](./../Patch%20Editor/States.md) for more information.

使用索引（0，1，2 ...）控制两个或更多状态，用于需要在多个状态中选择一个的交互（如：标签栏）。只有两种状态一般用 [Switch] 模块。

与 [Option Picker](./Option%20Picker.md) 模块一起使用，Option Picker 相当于升级版 Transition 模块，用来定义多个值。以前称为 Index Switch索引开关。 右键增加更多状态（即左侧输入口的数量）。

查看  State Basics了解更多信息。

![Image](./../../../static/img/docs/Utility/option-switch.png)

### Set to 0 接口 1

A pulse that sets the Option Switch to option 0.

将端口接收到脉冲输出到右侧的Option端口

### Set to 1 接口 2

A pulse that sets the Option Switch to option 1.

### Set to 2 接口 3

A pulse that sets the Option Switch to option 2.

### Option 输出选项索引

An index that represents the state of the Option Switch

一个索引值，表示选项开关的状态，就是模块哪一个选项接收到了脉冲。

------

### Related Patches 相关模块

[Switch 开关](./Switch.md)

[Counter 计数器](./Counter.md)

[Option Picker 选项选择器](./Option%20Picker.md)

[Option Sender 选项发送器](./Option%20Sender.md)

[Option Equals 选项相等](./Option%20Equals.md)
