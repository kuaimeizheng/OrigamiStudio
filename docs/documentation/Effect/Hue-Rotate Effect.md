---
title: Hue-Rotate Effect
sidebar_position: 10
---

# Hue-Rotate Effect

According to Apple’s Core Image Filter Reference, this changes the overall hue or tint of the source pixels.

<div className="patch-container">
    <div className="patch processor">
        <h3>Hue-Rotate Effect</h3>
        <ul className="inputs">
            <li>Angle <span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Layer Effect </li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Angle

The angle at which the colors of the source pixels will rotated. Values can range between 0.0 and 360.0.


</div>
<div className="outputs">

### Output 输出

#### Layer Effect

The final filter effect to pass to the Effects Override input on a layer or Layer Effect Combiner to stack filters with multiple Layer Effect patches.

</div>
</div>

------

### Related Patches 相关模块

[Option Picker 选项选择器](./Utility/Option%20Picker.md)