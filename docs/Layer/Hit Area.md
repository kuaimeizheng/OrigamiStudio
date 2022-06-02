---
sidebar_position: 2
---

# Hit Area 点击热区

Add interaction to a specific rectangle on the screen. Toggle the ‘Setup Mode’ of the hit area to see where it’s positioned.

将交互添加到特定的矩形上。属性“Setup Mode”选中时，查看器显示一个红色矩形，用来查看热区的位置。

例：假设插入了一张界面图，图里有个按钮，在按钮上盖一个热区就能实现点击热区激活交互；移入或点击时没有按钮没有变化的时候适合用热区。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e88b3b0-2576-4033-a474-3d6a2924a788/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185210Z&X-Amz-Expires=86400&X-Amz-Signature=c165c2b87b574a0bf7eb6af3d89a0740fd7afdbe87b1a67f489722d89e75de77&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable 启用**

A boolean that is true when the layer is displayed.

勾选启用图层。

**Position 位置**

The position to display the layer. Use [Point 3D](https://www.notion.so/Point-3D-6d2c3b3df3f74659ae0d647876ce3aa9) to set Z position.

显示图层的位置。使用 Point 3D 设置 Z 位置。

**Anchor 锚点**

The anchor point to position the layer relative to. See [Coordinates](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2) for more information.

相对于图层定位的锚点。详细信息阅读[Coordinates 坐标](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2)。

**Size 尺寸**

The size of the layer.

图层的大小

**Setup Mode 设置模式**

A boolean that is true when the hit area is in setup mode.

勾选时显示热区范围及位置。

------

### ***\*Related Patches 相关模块\****
