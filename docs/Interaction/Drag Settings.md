---
sidebar_position: 2
---

# Drag Settings 拖拽设置

Customize a Drag patch’s behavior.

自定义拖拽模块的行为。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d399fca1-78b5-41da-a499-7aee3077ba14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170728Z&X-Amz-Expires=86400&X-Amz-Signature=533a3740ecd2ea2d3040fefdac66de7b9eabf7ed86de3c308a62781952d03c30&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Clip 修剪

A boolean that is true when clipping is enabled. Clipping prevents a layer from being dragged out of defined boundaries.

当修剪能启动时，布尔值为真。阻止图层被拖出定义的边界。

### Min 最小

A point that defines the top left of the drag boundaries.

定义拖动边界左上角的点。

### Max 最大

A point that defines the bottom right of the drag boundaries.

定义拖动边界右下角的点。

### Momentum 惯性

A boolean that is true when momentum is enabled. Momentum adds physics when flicking the layer.

勾选后启动惯性。

### Momentum Friction 惯性摩擦

A number between 0 and 950 that represents the amount of friction when flicking the layer.

0～950之间的数字表示摩擦量。(例如：值越小摩擦越小惯性越大)

### Settings 设置

The settings to pass to a Drag patch.

连接到Drag模块的Setting接口。

------

### Related Patches 相关模块

[Drag 拖拽](./Drag.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/123eede3-7f02-4dce-b456-e7a555c70350/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170736Z&X-Amz-Expires=86400&X-Amz-Signature=2e8cc3d17054109c3668b89876463561392efea64d44dabfccda977101f5e25d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
