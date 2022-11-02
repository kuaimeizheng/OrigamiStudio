---
title: Animations 动画
sidebar_position: 15
last_update:
  author: 蒯美政
---

# Animations 动画

Origami 中的动画模块的设计流畅且可反转。为了动画平滑采用一直变化的数字和补间。

---

## Animation patches 动画模块

- **[Pop Animation 流行动画]** 脸书应用中常见的自然弹性动画，因为是通过 iOS 的 POP 框架、Android 的 Rebound 和 Web 的 Rebound JS 框架，所以可以轻松将参数传递给开发人员。
- **[Classic Animation经典动画]** 传统的缓动曲线，如线性、缓入、缓出。
- **[Repeating Animation 重复动画]** 带有缓动曲线的重复、来回动画。

---

## Animating values 动画值

与输出 0 或 1 的 j [Interaction] 或 [Switch] 开关模块结合使用时，动画模块可以对该值进行补间，使其平滑地从 0 过渡到 1，反之亦然。

Origami 通常将这个 0 到 1 的值称为 **进度**。

下面的示例将在您按下时将图层从 0 缩放到 1（或 0% 到 100%），并带有反转且有弹性的动画：

![Image](./../../../static/img/docs/Patch%20Editor/animations-1.png)

## Transitions 过渡

从 0 到 1 设置动画很简单，但是在其他值之间设置动画呢？

[Transition] T 模块可以让你将 0/1 转换为任何 开始/结束值:

![Image](./../../../static/img/docs/Patch%20Editor/animations-2.png)

例如，如果您想将图层的宽度从 100 像素设置为 200 像素。 您将设置起始值 100，结束值 200。结合上面的 0 到 1 动画值，您可以轻松地为图层宽度设置动画。

进度为 0 时:

![Image](./../../../static/img/docs/Patch%20Editor/animations-3.png)

进度为 0.5 时:

![Image](./../../../static/img/docs/Patch%20Editor/animations-4.png)

进度为 1 时:

![Image](./../../../static/img/docs/Patch%20Editor/animations-5.png)

结合动画模块，您现在可以轻松地在任意两个值之间制作动画：

![Image](./../../../static/img/docs/Patch%20Editor/animations-6.png)

---

## Summary 总结

- Pop Animation 流行动画 和 Classic Animation 经典动画 自动补间任意数字。
- Interaction 交互、Switch 开关、Animation 动画、Transition 过渡 (ISAT) 是您制作图层动画的基础。
- 同步多个动画时，可以通过将一个动画模块连接到多个过渡模块来实现，将 0-1 的进度映射到任何 开始/结束值。
