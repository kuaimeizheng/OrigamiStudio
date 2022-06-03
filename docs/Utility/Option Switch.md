---
sidebar_position: 2
---

# Option Switch 选项开关

Control two or more states using an index (0, 1, 2…). For two states, use [Switch](https://origami.design/documentation/patches/builtin.switch.html). Useful for tracking a state that is one of multiple options (ex: tab bar). Often used with Option Picker to select from two or more options. Formerly known as Index Switch.

Right-click to add additional states.

See [State Basics](https://www.notion.so/States-f6b16f4ab5014bbabfa37251885c1d09) for more information.

使用索引（0，1，2 ...）控制两个或更多状态，用于需要在多个状态中选择一个的交互（如：标签栏）。只有两种状态一般用 [Switch] 模块。

与 [Option Picker](https://www.notion.so/Option-Picker-26fa02ba463b47be8b9c4098357d5dfb) 模块一起使用，Option Picker 相当于升级版 Transition 模块，用来定义多个值。以前称为 Index Switch索引开关。 右键增加更多状态（即左侧输入口的数量）。

查看  State Basics了解更多信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c84c92d2-ce0c-440e-b8ff-f050c9e3edb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181514Z&X-Amz-Expires=86400&X-Amz-Signature=c203ef53041e85ba8b6014a0c73c312c9b5ed4fde5e0a5226c7a0ed1cfc4a298&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Set to 0 接口 1

A pulse that sets the Option Switch to option 0.

将端口接收到脉冲输出到右侧的Option端口

### Set to 1 接口 2### 

A pulse that sets the Option Switch to option 1.

### Set to 2 接口 3### 

A pulse that sets the Option Switch to option 2.

### Option 输出选项索引

An index that represents the state of the Option Switch

一个索引值，表示选项开关的状态，就是模块哪一个选项接收到了脉冲。

------

### Related Patches 相关模块

[Switch 开关](https://www.notion.so/Switch-bd684625ec8b4aaa9ff9b5ae3e396e86)

[Counter 计数器](https://www.notion.so/Counter-d206f21658ca469e9d7dd2ccf80c8001)

[Option Picker 选项选择器](https://www.notion.so/Option-Picker-26fa02ba463b47be8b9c4098357d5dfb)

[Option Sender 选项发送器](https://www.notion.so/Option-Sender-d36296ca4f44472094031e55ef7546ce)

[Option Equals 选项相等](https://www.notion.so/Option-Equals-638d7c82510948fbbdba0bbd8a18ba7f)
