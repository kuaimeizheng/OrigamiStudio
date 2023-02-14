---
title: Material 3 Ease Curves Material 3 缓动曲线
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Material 3 缓动曲线

---

<div className="patch-container">
    <div className="patch processor">
        <h3>Material 3 Ease Curves</h3>
        <ul className="inputs">
            <li>Duration<span>Emphasized</span></li>
            <li>Easing<span>Linear</span></li>
        </ul>
        <ul className="outputs">
            <li>Progress<span>0</span></li>
            <li>Path<small>X<span>0</span>Y<span>0</span></small></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Duration 持续时间

An enum list to select the duration of the animation.

用于选择动画持续时间的枚举列表。

包含以下选项：

- Emphasized
- Emphasized Decelerate
- Emphasized Accelerate
- Standard
- Standard Accelerate
- Standard Decelerate
- Short 1
- Short 2
- Short 3
- Short 4
- Medium 1
- Medium 2
- Medium 3
- Medium 4
- Long 1
- Long 2
- Long 3
- Long 4
- Extra Long 1
- Extra Long 2
- Extra Long 3
- Extra Long 4

#### Easing 缓动

An enum list to select the ease type of animation.

一个枚举列表，用于选择动画的轻松类型。

包含以下选项：

- Linear
- Standard
- Standard Accelerate
- Standard Decelerate
- Emphasized
- Emphasized Decelerate
- Emphasized Accelerate
- Legacy
- Legacy Decelerate
- Legacy Accelerate

</div>
<div className="outputs">

### Output 输出

#### Progress 进度

一个数值，表示输出的进度。

#### Path 路径

曲线的路径值。

</div>
</div>

---
