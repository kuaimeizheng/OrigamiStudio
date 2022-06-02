---
sidebar_position: 2
---

# Drag 拖拽

Drag a layer in any direction. Choose the layer to drag and then connect the Position output to the layer’s Position port.

沿任何方向拖动一层。选择要拖动的图层，然后将 位置 输出端口连接到图层的 位置 端口。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77b19bb2-0611-4e57-abb3-1be7ceb26d2d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170643Z&X-Amz-Expires=86400&X-Amz-Signature=6c967fb45255f3e23997e7ccc56dd2cc2d61e7309f2996215be42f093664e08a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable 启用**

A boolean that is true when dragging is enabled

一个布尔值，表示拖拽启用时布尔值为真。

**Layer 图层**

The name of the layer to drag. Click the value (“None”, by default) to select a layer. Controls which layer activates drag on touch.

拖拽图层名称。点击Layer的值选择图层。触摸哪个图层激活拖拽。

(例如：有A、B两个图层，Drag的输出口连接的A的位置属性，Drag的Layer选择为图层B，那触摸B可以拖动A，如果触摸B意外的范围就拖不动。不选就是触摸整个屏幕激活图层的拖拽。)

**Start 开始**

The position the layer starts at when the prototype starts.

当原型开始时，被拖拽的图层的位置。

**Reset 重置**

A pulse that resets the position to the start position.

重置到启动位置。 (例如：Start设置的位置。)

**Settings 设置**

The settings from a Drag Settings patch that further customize drag behavior.

从Drag Setting模块进一步自定义拖动行为的设置。

**Position 位置**

The current position of the draggable layer.

拖动层的当前位置。(例如：就是这个接口连接到要拖的图层位置属性)

------

### Related Patches 相关模块

[Drag Settings 拖拽设置](https://www.notion.so/Drag-Settings-d4fd1e22aaa74ce0a0c7426c00c15dad)

历史版本

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/840769cd-39b6-4d19-b794-9338e28d63e4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170624Z&X-Amz-Expires=86400&X-Amz-Signature=2a67aa49f988752661111500a2fe8bc9c2f0216318214f53beeb863e6653e208&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable 启用**

A boolean that is true when dragging is enabled

一个布尔值，表示拖拽启用时布尔值为真。

**Layer 图层**

The name of the layer to drag. Click the value (“None”, by default) to select a layer. Controls which layer activates drag on touch.

拖拽图层名称。点击Layer的值选择图层。触摸哪个图层激活拖拽。

(例如：有A、B两个图层，Drag的输出口连接的A的位置属性，Drag的Layer选择为图层B，那触摸B可以拖动A，如果触摸B意外的范围就拖不动。不选就是触摸整个屏幕激活图层的拖拽。)

**Start 开始**

The position the layer starts at when the prototype starts.

当原型开始时，被拖拽的图层的位置。

**Reset 重置**

A pulse that resets the position to the start position.

重置到启动位置。 (例如：Start设置的位置。)

**Settings 设置**

The settings from a Drag Settings patch that further customize drag behavior.

从Drag Setting模块进一步自定义拖动行为的设置。

**Position 位置**

The current position of the draggable layer.

拖动层的当前位置。(例如：就是这个接口连接到要拖的图层位置属性)
