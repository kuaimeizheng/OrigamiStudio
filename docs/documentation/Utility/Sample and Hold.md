---
title: Sample and Hold 采样保持
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Sample and Hold 采样保持

---

Store a value of any type. The patch will store the value until a new value is sampled or until the current value is reset.

存储任何类型的值。模块将存储采集的值，直到新值被采样或直到当前值被重置为止。

Right-click to change the type (ex: number, text, color).

右键更改接口数量和类型。

<div className="patch-container">
    <div className="patch processor">
        <h3>Sample and Hold</h3>
        <ul className="inputs">
            <li>Value<span>0</span></li>
            <li>Sample<span className="checkbox-off"></span></li>
            <li>Reset<span className="checkbox-off"></span></li>
        </ul>
        <ul className="outputs">
            <li><span>0</span></li>
        </ul>
    </div>
</div>

### Value 值

A value of any type. By default, the value is a number.

一个任意类型的值，通常是数字。

### Sample 采样

A boolean that is true when the patch is sampling a value. When false, the patch will not sample the value, even if it changes. The patch outputs the most recently sampled value.

一个布尔值，当模块对值采样时为 true。

当值为 false 时，模块不会对该值进行采样，即使更改。

模块输出最近采样的值。

通俗解释就是 Sample 开关打开，Value 的值就会输出到输出端口。

### Reset 重置

A pulse that clears the currently stored value.

一个脉冲，表示在输出端口清除当前存储的值，重置为 0 。

### Type 类型

![Image](@site/static/img/docs/Utility/sample-and-hold-item.png)

### Output 输出

The currently stored value.

输出当前存储的值

---

### Related Patches 相关模块

[Pulse 脉冲](./Pulse.md)

[Interaction 交互](./../Interaction/Interaction.md)
