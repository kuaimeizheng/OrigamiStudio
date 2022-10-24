---
title: Cubic Bezier Animation 三次贝塞尔动画
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Cubic Bezier Animation 三次贝塞尔动画

Allows you to define custom animation curves by specifying 2 control points. The cubic bezier curve is normalized and then scaled based on the number to animate to, meaning the start point of the curve is always (0,0) and the end is always (number,number).

允许您通过指定 2 个控制点来定义自定义动画曲线。三次贝塞尔曲线经过标准化，然后根据要设置动画的数字进行缩放，这意味着曲线的起点始终为 (0,0)，终点始终为 (number,number)。

<div className="patch-container">
    <div className="patch processor">
        <h3>Cubic Bezier Animation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>Duration<span>0.4s</span><small>X<span>0</span>Y<span>0</span></small></li>
            <li><span>0.17</span></li>
            <li><span>0.17</span></li>
            <li><span>0</span></li>
            <li><span>1</span></li>
        </ul>
        <ul className="outputs">
            <li>0</li>
            <li>path</li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Number  数字

The number to animate to.

设置动画的数字

#### Duration 持续时间

The duration of the animation.

动画的持续时间

#### Input 输入

The X position of the first control point.

第一个控制点的 X 位置。

#### Input 输入

The Y position of the first control point.

第一个控制点的 Y 位置。

#### Input 输入

The X position of the second control point.

第二个控制点的 X 位置。

#### Input 输入

The Y position of the second control point.

第二个控制点的 Y 位置。

</div>
<div className="outputs">

### Output 输出

#### Output 输出

The current value in the animation.

动画中的当前值。

#### Path 路径

The X, Y position of the input progress on the curve. This can be used to plot the bezier curve.

输入进度在曲线上的 X、Y 位置。这可用于绘制贝塞尔曲线。

</div>
</div>

---

### Related Patches 相关模块

[Classic Animation 经典动画](./Classic%20Animation.md)

[Cubic Bezier Curve 三次贝塞尔曲线](./Cubic%20Bezier%20Curve.md)

[Progress 进度](./../Utility/Progress.md)

[Transition 过渡](./../Utility/Transition.md)


