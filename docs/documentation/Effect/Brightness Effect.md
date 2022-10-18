---
title: Brightness Effect 亮度效果
sidebar_position: 1
last_update:
  author: 蒯美政
---

# Brightness Effect 亮度效果

Changes the brightness of a layer.

改变图层的亮度。

<div className="patch-container">
    <div className="patch processor">
        <h3>Brightness Effect</h3>
        <ul className="inputs">
            <li>Brightness <span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Layer Effect </li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Brightness 亮度

The amount of brightness that will be applied to a layer. Values can range between -1.0 and 1.0.

将应用到一个图层上的亮度。取值范围在-1.0和1.0之间。

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