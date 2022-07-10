---
sidebar_position: 2
---

# Touches 触摸

Capture the touches from the simulated or connected phone, tablet or computer.

Read the JSON with the [Structure Formatter](./../Data/JSON%20to%20Text.md) patch connected to a Text Layer. Get an individual touch with an [Object at Index](./../Data/Value%20at%20Index.md) patch Read an individual touch’s position or force with [Structure Key](./../Data/Value%20for%20Key.md) and a [Splitter](./../Utility/Splitter.md) set to position or number to cast the value.

从模拟或连接的手机、平板、电脑捕捉触摸。 通过 [Structure Formatter](./../Data/JSON%20to%20Text.md) 模块连接一个文本层以读取JSON格式程序。通过 [Object at Index](./../Data/Value%20at%20Index.md) 模块获得一个单独的触摸，用 [Structure Key](https://www.notion.so/Touches-2a30a276b98e4c11b8b23bda1cde914c) 和 [Splitter](./../Utility/Splitter.md) 模块读取单个触摸的位置或力度，设置位置或数字以转换值。

![Image](./../../../static/img/docs/Device/touches.png)

### Touches 触摸

A JSON object containing information about the position and force of every touch on the viewer and/or device.

一个JSON对象，包含每个在查看器和/或设备上的触摸位置和力度信息。

------

### Related Patches 相关模块

[Splitter 分离器](./../Utility/Splitter.md)

[Interaction 交互](./../Interaction/Interaction.md)

[Mouse 鼠标](./../Interaction/Mouse.md)

[Trackpad 触控板](./Trackpad.md)

[Value for Key 关键值](./../Data/Value%20for%20Key.md)

[Value at Index 索引值](./../Data/Value%20at%20Index.md)

