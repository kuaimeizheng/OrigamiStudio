---
sidebar_position: 2
---

# Hit Area 点击热区

Add interaction to a specific rectangle on the screen. Toggle the ‘Setup Mode’ of the hit area to see where it’s positioned.

将交互添加到特定的矩形上。属性“Setup Mode”选中时，查看器显示一个红色矩形，用来查看热区的位置。

例：假设插入了一张界面图，图里有个按钮，在按钮上盖一个热区就能实现点击热区激活交互；移入或点击时没有按钮没有变化的时候适合用热区。

![Image](./../../static/img/docs/Layer/hit-area.png)

### Enable 启用

A boolean that is true when the layer is displayed.

勾选启用图层。

### Position 位置

The position to display the layer. Use [Point 3D](./../Utility/Point%203D.md) to set Z position.

显示图层的位置。使用 Point 3D 设置 Z 位置。

### Anchor 锚点

The anchor point to position the layer relative to. See [Coordinates 坐标](./../Concepts/Coordinates.md) for more information.

相对于图层定位的锚点。详细信息阅读[Coordinates 坐标](./../Concepts/Coordinates.md)。

### Size 尺寸

The size of the layer.

图层的大小

### Setup Mode 设置模式

A boolean that is true when the hit area is in setup mode.

勾选时显示热区范围及位置。

------

### Related Patches 相关模块
