---
sidebar_position: 2
---

# Transition 过渡

Convert a value between 0 and 1 (often a progress value) to a value between a new range defined by the start and end values.

将 0 和 1 之间的值（通常是进度值）转换为由开始值和结束值定义的新范围之间的值。

For example, if the start value is 50 and the end value is 100:

例如，如果开始值为 50，结束值为 100：

- a progress of 0 will output 50 0 进度时将输出50
- a progress of .5 will output 75 0.5 进度时将输出75
- a progress of 1 will output 100 1 进度时将输出100

The number wraps when progress exceeds the 0 to 1 range:

当进度超过0到1范围时，数字会自动换行：

- a progress of -.5 will output 25 -.5进度时将输出25
- a progress of 2 will output 150 2进度时将输出150

Convert a number from any range to 0 to 1 with [Progress](./Progress.md).

使用 Progress 可以将任意范围内的数值转换为 0 到 1。

Often used with a [Switch](./Switch.md) and [Pop](./../Animation/Pop%20Animation.md)/[Classic Animation](./../Animation/Classic%20Animation.md). See [Animation Basics](./../Patch%20Editor/Animations.md) for more information.

Right-click to change the type (ex: number, position, color).

通常与 Switch 和 Pop/Classic Animation 使用。了解更多信息请参考 Animation Basics。

右键单击以更改需要转换的类型，

例如：

Anchor 锚点

Color 颜色

Index 索引

Number 数值

Point 3D 3D点

Position 位置

Progress

Size 大小

Size Axis

![Image](./../../../static/img/docs/Utility/transition.png)

### Progress 进度

A progress value. See [Animation Basics](./../Patch%20Editor/Animations.md) for more information.

进度值。更多信息请参考 Animation Basics

### Start 开始

The start value of the new range.

新范围的开始值（最小值）。

### End 结束

The end value of the new range.

新范围的结束值（最大值）。

### Output 输出

The converted value.

转换后的值。

### 支持类型

![Image](./../../../static/img/docs/Utility/transition-item.png)

------

### Related Patches 相关模块

[Pop Animation 流行动画](./../Animation/Pop%20Animation.md)

[Classic Animation 经典动画](./../Animation/Classic%20Animation.md)

[Switch 开关](./Switch.md)

[Progress 进度](./Progress.md)

[Option Picker 选项选择器](./Option%20Picker.md)

[Clip 裁剪](./Clip.md)
