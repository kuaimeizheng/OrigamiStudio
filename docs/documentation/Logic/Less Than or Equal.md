---
title: Less Than or Equal 小于等于
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Less Than or Equal 小于等于

---

Check if a value is less than or equal to another.

检查一个值是否小于或等于其它的值。

Each value is compared to the next one in order, and results are combined in one output. For example, `1 <= 1 <= 3` is true, while `3 <= 3 <= 1` is false.

每个值按顺序与下一个值进行比较，结果合并在一个输出中。

例：`1 <= 1 <= 3` 为真，而 `3 <= 3 <= 1` 为假。

Right-click to add more values to compare, or change the type (ex: number, index, boolean).

右键单击可添加更多值进行比较，或更改类型(例如:数字、索引、布尔值)。

<div className="patch-container">
    <div className="patch processor">
        <h3>Less Than or Equal</h3>
        <ul className="inputs">
            <li>&nbsp;<span></span></li>
            <li>&nbsp;<span></span></li> 
        </ul>
        <ul className="outputs">
            <li>&nbsp;<span></span></li>
        </ul>
    </div>
</div>

### Input 输入

The base value.

基础值

### Input 输入

The value to compare to the base.

和基础值做比较的值。

### Output 输出

A boolean that is true if the base value is less than or equal to the subsequent values.

如果基础值小于或等于后续值，则布尔值为真。

---

### Related Patches 相关模块

[And 和](./And.md)

[Or 或](./Or.md)

[Not 非](./Not.md)

[Equals Exactly 完全等于](./Equals%20Exactly.md)

[Greater Than 大于](./Greater%20Than.md)

[Greater Than or Equal 大于等于](./Greater%20Than%20or%20Equal.md)

[Less Than 小于](./Less%20Than.md)

[Equals 等于](./Equals.md)
