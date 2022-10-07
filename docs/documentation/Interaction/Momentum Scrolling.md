---
sidebar_position: 5
---

# Momentum Scrolling 动量滚动

For advanced use only — use the Scroll patch instead.

仅供高级用户使用-可以使用Scroll模块代替。

Simulate the momentum physics that powers the Scroll patch. Use in a feedback loop that integrates the velocity of an interaction.

模拟Scroll模块的动量物理的功能。在集成交互速度的反馈循环中使用。

![Image](./../../../static/img/docs/Interaction/momentum-scrolling.png)

### Sample Value 采样值

A boolean that is true when the patch is sampling the input value. Usually connected to an Interaction patch’s down output.

一个布尔值，当模块对输入值进行采样时为 true。通常连接到交互模块的 down 输出端口。

### Value 值

A number that represents the value to add momentum physics to. Usually connected to an Interaction patch’s position X or Y.

一个数字，表示要向其添加动量物理的值。通常连接到交互模块的位置 X 或 Y。

### Scrolling Friction 滚动摩擦力

A number between 1-100 that represents the friction that slows down the value when its velocity increases sharply and sampling stops (ex: a scroll flick).

一个介于 1-100 之间的数字，表示当其速度急剧增加且采样停止（例如：滚动轻移）时减慢该值的摩擦力。

### Rubber Band Tension 橡皮筋张力

A number between 10-1000 that represents the speed the value returns to the boundaries after sampling stops if it exceeds the boundaries.

一个介于 10-1000 之间的数字，表示如果值超过边界，则采样停止后返回边界的速度。

### Rubber Band Friction 橡皮筋摩擦力

A number between 10-1000 that represents the friction that slows down the value returning to the boundaries after sampling stops if it exceeds the boundaries.

一个介于 10-1000 之间的数字，表示在采样后减慢返回边界的值的摩擦，如果超出边界，则停止。

### Output 输出

The value with momentum added. Feed back into the Value input and add velocity with a + patch.

增加动量的值。反馈到值输入中，并使用 + 模块添加速度。

------

### Related Patches 相关模块

[Scroll 滚动](./Scroll.md)

[Drag 拖拽](./Drag.md)

[Pop Switch 流行开关](./Pop%20Switch.md)

[Interaction 交互](./Interaction.md)

[Touches 触摸](./../Device/Touches.md)

[Trackpad 触控板](./../Device/Trackpad.md)

[+ 加](./../Math/+.md)
