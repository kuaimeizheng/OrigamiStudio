---
title: Sepia Effect
sidebar_position: 10
---

# Sepia Effect

According to Apple’s Core Image Filter Reference, this filter maps the colors of an image to various shades of brown.

<div className="patch-container">
    <div className="patch processor">
        <h3>Sepia Effect</h3>
        <ul className="inputs">
            <li>Intensity <span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Layer Effect </li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Intensity

The intensity of the brown tint that will be applied to a layer. Values can range between 0.0 and 1.0

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