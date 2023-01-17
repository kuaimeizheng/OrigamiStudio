---
title: Bouncy Converter 弹性转换器
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Bouncy Converter 弹性转换器

Convert Pop Animation values to spring tension and friction.

把 Pop Animation 的值转换为弹簧张力和摩擦力。

[//]: # "![Image]&#40;@site/static/img/docs/Animation/bouncy-converter.png&#41;"

<div className="patch-container">
    <div className="patch processor">
        <h3>Bouncy Converter</h3>
        <ul className="inputs">
            <li>Bounciness</li>
            <li>Speed</li>
        </ul>
        <ul className="outputs">
            <li>Friction</li>
            <li>Tension</li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Bounciness 弹性

A number that represents bounciness from Pop Animation.

一个数值，表示 Pop Animation 的动画弹性，值越大越有弹性。

#### Speed 速度

A number that represents speed of Pop Animation.

一个数值，表示 Pop Animation 的动画速度，值越大速度越快。

</div>
<div className="outputs">

### Output 输出

#### Friction 张力

A number that represents friction.

一个数值，表示张力。

#### Tension 摩擦力

A number that represents spring tension.

一个数值，表示摩擦力。

</div>
</div>

------

### Related Patches 相关模块

[Pop Animation 流行动画](./Pop%20Animation.md)

[Spring Converter 弹性转换器](./Spring%20Converter.md)
