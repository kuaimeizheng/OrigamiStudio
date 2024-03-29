---
title: Equals Exactly 完全等于
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Equals Exactly 完全等于

---

Check if two or more values are exactly the same as each other.

检查两个或多个值是否完全相同。

This is a convenience equivalent of using the (Equals)[builtin.compare.equal Approx] patch with tolerance set to 0.

这相当于使用(Equals)[builtin.compare.equal Approx](python 近似比较)模块，然后公差设置为 0。

Right-click to add more values to compare, or change the type (ex: number, index, boolean).

右键可以添加更多接口去比较，或更改类型（如：数字、索引、布尔值）

<div className="patch-container">
    <div className="patch processor">
        <h3>Equals Exactly</h3>
        <ul className="inputs">
            <li>&nbsp;<span></span></li>
            <li>&nbsp;<span></span></li> 
        </ul>
        <ul className="outputs">
            <li>&nbsp;<span></span></li>
        </ul>
    </div>
</div>

### Input

The base value.

基础值。

### Input

The value to compare to the base.

和基础值比较的值

### Output

A boolean that is true if the values are exactly equal to each other.

一个布尔值，表示如果输入的值彼此完全相等，则为 真。

---

### Related Patches 相关模块

[And 和](./And.md)

[Or 或](./Or.md)

[Not 非](./Not.md)

[Greater Than 大于](./Greater%20Than.md)

[Greater Than or Equal 大于等于](./Greater%20Than%20or%20Equal.md)

[Less Than 小于](./Less%20Than.md)

[Less Than or Equal 小于等于](./Less%20Than%20or%20Equal.md)

[Equals 等于](./Equals.md)
