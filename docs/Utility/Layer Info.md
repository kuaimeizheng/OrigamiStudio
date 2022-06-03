---
sidebar_position: 2
---

# Layer Info 图层信息

Access information about a layer.

访问图层的信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2a6f4a27-ed09-4c90-a0ba-639ef28f55c8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181324Z&X-Amz-Expires=86400&X-Amz-Signature=9f0eb659d1d4e114ef8442daf84428b5ac3a4c084ce90d5d6dca7b94e7609715&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Layer 图层

The layer to display information for.

要显示信息的图层。

### Enabled 启用

A boolean that is true when the layer is enabled.

一个布尔值，当图层启用时为真。

### Size 尺寸

The size of the layer. Use [Size Unpack](https://www.notion.so/Point-Unpack-2b4874a049d34f898bc64c27879e191e) to get the individual width and height.

图层的大小。使用 Size Unpack 模块获取单独的宽和高。

### Scale 比例

The scale of the layer.

图层的比例。

### Anchor 锚点

The anchor point of the layer. The value of each coordinate is a number between 0 and 1, where .5 is the center. Use [Point Unpack](https://www.notion.so/Point-Unpack-2b4874a049d34f898bc64c27879e191e) to get the individual coordinates.

图层的锚点。每个坐标的值是 0~1 之间的数字，其中 0.5 是中心。

使用 Point Unpack 获得各个坐标。

### Parent 父级### 

The group the layer is in, or ‘none’ if the layer is not in a group. Connect this to another Layer Info to get information about the parent.

图层所在的组，如果图层不在组中，则为 “none”。

将此接口连接到另一个 Layer Info 模块以获取信息。

------

### Related Layers 相关图层

[Group 组](https://www.notion.so/Group-8fe10633d0c049a0b6866820a46c0ddc)

[Text Layer 文本图层](https://www.notion.so/Text-Layer-55f5163900ed47698f1ccc1752423a88)

[Rectangle 矩形](https://www.notion.so/Rectangle-d4f77c73db8f4c9393d1a4616cd27912)

[Image File 图像文件](https://www.notion.so/Image-File-a86eff7ee4704c31b00057723d0e659f)

[Video File 视频文件](https://www.notion.so/Video-File-460f7fd4e7db40328e354f6306ede79a)
