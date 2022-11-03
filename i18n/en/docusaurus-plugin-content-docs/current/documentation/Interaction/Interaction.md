---
sidebar_position: 5
---

# Interaction 交互

Capture touch events on specific layers. Note that layers must be enabled and have an opacity larger than 0 to receive touches.

捕获指定图层上的触摸事件。请注意，图层必须启用并且不透明度大于 0 才能接收触摸事件。

Detect [Double Tap](h./../Double%20Tap.md) or [Long Press](./Long%20Press.md) with additional patches.

需使用额外的模块检测 Double Tap 或者 Long Press。

Use the Touch button on a layer to quickly add interactions.

使用图层上的 Touch触摸 按钮快速添加交互。

![Image](@site/static/img/docs/Interaction/interaction.png)

### Layer 图层

The layer to check for touch interactions. When no layer is specified, the touches on the whole screen are registered.

检查触摸交互的图层。当没有指定图层时，触摸将会作用在整个屏幕上。

### Enable 启用

A boolean that is true when touch detection is on. To disable interactions on this layer, disable it.

一个布尔值，当触摸检测启用时为真。要禁用此图层上的交互，请禁用它。

### Down 按下

A boolean that is true when there is a touch on the layer.

一个布尔值，当图层上有触摸时为真。

### Tap 轻按### 

A pulse that represents the moment a touch has been released from the layer (touch up) as long as the touch is inside of the layer and hasn’t moved.

一个脉冲，表示触摸在图层上没有移动，并且在图层上释放触摸的那一刻。

### Position 位置

The position of the touch, relative to the center of the layer’s parent group or device

触摸的位置，相对于图层的父组或设备的中心。

### Force 压力

A number between 0 and 6.67 that represents the force of the touch.

一个介于 0 到 6.67 之间的数值，表示触摸的力度。

------

### Related Patches 相关模块

[Hover 悬停](./Hover.md)

[Double Tap 双击](./Double%20Tap.md)

[Long Press 长按](./Long%20Press.md)

[Scroll 滚动](./Scroll.md)

[Gesture 手势](./Gesture.md)

[Mouse 鼠标](./Mouse.md)

[Touches 触摸](./../Device/Touches.md)

[Trackpad 触控板](./../Device/Trackpad.md)
