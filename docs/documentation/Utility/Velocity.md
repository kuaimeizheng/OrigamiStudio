---
sidebar_position: 5
---

# Velocity 速度

Measure the speed that a value is changing. Takes the value in the current frame and subtracts the value in the previous frame (ex: current: 3, previous: 2, velocity: 1).

测量一个值变化的速度。获取当前帧中的值并减去前一帧中的值(例如:current: 3, previous: 2, velocity: 1)。

Often used to measure the distance a touch has moved (ex: Drag, Scroll).

通常用于测量触摸移动的距离(例如:拖动，滚动)。

![Image](./../../../static/img/docs/Utility/velocity.png)

### Input 输入

The number to measure.

要测量的数字。

### Output 输出

The change in the number between the current and previous frame.

当前帧和前一帧之间的数字变化。

------

### Related Patches 相关模块

[Drag 拖拽](./../Interaction/Drag.md)

[Scroll 滚动](./../Interaction/Scroll.md)

[+ 加](./../Math/+.md)
