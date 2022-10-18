---
title: Sepia Effect 棕褐色效果
sidebar_position: 1
last_update:
  author: 蒯美政0
---

# Sepia Effect 棕褐色效果

According to Apple’s Core Image Filter Reference, this filter maps the colors of an image to various shades of brown.

根据苹果的核心图像滤镜参考，这个滤镜将图像的颜色映射为不同深浅的棕色。

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

#### Intensity 强度

The intensity of the brown tint that will be applied to a layer. Values can range between 0.0 and 1.0

将被应用到一个图层的棕色色调的强度。取值范围在0.0和1.0之间

</div>
<div className="outputs">

### Output 输出

#### Layer Effect 图层效果

The final filter effect to pass to the Effects Override input on a layer or Layer Effect Combiner to stack filters with multiple Layer Effect patches.


</div>
</div>

------

### Related Patches 相关模块

[Option Picker 选项选择器](./../Utility/Option%20Picker.md)