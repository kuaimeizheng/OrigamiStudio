---
sidebar_position: 2
---

# Gesture 手势

A more advanced Interaction patch (see [Interaction](https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc) for more information). Provides translation and velocity as outputs to build interruptible animations (e.g. with [Spring Animation](https://www.notion.so/Spring-Animation-a19684147ec740ccbf6d62d962990a98)).

高级交互模块（有关更多信息，请参阅交互）。提供平移和速度来构建可中断的动画（例如，使用 Spring Animation）。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5860ec57-0c9e-48ac-8f97-9b71f8b1ae3a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170756Z&X-Amz-Expires=86400&X-Amz-Signature=08fff94af2474fb934689bd96a8a8a3ff3b385f4f1be166bcc9ce2728414f0a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Layer 图层**

The layer to check for touch interactions. When no layer is specified, the touches on the whole screen are registered.

检查触摸交互的图层。未指定图层时，将触摸整个屏幕。

**Enabled 启用**

A boolean that is true when touch detection is on. To disable interactions on this layer, disable it.

一个布尔值，表示打开触摸检测时为真。要禁用此层上的交互，请禁用它。

**Down 按下**

A boolean that is true when there is a touch on the layer.

一个布尔值，当图层上有触摸时为真。

**Tap 轻触**

A pulse that represents the moment a touch has been released from the layer (touch up) as long as the touch is inside of the layer and hasn’t moved.

一种脉冲，表示只要触摸在图层内且未移动，触摸已从图层中释放（触碰）的时刻。

**Position 位置**

The position of the touch, relative to the center of the layer’s parent group or device

触摸的位置，相对于图层的父组或设备的中心

**Velocity 速度**

The current velocity of the touch in points per second.

触摸的当前速度，单位是点/秒。

**Translation 过渡**

The translation of the touch relative to where the touch initially started.

触摸的平移相对于触摸最初开始的位置。

------

### ***\*Related Patches 相关模块\****

[Spring Animation 弹性动画](https://www.notion.so/Spring-Animation-a19684147ec740ccbf6d62d962990a98)

[Interaction 交互](https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/27379028-fd73-40de-8cc4-36057e96847f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170805Z&X-Amz-Expires=86400&X-Amz-Signature=9123d3685a212390544607601a15377f948f499bfb2e60c7ef99d71ed5bcbf57&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
