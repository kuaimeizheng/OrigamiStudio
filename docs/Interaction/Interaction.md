---
sidebar_position: 2
---

# Interaction 交互

Capture touch events on specific layers. Note that layers must be enabled and have an opacity larger than 0 to receive touches.

捕获指定图层上的触摸事件。请注意，图层必须启用并且不透明度大于 0 才能接收触摸事件。

Detect [Double Tap](https://www.notion.so/Double-Tap-47170ee048384400a023e5749b34d441) or [Long Press](https://www.notion.so/Long-Press-f6f170c58c5d48938720250735334f34) with additional patches.

需使用额外的模块检测 Double Tap 或者 Long Press。

Use the Touch button on a layer to quickly add interactions.

使用图层上的 Touch触摸 按钮快速添加交互。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c78945f-a37d-46dd-aa8e-ef264317648e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170843Z&X-Amz-Expires=86400&X-Amz-Signature=8168d724e1ca2754cfbd107043278c1dfa203c14b6940254760bdaf01b27ef98&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Layer 图层**

The layer to check for touch interactions. When no layer is specified, the touches on the whole screen are registered.

检查触摸交互的图层。当没有指定图层时，触摸将会作用在整个屏幕上。

**Enable 启用**

A boolean that is true when touch detection is on. To disable interactions on this layer, disable it.

一个布尔值，当触摸检测启用时为真。要禁用此图层上的交互，请禁用它。

**Down 按下**

A boolean that is true when there is a touch on the layer.

一个布尔值，当图层上有触摸时为真。

**Tap 轻按**

A pulse that represents the moment a touch has been released from the layer (touch up) as long as the touch is inside of the layer and hasn’t moved.

一个脉冲，表示触摸在图层上没有移动，并且在图层上释放触摸的那一刻。

**Position 位置**

The position of the touch, relative to the center of the layer’s parent group or device

触摸的位置，相对于图层的父组或设备的中心。

**Force 压力**

A number between 0 and 6.67 that represents the force of the touch.

一个介于 0 到 6.67 之间的数值，表示触摸的力度。

------

### ***\*Related Patches 相关模块\****

[Hover 悬停](https://www.notion.so/Hover-8a951bdf20e149c38bef9ac012568e7c)

[Double Tap 双击](https://www.notion.so/Double-Tap-47170ee048384400a023e5749b34d441)

[Long Press 长按](https://www.notion.so/Long-Press-f6f170c58c5d48938720250735334f34)

[Scroll 滚动](https://www.notion.so/Scroll-2f1508bfbec742279786513c26602209)

[Gesture 手势](https://www.notion.so/Gesture-15b95cc3df9a4392808b8eec7af17734)

[Mouse 鼠标](https://www.notion.so/Mouse-7e67b503f9a44bc8bfff08505144b8c0)

[Touches 触摸](https://www.notion.so/Touches-2a30a276b98e4c11b8b23bda1cde914c)

[Trackpad 触控板](https://www.notion.so/Trackpad-b999de442b7342ed9a00aa3f9547ea65)
