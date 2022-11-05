---
title: Loop Select 循环选择
sidebar_position: 75
last_update:
  author: 蒯美政
---

# Loop Select 循环选择

---

import styles from './styles.module.scss';

<div className={styles.main}>

Select one or more values from a loop.

从循环中选择一个或多个值。

Example A: Select one value.

示例 A：选择一个值。

| Input  |
| ------ |
| apple  |
| carrot |
| orange |

| Index Loop |
| ---------- |
| 2          |

| Output Loop |
| ----------- |
| orange      |

| Output Index |
| ------------ |
| 2            |

Example B: Select and reorder multiple values.

示例 B：选择并重新排序多个值。

| Input  |
| ------ |
| apple  |
| carrot |
| orange |

| Index Loop |
| ---------- |
| 2          |
| 1          |
| 0          |

| Output Loop |
| ----------- |
| orange      |
| carrot      |
| apple       |

| Output Index |
| ------------ |
| 0            |
| 1            |
| 2            |

</div>

Right-click the patch to change the expected type of the Input loop.

右键单击模块以更改 输入循环 的类型。

<div className="patch-container">
    <div className="patch loop">
        <h3>Loop Select</h3>
        <ul className="inputs">
            <li>Input<span>0</span></li>
            <li>Index Loop<span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Loop<span>0</span></li>
            <li>Index<span>0</span></li>
        </ul>
    </div>
</div>

### Input 输入

A loop of values.

包含值的循环。

### Index Loop 循环索引

An index of the value to select. By default, the index is 0. Select multiple values using a loop of indices.

要选择值的索引。默认情况下，索引为 0。

使用索引循环选择多个值。

### Loop 循环

A value (or loop of values) from the loop at the selected index (or indices).

从循环所选索引处(或多个索引处)获得的一个值(或值的循环)。

### Index 索引

The new index or set of indices to related to the output loop.

与输出循环相关的新索引或一组索引。

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

[Loop 循环](./Loop.md)

[Loop Builder 循环生成器](./Loop%20Builder.md)

[Loop Filter 循环筛选](./Loop%20Filter.md)
