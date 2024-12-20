---
title: Classic Animation 经典动画
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Classic Animation 经典动画

---

Animate a number (ex: position, opacity, scale) using a standard animation curve whenever the number is changed.

每当数字改变时，使用标准动画曲线对数值 (例如：位置，不透明度，比例) 进行动画处理。

See [Animation Basics](./../PatchEditor/Animations.md) for more information.

有关详细信息，请参考 [动画基础](./../PatchEditor/Animations.md)。

<div className="patch-container">
    <div className="patch processor">
        <h3>Classic Animation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>Duration<span>0.4s</span></li>
            <li>Curve<span>Linear</span></li>
        </ul>
        <ul className="outputs">
            <li>0</li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Number 数值

The number to animate to.

当接收到数值时，动画开始

#### Duration 持续时间

The length of the animation, in seconds

动画的持续时间，以秒为单位

#### Curve 曲线

The easing curve to animate with.

动画的缓动曲线

The options are:

选项包括：

1. Linear 线性，匀速
2. Quadratic In 二次方缓入
3. Quadratic Out 二次缓出
4. Quadratic In-Out 二次缓入缓出
5. Cubic In, Out, In & Out 三次缓入
6. Cubic Out 三次缓出
7. Cubic In-Out 三次缓入缓出
8. Exponential In 指数缓入
9. Exponential Out 指数缓出
10. Exponential In-Out 指数缓入缓出
11. Sinusoidal In 正弦缓入
12. Sinusoidal Out 正弦缓出
13. Sinusoidal In-Out 正弦缓入缓出

曲线动画参考：

![曲线 In ：慢 ➔ 快](./../../../static/img/docs/Animation/classic-animation-1.gif)

曲线 In ：慢 ➔ 快

![曲线 Out ：快 ➔ 慢](./../../../static/img/docs/Animation/classic-animation-2.gif)

曲线 Out ：快 ➔ 慢

![曲线 In & Out ：慢 ➔ 快 ➔ 慢](./../../../static/img/docs/Animation/classic-animation-3.gif)

曲线 In & Out ：慢 ➔ 快 ➔ 慢

</div>
<div className="outputs">

### Output 输出

#### Progress

A number that is tweened with an easing curve as it moves toward the Number input.

一个数字，当它向数值输入移动时，使用缓和曲线进行补间，

Typically a progress value. See [Animation Basics](./../PatchEditor/Animations.md)for more information.

通常是一个进度值，更多信息请参考 [动画基础](./../PatchEditor/Animations.md)。

</div>
</div>

---

### Related Patches 相关模块

[Pop Animation 流行动画](./Pop%20Animation.md)

[Repeating Animation 重复动画](./Repeating%20Animation.md)

[Transition 过渡](./../Utility/Transition.md)
