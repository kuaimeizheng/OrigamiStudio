---
title: Drag Settings 拖拽设置
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Drag Settings 拖拽设置

---

Customize a Drag patch’s behavior.

自定义拖拽模块的行为。

<div className="patch-container">
    <div className="patch processor">
        <h3>Drag Settings</h3>
        <ul className="inputs">
            <li>Clip<span className="checkbox-off"></span></li>
            <li>Min<small>X<span>0</span>Y<span>0</span></small></li>
            <li>Max<small>X<span>0</span>Y<span>0</span></small></li>
            <li>Momentum<span className="checkbox-off"></span></li>
            <li>Momentum Frition<span>8</span></li>    
        </ul>
        <ul className="outputs">
            <li>Settings<span></span></li>
        </ul>
    </div>
</div>

### Clip 修剪

A boolean that is true when clipping is enabled. Clipping prevents a layer from being dragged out of defined boundaries.

当修剪能启动时，布尔值为真。阻止图层被拖出定义的边界。

### Min 最小

A point that defines the top left of the drag boundaries.

定义拖动边界左上角的点。

### Max 最大

A point that defines the bottom right of the drag boundaries.

定义拖动边界右下角的点。

### Momentum 惯性

A boolean that is true when momentum is enabled. Momentum adds physics when flicking the layer.

勾选后启动惯性。

### Momentum Friction 惯性摩擦

A number between 0 and 950 that represents the amount of friction when flicking the layer.

0 ～ 950 之间的数字表示摩擦量。(例如：值越小摩擦越小惯性越大)

### Settings 设置

The settings to pass to a Drag patch.

连接到 Drag 模块的 Setting 接口。

---

### Related Patches 相关模块

[Drag 拖拽](./Drag.md)
