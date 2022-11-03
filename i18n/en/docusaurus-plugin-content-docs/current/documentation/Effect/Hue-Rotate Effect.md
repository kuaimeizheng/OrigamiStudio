---
title: Hue-Rotate Effect 色相效果
sidebar_position: 1
last_update:
  author: 蒯美政
---

# Hue-Rotate Effect 色相效果

According to Apple’s Core Image Filter Reference, this changes the overall hue or tint of the source pixels.

根据苹果的核心图像滤镜参考，改变了源像素的整体色相或色调。

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

#### Angle 角度

The angle at which the colors of the source pixels will rotated. Values can range between 0.0 and 360.0.

源像素的颜色旋转的角度。取值范围在0.0和360.0之间。

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