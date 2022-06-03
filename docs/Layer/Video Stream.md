---
sidebar_position: 2
---

# Video Stream 视频流

A layer that can play a video stream using HTTP Live Streaming.

可以使用 HTTP Live Streaming 播放视频流的图层。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/82be0ece-0c2a-4eb6-bd52-42107f4c6afb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185943Z&X-Amz-Expires=86400&X-Amz-Signature=d7a30328fa497402047ff7a53ae48a6c62e6874460b12d464a14219e2627c5f7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Enable 启用

A boolean that is true when the layer is displayed.

一个布尔值，表示显示图层时为真。

### Position 位置

The position to display the layer. Use [Point 3D](https://www.notion.so/Point-3D-6d2c3b3df3f74659ae0d647876ce3aa9) to set Z position.

图层的显示位置。使用 Point 3D 设置 Z 位置。

### Anchor 锚点

The anchor point to position the layer relative to. See [Coordinates](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2) for more information.

相对于图层定位的锚点。详细信息阅读[Coordinates 坐标](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2)。

### Size 大小

The size of the layer.

图层的大小。

### Opacity 不透明度

The opacity of the layer.

图层的不透明度。

### Scale 比例

The scale of the layer.

图层显示的比例。

### Rotation 旋转

The rotation of the layer. Use [Point 3D](https://www.notion.so/Point-3D-6d2c3b3df3f74659ae0d647876ce3aa9) to set X or Y rotations.

图层的旋转。使用 Point 3D 设置 X 或 Y 旋转角度。

### Pivot 中心点

The pivot to rotate and scale the layer about. See [Coordinates](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2) for more information.

图层缩放、旋转、移动时的中心点或初始点。详细信息阅读[Coordinates 坐标](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2)。

### URL 链接### 

A text string that represents the source URL of the .m3u8 video stream to play.

一个文本字符串，表示要播放的.m3u8视频流的链接。

### Play 播放### 

A boolean that is true when the video is playing.

一个布尔值，在视频播放时为真。

### Fill Style 填充样式

The image sizing behavior: fit, fill, stretch, or tile.

图像大小的调整样式：适合、填充、拉伸或平铺。

阴影：

### Shadow Color 阴影颜色

The color of the shadow.

阴影的颜色。

### Shadow Opacity 阴影不透明度

The opacity of the shadow. By default, the opacity is 0, which disables the shadow.

阴影的不透明度。 默认值为0，不显示阴影。

### Shadow Radius 阴影半径### 

The blur radius of the shadow.

阴影的模糊半径值。（值越大范围越大，颜色越淡）

### Shadow Offset 阴影偏移

The size of the shadow relative to the size of the layer.

阴影相对于图层的距离和角度。

### Video Rate 视频速率### 

A number that represents the speed multiplier to play the video. 0 pauses the video. 2 plays it at twice the speed.

一个数字，表示播放视频的速度速率。0暂停视频。2以两倍的速度播放。

### Loop 循环### 

A boolean that is true when the video will loop to the beginning at the end.

一个布尔值，当视频从开始循环到结尾时为真。

### Volume 音量

A number from 0-1 that represents the loudness of the video.

一个 0-1 的数字，表示视频的音量。

------

### Related Patches 相关模块

[Video Info 视频信息](https://www.notion.so/Video-Info-4d10e3612b784ced9bd23631b9e3a68b)

[Video File 视频文件](https://www.notion.so/Video-File-460f7fd4e7db40328e354f6306ede79a)
