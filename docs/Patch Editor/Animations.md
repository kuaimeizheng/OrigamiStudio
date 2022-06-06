---
sidebar_position: 4
---

# Animations 动画

Animation patches in Origami are designed to be fluid and reversible: they take any changing number and tween it to be smooth.

Origami 中的动画模块的设计流畅且可反转。为了动画平滑采用一直变化的数字和补间。

------

# Animation patches 动画模块

- [Pop Animation]  A Natural bouncy animations commonly found in Facebook apps, and easily pass values to your developers with the the [Pop](https://github.com/facebook/pop) framework for iOS, [Rebound](https://facebook.github.io/rebound/) for Android, and [Rebound JS](https://github.com/facebook/rebound-js) for the web.
- [Classic Animation]  C Traditional easing curves, like linear, ease-in, and ease-out.
- [Repeating Motion]  Repeating, back-and-forth animations with easing curves.
- [流行动画] 脸书应用中常见的自然弹性动画，因为是通过 iOS 的 POP 框架、Android 的 Rebound 和 Web 的 Rebound JS 框架，所以可以轻松将参数传递给开发人员。
- [经典动画]  传统的缓动曲线，如线性、缓入、缓出。
- [重复动画] 带有缓动曲线的重复、来回动画。

------

# Animating values 动画值

In combination with an [Interaction] or a [Switch] patch, which output 0 or 1, an Animation patch can tween that value so it smoothly animates from 0 to 1, and vice versa. Origami refers to this 0 to 1 value generally as ### progress### .

与输出 0 或 1 的j交互或Switch开关模块结合使用时，动画模块可以对该值进行补间，使其平滑地从0过渡到1，反之亦然。Origami 通常将这个 0 到 1 的值称为 进度。

This example below will scale a Layer from 0 to 1 (or 0% to 100%) when you touch down, with a reversible and bouncy animation:

下面的示例将在您按下时将图层从 0 缩放到 1（或 0% 到 100%），并带有反转且有弹性的动画：

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/99d8acfe-3a47-4f92-a1ee-e61f5d729d17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162639Z&X-Amz-Expires=86400&X-Amz-Signature=71344bc5ae0133c79afcecf55387f867227450d220112c68f8636b3413ffbff4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Transitions 过渡

Animating from 0 to 1 is simple, but what about animating between other values?

从0到1设置动画很简单，但是在其他值之间设置动画呢？

[Transition]  T patches let you transform that 0/1 into any start/end value:

转换模块可以让你将 0/1 转换为任何 开始/结束值:

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8d9d0cc6-444e-4074-8061-93df45cd0d58/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162651Z&X-Amz-Expires=86400&X-Amz-Signature=820f4422dd4c72786a5661ac3814f06eda8ca2746278aa1b62edbfcc67b624fb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

For example, if you want to animate a Layer’s width from 100px to 200px. You would specify a Start Value of 100, and an End Value of 200. In combination with the animated 0 to 1 value from above, you can easily animate a Layer’s width.

例如，如果您想将图层的宽度从 100 像素设置为 200 像素。 您将设置起始值 100，结束值 200。结合上面的 0 到 1 动画值，您可以轻松地为图层宽度设置动画。

With a Progress of 0:

进度为 0 时:

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/82b8c4a8-5277-447e-8bfc-4bccca874a9a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162700Z&X-Amz-Expires=86400&X-Amz-Signature=f8cf8c8ff036c91850f315702baa51b8fe2273d706244c142220defb47c5b6cf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

With a Progress of .5:

进度为 0.5 时:

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9cf734f7-1e7a-4426-9441-2bfff356ceef/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162709Z&X-Amz-Expires=86400&X-Amz-Signature=a4c877a0c310c02cc9b30096c69101245a689246b44ed1e81d294805941986f8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

With a Progress of 1:

进度为 1 时:

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/30f259d8-69b5-444f-b740-7bd74e0a974f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162720Z&X-Amz-Expires=86400&X-Amz-Signature=0732a4d23f436ca1b9a8ed787917028a650b5f82066919ac0e7d8fc3f5a845a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

In combination with an animation patch, you can now animate between any two values easily:

结合动画模块，您现在可以轻松地在任意两个值之间制作动画：

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3dfcdb5b-ef46-442c-84ca-a0e5837e3c90/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162729Z&X-Amz-Expires=86400&X-Amz-Signature=53fb776e29981a9f0009696166f47ecc4c09ef77ec3eedcbcc0b84f192947229&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

------

# Summary 总结

- Pop Animation and Classic Animation automatically tween any number.
- Interaction, Switch, Animation, Transition (ISAT) are your bread and butter for animating layers.
- Sync multiple animations together by using one animation patch connected to multiple Transitions, which map progress of 0-1 to any start/end values.
- 流行动画和经典动画自动补间任意数字。
- 交互、开关、动画、过渡 (ISAT) 是您制作图层动画的基础。
- 同步多个动画时，可以通过将一个动画模块连接到多个过渡模块来实现，将 0-1 的进度映射到任何 开始/结束值。
