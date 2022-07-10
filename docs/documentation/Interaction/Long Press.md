---
sidebar_position: 2
---

# Long Press 长按

Capture long presses. To be used with the Down port in the [Interaction](./Interaction.md) patch.

Use the Touch button on a layer to quickly add interactions.

捕捉长按。Down接口需要连接[Interaction](./Interaction.md)模块使用。

使用图层右上角的Touch按钮快速创建交互。

![Image](./../../../static/img/docs/Interaction/long-press.png)

### Down 按下

A boolean that comes from the Interaction patch’s Down output.

Interaction模块的Down输出口连接到这里。

### Delay 延迟

The minimum time duration of the touch down to activate a long press. By default, the delay is 0.5s.

设置按下持续的最小时长激活 Long Press 模块。默认情况下，延迟为0.5s。

### Long Press 长按### 

Turns on when the press passes the duration specified in Delay input

按下Delay接口定义的最小时长时打开。

------

### Related Patches 相关模块

[Interaction 交互](./Interaction.md)

[Hover 悬停](./Hover.md)

[Double Tap 双击](./Double%20Tap.md)

[Mouse 鼠标](./Mouse.md)

[Touches 触摸](./../Device/Touches.md)

[Trackpad 触控板](./../Device/Trackpad.md)
