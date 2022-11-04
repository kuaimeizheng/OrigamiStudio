---
title: Loop Shuffle 循环随机排序
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Loop Shuffle 循环随机排序

---

Randomly reorder values in a loop.

在循环中随机重新排序值。

Right-click to change the type of the loop.

右键单击以更改循环的类型。

<div className="patch-container">
    <div className="patch loop">
        <h3>Loop Shuffle</h3>
        <ul className="inputs">
            <li>Loop<span>0</span></li>
            <li>Shuffle<span className="patch-pulse-preview"><span className="dot"></span></span></li>
        </ul>
        <ul className="outputs">
            <li>Loop<span>0</span></li>
            <li>Index<span>0</span></li>
        </ul>
    </div>
</div>

### Loop 循环

A loop to randomly reorder values in.

一个需要随机重新排序值的循环。

### Shuffle 打乱顺序

A pulse that randomly reorders values in the loop.

一个脉冲，表示在循环中随机重新排序值。

### Loop 循环

The resulting loop with reordered values.

重新排序值后的结果循环。

### 支持类型

Anchor

Bezier

Boolean

Color

Edges

Image

Index

JSON

Layer

Number

Photo Library Asset

Point 3D

Position

Progress

Pulse

Size

Size Axis

Sound

Space Axis

Spacing

Text

Video

---

### Related Patches 相关模块

[Loop Dedupe 循环重复数据删除](./Loop%20Dedupe.md)

[Loop Reverse 循环反转](./Loop%20Reverse.md)
