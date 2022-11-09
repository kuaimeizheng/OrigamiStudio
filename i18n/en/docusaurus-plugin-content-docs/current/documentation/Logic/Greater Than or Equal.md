---
title: Greater Than or Equal 大于等于
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Greater Than or Equal 大于等于

---

Check if a value is greater than or equal to another.

检查值是否大于或等于另一个值。

Each value is compared to the next one in order, and results are combined in one output. For example, 3 >= 2 >= 2 is true, while 4 >= 4 >= 10 is false.

每个值按顺序与下一个值进行比较，结果合并在一个输出口中。

例如，3 > 或 = 2 > 或 = 2 为真，而 4 > 或 = 4 > 或 = 10 为假。

You can right-click to add more values to compare (will only output 1 if every value is greater or equal to the subsequent one) or change the type.

右键添加更多值进行比较（如果每个值大于或等于后续值，则只输出 1 个），也可以更改类型。

<div className="patch-container">
    <div className="patch processor">
        <h3>Greater Than or Equal</h3>
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

基础值。

### Input 输入

The value to compare to the base.

和基础值做比较的值。

### Output 输出

A boolean that is true if the base value is greater than or equal to the subsequent values.

一个布尔值，表示如果基础值大于或等于后续值，则布尔值为真。

---

### Related Patches 相关模块

[And 和](./And.md)

[Or 或](./Or.md)

[Not 非](./Not.md)

[Equals Exactly 完全等于](./Equals%20Exactly.md)

[Greater Than 大于](./Greater%20Than.md)

[Less Than 小于](./Less%20Than.md)

[Less Than or Equal 小于等于](./Less%20Than%20or%20Equal.md)

[Equals 等于](./Equals.md)
