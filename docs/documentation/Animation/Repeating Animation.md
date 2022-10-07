---
sidebar_position: 5
---

# Repeating Animation 重复动画

Animate a number (ex: position, opacity, scale) repeatedly.

重复数字动画（例如：位置、不透明度、比例）。

![Image](./../../../static/img/docs/Animation/repeating-animation.png)

### Enable 启用

A boolean that turns the animation on/off.

一个布尔值，表示打开/关闭动画。

### Duration 持续时间

The length, in seconds, of the animation in one direction.

动画在一个方向上的长度，以秒为单位。

### Curve 曲线

The easing curve to animate with. The options are:

用于动画的缓和曲线。有以下选项:

1. Linear
2. Quadratic In, Out, In & Out
3. Cubic In, Out, In & Out
4. Exponential In, Out, In & Out
5. Sinusoidal In, Out, In & Out

### Mirrored 镜像

A boolean that makes the animation animate back and forth between 0 and 1. If false, the animation will reset immediately to 0 when it hits 1.

一个布尔值，使动画在0和1之间来回动画。如果为false，动画将在点击 1 时立即重置为 0。

### Reset 复位

A pulse that returns the animation to the beginning.

让动画跳回开始时。

### Progress 进度

A progress value. See [Animation Basics] for more information.

一个进度值。更多信息参考 [动画基础](./../Patch%20Editor/Animations.md)。

---

### Related Patches 相关模块

[Pop Animation 流行动画](./Pop%20Animation.md)

[Classic Animation 经典动画](./Classic%20Animation.md)

[Curve 曲线](./Curve.md)

[Repeating Pulse 重复脉冲](./../Utility/Repeating%20Pulse.md)

