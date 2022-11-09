---
title: Reverse Progress 反转进度
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Reverse Progress 反转进度

---

Reverse a progress value, ex: 0 to 1 becomes 1 to 0, .3 becomes .7.

反转一个进度值，例如：0 到 1 变为 1 到 0，0.3 变为 0.7。

Useful to sync an animation that is reversed (ex: a photo that fades in as another fades out).

用于同步反转的动画（例如：一张照片淡入，另一张淡出）。

<div className="patch-container">
    <div className="patch processor">
        <h3>Reverse Progress</h3>
        <ul className="inputs">
            <li>Progress<span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Progress<span>0</span></li>
        </ul>
    </div>
</div>

### Progress 进度

A progress value. See [Animation Basics](./../PatchEditor/Animations.md) for more information.

一个进度值。有关详细信息，请参阅动画基础知识。

### Progress 进度

The reversed progress value. See [Animation Basics](./../PatchEditor/Animations.md) for more information.

反转进度值。有关详细信息，请参阅动画基础知识。

---

### Related Patches 相关模块

[Progress 进度](./Progress.md)

[Transition 过渡](./Transition.md)
