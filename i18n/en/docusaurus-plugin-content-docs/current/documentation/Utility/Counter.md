---
title: Counter 计数器
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Counter 计数器

Create a counter that starts at 0 and can be incremented, decremented or set to a specific value. The counter is

- incremented by one when the Increase port receives a pulse,
- decremented by one when the Decrement port receives a pulse,
- set to the value specified by the Jump to Number port when the Jump port receives a pulse.

创建一个从 0 开始的计数器，可以递增、递减或设置为特定的值。

计数器是：

- 当 Increase 递增 接口收到值时递增 1；
- 当 Decrament 递减 接口收到值时递减 1；
- 当 Jump to number 跳转 接口收到值时，跳转到接口设置的值。

Constrain the counter by specifying a value in the Maximum Count port. If the counter is incremented after it reaches this maximum value, it will reset to zero. Decrementing the counter from its initial value will wrap it backwards to the maximum value. If the counter is constrained, the “Jump to Number” value must fall within bounds, otherwise the counter will return to the starting value.

通过在最大计数端口中指定值来约束计数器。如果计数器在达到该最大值后递增，它将重置为零。将计数器从其初始值递减将使其返回最大值。如果计数器受到约束，“跳转到数字”值必须在范围内，否则计数器将返回到起始值。

Often used to track a sequential state (ex: an onboarding flow) interchangeably with [Option Switch](./Option%20Switch.md). See [State Basics](./../PatchEditor/States.md) for more information.

通常用于跟踪顺序状态(例如:加载流程)，可与 [Option Switch](./Option%20Switch.md) 互换。更多信息请参考 [状态基础](./../PatchEditor/States.md) 。

![Image](./../../../static/img/docs/Utility/counter.png)

### Increase 递增

A pulse that increases the counter value by 1.

一个脉冲，表示当接收到值时，计数器的值加 1。

### Decrease

A pulse that decreases the counter value by 1.

一个脉冲，表示当接收到值时，计数器的值减 1。

### Jump 跳转

A pulse that resets the counter to the value specified by the Jump to Number port.

一个脉冲，表示当接收到值时，计数器跳转到 Jump to Number 设置的值。

### Jump to Number 跳转到的值

The number to use as the counter value when the Jump port is pulsed.

设置 Jump 端口接收到值时要跳转到的数值。

### Maximum Count 最大计数

The maximum counter value. The counter will reset to zero when the maximum value is reached. Note that the counter will always remain *less* than this value.

值的最大计数值。当达到最大值时，计算器将重置为零。请注意，计数器将始终保持小于此值。

### Output 输出

The current value of the counter (ex: 0, 1, 2…)

计数器的当前值（例如：0，1，2…）

------

### Related Patches 相关模块

[Switch 开关](./Switch.md)

[Option Switch 选项开关](./Option%20Switch.md)
