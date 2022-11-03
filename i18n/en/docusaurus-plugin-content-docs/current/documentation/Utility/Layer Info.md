---
title: Layer Info 图层信息
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Layer Info 图层信息

Access information about a layer.

访问图层的信息。

![Image](@site/static/img/docs/Utility/layer-info.png)

### Layer 图层

The layer to display information for.

要显示信息的图层。

### Enabled 启用

A boolean that is true when the layer is enabled.

一个布尔值，当图层启用时为真。

### Size 尺寸

The size of the layer. Use [Size Unpack](./Point%20Unpack.md) to get the individual width and height.

图层的大小。使用 Size Unpack 模块获取单独的宽和高。

### Scale 比例

The scale of the layer.

图层的比例。

### Anchor 锚点

The anchor point of the layer. The value of each coordinate is a number between 0 and 1, where .5 is the center. Use [Point Unpack](./Point%20Unpack.md) to get the individual coordinates.

图层的锚点。每个坐标的值是 0~1 之间的数字，其中 0.5 是中心。

使用 Point Unpack 获得各个坐标。

### Parent 父级

The group the layer is in, or ‘none’ if the layer is not in a group. Connect this to another Layer Info to get information about the parent.

图层所在的组，如果图层不在组中，则为 “none”。

将此接口连接到另一个 Layer Info 模块以获取信息。

------

### Related Layers 相关图层

[Group 组](./../Layer/Group.md)

[Text Layer 文本图层](./../Layer/Text%20Layer.md)

[Rectangle 矩形](./../Layer/Rectangle.md)

[Image File 图像文件](./../Layer/Image%20File.md)

[Video File 视频文件](./../Layer/Video%20File.md)
