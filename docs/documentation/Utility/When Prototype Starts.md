---
title: When Prototype Starts 当原型启动时
sidebar_position: 5
last_update:
  author: 蒯美政
---

# When Prototype Starts 当原型启动时

---

Output a pulse when the prototype starts (on the first frame). Restart the prototype with ⌘R to trigger a pulse.

This patch also outputs a pulse when it is added from the Layer Library.

当原型启动时（在第一帧上）输出脉冲。按 ⌘R 重新启动原型触发脉冲。

当从图层库中添加此模块时，它也会输出一个脉冲。

<div className="patch-container">
    <div className="patch producer">
        <h3>When Prototype Starts</h3>
        <ul className="inputs">
        </ul>
        <ul className="outputs">
            <li><span className="patch-pulse-preview"><span className="dot"></span></span></li>
        </ul>
    </div>
</div>

### Output 输出

A pulse on the first frame of a prototype.

连接到原型第一帧上的脉冲。一般连接到开关等事件类模块。

---

### Related Patches 相关模块

[Pulse 脉冲](./Pulse.md)

[Pulse on Change 脉冲变化](./Pulse%20on%20Change.md)

[Wait 等待](./Wait.md)
