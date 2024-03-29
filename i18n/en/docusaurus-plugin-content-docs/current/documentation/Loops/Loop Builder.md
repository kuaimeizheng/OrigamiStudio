---
title: Loop Builder 循环生成器
sidebar_position: 20
last_update:
  author: 蒯美政
---

# Loop Builder 循环生成器

---

Create a loop of any value (ex: text, color, image).

Right-click the patch to change the type, or add additional values.

To learn more about loops, see the [Introduction to Loops](./../Concepts/Loop.md).

给循环中的内容创建不同的值（例如：同一样式的通知列表里不同的头像、图标）。

右键更改类型或输入端口数量。了解更多信息，请参考 [循环简介](./../Concepts/Loop.md)

<div className="patch-container">
    <div className="patch loop">
        <h3>Loop Builder</h3>
        <ul className="inputs">
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Index<span>0</span></li>
            <li>Numbers<span>0</span></li>
        </ul>
    </div>
</div>

### Input 输入

A value at index 0. By default, the value is a number.

索引 0 的值。默认值为数值。

### Input 输入

A value at index 1. By default, the value is a number.

索引 1 的值。默认值为数值。

### Input 输入

A value at index 2. By default, the value is a number.

索引 2 的值。默认值为数值。

### Index 索引

A loop of the indices for the input values. ex: [0, 1, 2]

输入口值的循环索引。例如：[0，1，2]。

### Loop 输出

A loop of the input values. ex: [“apple”, “carrot”, “orange”]

一个循环的输入值。例如：[“苹果”，“胡萝卜”，“橙子”]

### 循环支持的类型

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

[Loop 循环](./Loop.md)

[Loop Filter 循环筛选](./Loop%20Filter.md)

[Loop Select 循环选择](./Loop%20Select.md)

[Loop Over Array 数组遍历](./Loop%20Over%20Array.md)

[Loop to Array 循环转换数组](./Loop%20to%20Array.md)

[Loop Sum 循环总和](./Loop%20Sum.md)

[Running Total 累积总计](./Running%20Total.md)

[Loop Count 循环数量](./Loop%20Count.md)
