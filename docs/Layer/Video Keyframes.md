---
sidebar_position: 2
---

# Video Keyframes 视频关键帧

A layer that can play output of the Keyframes Exporter as a video. [Keyframes](https://facebookincubator.github.io/Keyframes/) is a library for converting Adobe After Effects shape based animations to a data format that allows rendering on iOS and Android devices.

一个图层，可以将 Keyframes Exporter的输出作为视频播放的。 Keyframes 是一个库，用于将Adobe After Effects基于形状的动画转换为数据格式，以便在iOS和Android设备上进行渲染。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5eac7bb8-e581-48a9-b546-2e6357e4d3c9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185851Z&X-Amz-Expires=86400&X-Amz-Signature=16c61231d7a91e09330621b852f7e49515489a90dae31ff8519df9b11c634464&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

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

图层的旋转。使用 Point 3D 设置 X 或 Y 旋转角度。

### Pivot 中心点

图层缩放、旋转、移动时的中心点或初始点。详细信息阅读[Coordinates 坐标](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2)。

### Vector Data 矢量数据### 

A JSON object containing the output from Keyframes Exporter for Adobe After Effects.

一个JSON对象，包含来自Adobe After Effects的 Keyframes Exporter 的输出。

### Play 播放### 

A boolean that is true when the video is playing.

一个布尔值，在视频播放时为真。

### Fill Style 填充样式

The image sizing behavior: fit, fill, stretch, or tile.

图像大小的调整样式：适合、填充、拉伸或平铺。

### Video Rate 视频速率### 

A number that represents the speed multiplier to play the video. 0 pauses the video. 2 plays it at twice the speed.

一个数字，表示表示播放视频的速度速率。0暂停视频。2以两倍的速度播放。

### Loop 循环### 

A boolean that is true when the video will loop to the beginning at the end.

一个布尔值，当视频从开始循环到结尾时为真。

### Scrub### 

A boolean that is true when the video will jump to the time specified in Scrub Time.

一个布尔值，当视频将跳转到 Scrub Time 中指定的时间时为真。

### Scrub Time### 

The time to jump the video to when Scrub is on.

将视频跳转到 Scrub 开启时的时间。

### Current Time 当前时间### 

The elapsed time of the video, in seconds.

视频经过的时间，以秒为单位。

### Duration 持续时间### 

The length of the video, in seconds.

视频的长度，单位是秒。

### Natural Size 原始大小

The original size of the Keyframes output.

关键帧输出的原始大小。

------

### Related Patches 相关模块

[Video Info 视频信息](https://www.notion.so/Video-Info-4d10e3612b784ced9bd23631b9e3a68b)

[Video File 视频文件](https://www.notion.so/Video-File-460f7fd4e7db40328e354f6306ede79a)
