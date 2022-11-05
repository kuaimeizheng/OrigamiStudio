---
title: Loop Filter 循环筛选
sidebar_position: 35
last_update:
  author: 蒯美政
---

# Loop Filter 循环筛选

---

This is a very powerful patch that can do a lot of things! It can filter items out of a loop, but it can also repeat items in a loop. It can even be used to create a new loop with a single value repeated X times.

这是一个非常强大的模块，有很多功能！它可以从循环中过滤项目，但也可以在循环中重复项目。它甚至可以用来创建一个重复 X 次值的新循环。

The idea is that you pass in two loops. The values loop is what you want to modify — you either want to remove items or repeat items in this loop. The second loop you pass in tells us how many times each value should appear (or if it should be removed by repeating 0 times).

你需要使用两个循环。 values 值 循环是您要修改的内容——在此循环中删除项目或者重复项目。传入的第二个循环设置每个值应该出现多少次（或者是否通过重复 0 次来删除它）。

Example A: Filter to a subset of a loop.

示例 A：筛选到循环的子集。

import styles from './styles.module.scss';

<div className={styles.main}>

| Input  |
| ------ |
| apple  |
| carrot |
| orange |

| Include |
| ------- |
| 0       |
| 3       |
| 1       |

| Output |
| ------ |
| carrot |
| carrot |
| carrot |
| orange |

Example B: Make a new loop by repeating a single value X times.

示例 B：通过将单个值重复 X 次来创建一个新循环。

| Input |
| ----- |
| apple |

| Include |
| ------- |
| 5       |

| Output |
| ------ |
| apple  |
| apple  |
| apple  |
| apple  |
| apple  |

Example C: Repeat and filter values by using a loop of numbers.

示例 C：使用数字循环重复和过滤值。

| Input  |
| ------ |
| apple  |
| carrot |
| orange |

| Include |
| ------- |
| 0       |
| 3       |
| 1       |

| Output |
| ------ |
| carrot |
| carrot |
| carrot |
| orange |

</div>

Right-click the patch to change the expected type of the Input loop.

右键单击模块以更改输入循环的预期类型。

Use Loop Builder to make a boolean or number loop.

使用 Loop Builder 创建一个布尔值或数字循环。

<div className="patch-container">
    <div className="patch loop">
        <h3>Loop Filter</h3>
        <ul className="inputs">
            <li>Input<span>0</span></li>
            <li>Include<span>1</span></li>
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

### Include 包含###

A loop of booleans (to include or not include), or a loop of numbers (to decide how many times a value is repeated).

一个布尔循环（包括或不包括），或一个数字循环（决定一个值重复多少次）。

### Loop 循环

The result loop, with values either filtered or repeated

结果循环，值已被过滤或重复。

### Index 索引

A loop of indices for the result loop

结果循环的索引循环

### 支持的类型

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

[Loop Select 循环选择](./Loop%20Select.md)
