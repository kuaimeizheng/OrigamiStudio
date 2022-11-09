---
title: Pulse 脉冲
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Pulse 脉冲

---

Output a pulse whenever a state changes from on to off.

See [States & Pulses](./../Concepts/States%20&%20Pulses.md) for more information.

每当状态从开始切换到关闭时，都会输出脉冲。

了解更多信息请参考 [States & Pulses](./../Concepts/States%20&%20Pulses.md)。

<div className="patch-container">
    <div className="patch processor">
        <h3>Pulse</h3>
        <ul className="inputs">
            <li>On/Off<span className="checkbox-off"></span></li>
        </ul>
        <ul className="outputs">
            <li>Turned On<span className="patch-pulse-preview"><span className="dot"></span></span></li>
            <li>Turned Off<span className="patch-pulse-preview"><span className="dot"></span></span></li>
        </ul>
    </div>
</div>

### On/Off 开/关

A boolean that represents an on/off state.

一个布尔值，表示开/关状态。

### Turned On 打开

A pulse that is output when the input turns on.

一个脉冲，表示输入端口打开时输出。

### Turned Off 关闭

A pulse that is output when the input turns off.

一个脉冲，表示输入端口关闭时输出。

---

### Related Patches 相关模块

[Repeating Animation 重复动画](./../Animation/Repeating%20Animation.md)

[Switch 开关](./Switch.md)

[When Prototype Starts 当原型启动时](./When%20Prototype%20Starts.md)

[Pulse on Change 脉冲变化](./Pulse%20on%20Change.md)

[Interaction 交互](./../Interaction/Interaction.md)
