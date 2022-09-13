---
title: Blur Effect
sidebar_position: 10
---

# Blur Effect

Applies a Gaussian Blur to a layer. Use a Layer Effect Combiner patch to stack filters with multiple Layer Effect patches.

<div className="patch-container">
    <div className="patch processor">
        <h3>Blur Effect</h3>
        <ul className="inputs">
            <li>Radius <span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Layer Effect </li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Radius

The intensity at which the layer will be blurred. Values can range between 0.0 and 100.0

</div>
<div className="outputs">

### Output 输出

#### Layer Effect

The final filter effect to pass to the Effects Override input on a layer or Layer Effect Combiner to stack filters with multiple Layer Effect patches.


</div>
</div>

------

### Related Patches 相关模块

[Option Picker 选项选择器](./../Utility/Option%20Picker.md)

