---
sidebar_position: 5
---

# Pop Switch 流行开关

Swipe, rotate or pinch a layer between any two positions, rotations or scales, with added bouncy animations from [Pop Animation](./../Animation/Pop%20Animation.md).

在任意两个位置、旋转或缩放之间滑动、旋转或捏合图层，并添加来自 Pop Animation的弹性动画。

Use the Touch button on a layer to quickly add interactions.

使用触摸按钮在图层上面快速添加交互

![Image](./../../../static/img/docs/Interaction/pop-switch.png)

### Enable 启用

A boolean that is true when the gesture is enabled.

一个布尔值，表示当启用手势时为真。

### Layer 图层

The layer to capture gestures from.

捕捉手势的图层

### Gesture 手势

The gesture to detect. The options:

要检测的手势，包括选项：

1. Swipe X 滑动X轴
2. Swipe Y 滑动Y轴
3. Pinch Scale 捏合缩放
4. Pinch Rotate 捏合旋转
5. Pinch X 捏合X轴
6. Pinch Y 捏合Y轴

### Start Value 开始值

A number that represents the default position, scale or rotation of the layer.

一个数值，表示图层的默认位置、缩放或旋转。

### End Value 结束值

A number that represents the second position, scale or rotation of the layer that the gesture should animate towards.

一个数值，表示手势应该朝向的第二个位置、比例或旋转。

### Flip 翻转

A pulse that flips the state of the switch (from on to off, or vice versa), which will also animate the value to the corresponding number.

一个翻转开关状态的脉冲（从开到关，反之亦然），这也会将生成相应的数值。

### Turn On 打开

A pulse that turns the switch on, which will also animate the value to the end value. If the switch is already on, the pulse has no effect.

一个打开开关的脉冲，会将值设置为最终值。如果开关已打开，则脉冲无效。

### Turn Off 关闭

A pulse that turns the switch off, which will also animate the value to the start value. If the switch is already off, the pulse has no effect.

一个关闭开关的脉冲，会将值设置为开始值。如果开关已关闭，则脉冲无效。

### Bounciness 弹性

A number that represents the bounciness of the animation.

一个数值，表示动画的弹性。

### Speed 速度

A number that represents the speed of the animation.

一个数值，表示动画的速度。

### Value 值

A number that represents the current position, rotation or scale. Connect to the position X, position Y, rotation Z, or scale of the layer.

一个数值，表示当前的位置、旋转或比例。可以连接到图层的 X轴位置，Y轴位置，Z轴旋转位置或缩放。

### Progress 进度

A progress value that represents the animation progress between the start and end values. See [Animation Basics](./../PatchEditor/Animations.md) for more information.

一个进度值，表示开始值和结束值之间的动画进度。

查看更多请参考 Animation Basics。

### On/Off 开/关

A boolean that is true either: When the current position, rotation or scale of the gesture is closer to the end value than the start value. When the switch is flipped, turned on, or turned off with a pulse.

一个为真的布尔值:

当手势的当前位置、旋转或缩放更接近结束值而不是开始值时。当开关被点击、打开或关闭时，会有一个脉冲。

