---
title: Curve 曲线
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Curve 曲线

Change the rate of a linear animation progress to a new animation curve.

将线性动画的进度更改为新的动画曲线。

<div className="patch-container">
    <div className="patch processor">
        <h3>Curve</h3>
        <ul className="inputs">
            <li>Progress<span>0</span></li>
            <li>Curve<span>Linear</span></li>
        </ul>
        <ul className="outputs">
            <li>Progress<span>0</span></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Progress 进度

A number from 0-1 that represents the progress of the animation.

#### Curve 曲线

The easing curve to animate with.

动画的缓动曲线

The options are:

选项包括：

1. Linear 线性，匀速
2. Quadratic In, Out, In & Out 二次方缓入，缓出，缓入缓出
3. Cubic In, Out, In & Out 三次方缓入，缓处，缓入缓出
4. Exponential In, Out, In & Out 指数缓入，缓处，缓入缓出
5. Sinusoidal In, Out, In & Out 正弦缓入，缓处，缓入缓出

</div>
<div className="outputs">

### Output 输出

#### Progress 进度

The progress value derived from the new animation curve.

在这里输出新的曲线动画。

</div>
</div>

---

### Related Patches 相关模块

[Classic Animation 经典动画](./Classic%20Animation.md)

[Progress 进度](./../Utility/Progress.md)

[Transition 过渡](./../Utility/Transition.md)
