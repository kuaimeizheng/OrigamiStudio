---
sidebar_position: 2
---

# Spring Converter 弹性转换器

Allows for conversion from Apple’s Fluid Spring dynamics values (see SwiftUI) to either Tension / Friction (for use with [Spring Animation]) or Bounciness / Speed ([Pop Animation])

允许将 Apple 的流体弹簧动力学值（请参阅 SwiftUI）转换为张力/摩擦力（用于弹性动画）或弹力/速度（流行动画）

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f5bc172d-6cdb-4393-ba21-3d826f19027c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T151735Z&X-Amz-Expires=86400&X-Amz-Signature=63a395fd918fa6af9a4bb96b09e5b74b82c3bfadce4c23eb2b5c9730ce89c961&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Response 回复

Approximately how long for the spring animation to reach its destination.

弹性动画需要多长时间才能达到目标。

### Damping Fraction 阻尼分数

A value from 0 to 1 describing how much the spring should be damped around its end destination. 0 means don’t apply any damping and oscillate endlessly, 1 means don’t bounce at all around the destination.

一个从 0 到 1 的值，描述弹簧应在其最终目标附近阻尼多少。0 表示不施加任何阻尼并无休止地振荡，1 表示在目标周围完全不反弹。

### Tension 张力

A number that represents spring tension. (Spring Animation)

一个数字，代表弹簧的张力。 （弹性动画）

### Friction 摩擦

A number that represents spring tension. (Spring Animation)

一个数字，代表弹簧的摩擦力。 （弹性动画）

### Bounciness 弹性

A number that represents spring bouciness (Pop Animation)

一个数字，代表弹簧的弹力。（流行动画）

### Speed 速度

A number that represents spring speed (Pop Animation)

一个数字，代表弹簧的速度。（流行动画）

---

### Related Patches 相关模块

[Pop Animation 流行动画]

[Bouncy Converter 弹性转换器]

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/867122ea-46b5-4df3-a833-85c665f63ab5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T151749Z&X-Amz-Expires=86400&X-Amz-Signature=f2c612458874d231803c1d16f6fea3b586545e531629b9a12664e8dee13396d3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
