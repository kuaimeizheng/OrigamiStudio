---
title: Spring Converter 弹性转换器
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Spring Converter 弹性转换器

Allows for conversion from Apple’s Fluid Spring dynamics values (see SwiftUI) to either Tension / Friction (for use with [Spring Animation]) or Bounciness / Speed ([Pop Animation])

允许将 Apple 的流体弹簧动力学值（请参阅 SwiftUI）转换为张力/摩擦力（用于弹性动画）或弹力/速度（流行动画）

<div className="patch-container">
    <div className="patch processor">
        <h3>Spring Converter</h3>
        <ul className="inputs">
            <li>Response<span>0.55</span></li>
            <li>Damping Fraction<span>0</span></li>
            <li>Mass<span>1</span></li>
        </ul>
        <ul className="outputs">
            <li>Tension<span>0</span></li>
            <li>Friction<span>0</span></li>
            <li>Bouciness<span>0</span></li>
            <li>Speed<span>0</span></li>
        </ul>
    </div>
</div>


<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Response 回复

Approximately how long for the spring animation to reach its destination.

弹性动画需要多长时间才能达到目标。

#### Damping Fraction 阻尼分数

A value from 0 to 1 describing how much the spring should be damped around its end destination. 0 means don’t apply any damping and oscillate endlessly, 1 means don’t bounce at all around the destination.

一个从 0 到 1 的值，描述弹簧应在其最终目标附近阻尼多少。

0 表示不施加任何阻尼并无休止地振荡，1 表示在目标周围完全不反弹。

</div>
<div className="outputs">

### Output 输出

#### Tension 张力

A number that represents spring tension. (Spring Animation)

一个数字，代表弹簧的张力。 （弹性动画）

#### Friction 摩擦

A number that represents spring tension. (Spring Animation)

一个数字，代表弹簧的摩擦力。 （弹性动画）

#### Bounciness 弹性

A number that represents spring bouciness (Pop Animation)

一个数字，代表弹簧的弹力。（流行动画）

#### Speed 速度

A number that represents spring speed (Pop Animation)

一个数字，代表弹簧的速度。（流行动画）

</div>
</div>

---

### Related Patches 相关模块

[Pop Animation 流行动画](./Pop%20Animation.md)

[Bouncy Converter 弹性转换器](./Bouncy%20Converter.md)


