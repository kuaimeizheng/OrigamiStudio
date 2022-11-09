---
title: Double Tap 双击
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Double Tap 双击
---

Capture double taps or single taps within a specified time frame. To be used with the Tap port in the [Interaction](./Interaction.md) patch.

Use the Touch button on a layer to quickly add interactions.

捕捉指定时间内的双击或单击。与 Interaction 模块的 Tap 输出接口连接在一起使用。

使用图层上的 Touch 按钮快速添加交互。

<div className="patch-container">
    <div className="patch processor">
        <h3>Double Tap</h3>
        <ul className="inputs">
            <li>Tap<span className="patch-pulse-preview"><span className="dot"></span></span></li>
            <li>Delay<span>0.3s</span></li>
        </ul>
        <ul className="outputs">
            <li>Double Tap <span className="patch-pulse-preview"><span className="dot"></span></span></li>
            <li>Single Tap <span className="patch-pulse-preview"><span className="dot"></span></span></li>
        </ul>
    </div>
</div>

### Tap 轻点

A pulse that comes from the Interaction patch’s Tap output.

一个脉冲，表示交互模块的 Tap 输出端口连接到这里。

### Delay 延迟

The maximum time duration between two taps to activate a double tap. By default, the delay is 0.3s.

在最大持续时间内点击两次能激活双击。默认情况下，延迟为 0.3 秒。

### Double Tap 双击

Pulses when two taps occur in the specified delay

当双击发生后，在指定的延迟后产生脉冲。

### Single Tap 单击

Pulses when one tap occurs in the specified delay

当点击发生后，在指定的延迟后产生脉冲。

---

### Related Patches 相关模块

[Interaction 交互](./Interaction.md)

[Mouse 鼠标](./Mouse.md)

[Long Press 长按](./Long%20Press.md)

[Touches 触摸](./../Device/Touches.md)

[Trackpad 触控板](./../Device/Trackpad.md)
