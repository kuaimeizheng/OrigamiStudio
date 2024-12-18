---
title: Pop Animation 流行动画
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Pop Animation 流行动画

---

Animate a numeric value (ex: position, opacity, scale) using a spring effect whenever the value is changed.

每当值更改时，使用弹性效果为值（例如：位置、不透明度、比例）设置动画。

Bounciness and Speed values can be passed to developers using the Pop framework for iOS, Rebound for Android, and Rebound JS for web.

弹性和速度的值可以交付给开发，因为使用的是 iOS 的 Pop 框架，Android 的 Rebound 弹性动画，和 web 的 Rebound JS。

Use [Classic Animation]for traditional animation curves. See [Animation Basics](./../PatchEditor/Animations.md)or more information.

使用 Classic Animation 模块的经典动画曲线。有关更多信息请参考 [动画基础](./../PatchEditor/Animations.md)。

<div className="patch-container">
    <div className="patch processor">
        <h3>Pop Animation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>Bounciness<span>5</span></li>
            <li>Speed<span>10</span></li>
        </ul>
        <ul className="outputs">
            <li>Progress<span>0</span></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Number 值

The number to animate to.

表示动画开始的数值。

#### Bounciness 弹性

A number that represents the bounciness of the animation.

一个数值，表示动画的弹性。

#### Speed 速度

A number that represents the speed of the animation.

一个数值，表示动画的速度。

</div>
<div className="outputs">

### Output 输出

#### Progress 进度

A number that is tweened (or interpolated) with a bouncy animation as it moves toward the Number input.
Typically a progress value. See Animation Basics for more information.

一个数值，表示当它向输入的数值移动时，会用弹性动画进行补间（或插值）。

通常这是一个进度值。有关更多信息请参考[Animation Basics](./../PatchEditor/Animations.md)。

</div>
</div>

---

### Related Patches 相关模块

[Classic Animation 经典动画](./Classic%20Animation.md)

[Repeating Animation 重复动画](./Repeating%20Animation.md)

[Bouncy Converter 弹性转换器](./Bouncy%20Converter.md)

[Spring Converter 弹性转换器](./Spring%20Converter.md)

[Transition 过渡](./../Utility/Transition.md)
