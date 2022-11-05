---
title: Running Total 累积总计
sidebar_position: 100
last_update:
  author: 蒯美政
---

# Running Total 累积总计

---

Calculate the sums of a loop of numbers, where the sum at each index is the sum of the numbers preceding the current number.

计算数字循环的总和，其中每个索引处的总和是当前数字之前的数字的总和。

import styles from './styles.module.scss';

<div className={styles.main}>

| Input |
| ----- |
| 1     |
| 3     |
| 5     |

| Output |
| ------ |
| 0      |
| 1      |
| 4      |

</div>

To calculate the total sum of all numbers, use the [Sum](./Loop%20Sum.md) patch.

要计算所有数字的总和，请使用 Sum 模块。

<div className="patch-container">
    <div className="patch loop">
        <h3>Running Total</h3>
        <ul className="inputs">
            <li>Input<span>0</span></li>
        </ul>
        <ul className="outputs">
            <li><span>0</span></li>
        </ul>
    </div>
</div>

### Input 输入

A loop of numbers, indices, or booleans.

数字、索引或布尔值的循环。

### Output 输出

A loop of sums.

一个循环的总和。

### 支持类型

Anchor

Color

Index

Number

Point 3D

Position

Progress

Size

Size Axis

Space Axis

Spacing

---

### Related Patches 相关模块

[Loop 循环](./Loop.md)

[Loop Builder 循环生成器](./Loop%20Builder.md)

[Loop Count 循环数量](./Loop%20Count.md)

[Loop Sum 循环总和](./Loop%20Sum.md)
