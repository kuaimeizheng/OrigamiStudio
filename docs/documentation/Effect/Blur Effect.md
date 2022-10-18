---
title: Blur Effect 模糊效果
sidebar_position: 1
last_update:
  author: 蒯美政0
---

# Blur Effect 模糊效果

Applies a Gaussian Blur to a layer. Use a Layer Effect Combiner patch to stack filters with multiple Layer Effect patches.

应用高斯模糊的图层。可以使用 Layer Effect Combiner 图层效果合成 模块与多个图层效果模块组合使用。

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

#### Radius 半径

The intensity at which the layer will be blurred. Values can range between 0.0 and 100.0

模糊图层的强度。取值范围在0.0和100.0之间

</div>
<div className="outputs">

### Output 输出

#### Layer Effect 图层效果

The final filter effect to pass to the Effects Override input on a layer or Layer Effect Combiner to stack filters with multiple Layer Effect patches.

传递到一个图层或图层效果组合器的最终的滤镜效果，以堆叠具有多个图层效果模块的滤镜上。

</div>
</div>

------

### Related Patches 相关模块

[Option Picker 选项选择器](./../Utility/Option%20Picker.md)

