---
sidebar_position: 5
---

# Video Stream 视频流

A layer that can play a video stream using HTTP Live Streaming.

可以使用 HTTP Live Streaming 播放视频流的图层。

<div class="patch-container">
 <div class="patch layer">
  <h3>View Stream</h3>  
   <ul class="inputs">
    <li>Enable</li>
    <li>Position</li>
    <li>Anchor</li>
    <li>Size</li>
    <li>Opacity</li>
    <li>Scale</li>
    <li>Rotation</li>
    <li>Pivot</li>
    <li>URL</li>
    <li>Play</li>
    <li>Fill Style</li>
    <li>Shadow Color</li>
    <li>Shadow Opacity</li>
    <li>Shadow Radius</li>
    <li>Shadow Offset</li>
    <li>Video Raye</li>
    <li>Loop</li>
    <li>Volume</li>>
   </ul>
 </div>
</div>

### Enable 启用

A boolean that is true when the layer is displayed.

一个布尔值，表示显示图层时为真。

### Position 位置

The position to display the layer. Use [Point 3D](./../Utility/Point%203D.md) to set Z position.

图层的显示位置。使用 Point 3D 设置 Z 位置。

### Anchor 锚点

The anchor point to position the layer relative to. See [Coordinates 坐标](./../Concepts/Coordinates.md) for more information.

相对于图层定位的锚点。详细信息阅读[Coordinates 坐标](./../Concepts/Coordinates.md)。

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

The rotation of the layer. Use [Point 3D](./../Utility/Point%203D.md) to set X or Y rotations.

图层的旋转。使用 Point 3D 设置 X 或 Y 旋转角度。

### Pivot 中心点

The pivot to rotate and scale the layer about. See [Coordinates 坐标](./../Concepts/Coordinates.md) for more information.

图层缩放、旋转、移动时的中心点或初始点。详细信息阅读[Coordinates 坐标](./../Concepts/Coordinates.md)。

### URL 链接

A text string that represents the source URL of the .m3u8 video stream to play.

一个文本字符串，表示要播放的.m3u8视频流的链接。

### Play 播放

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

### Shadow Radius 阴影半径

The blur radius of the shadow.

阴影的模糊半径值。（值越大范围越大，颜色越淡）

### Shadow Offset 阴影偏移

The size of the shadow relative to the size of the layer.

阴影相对于图层的距离和角度。

### Video Rate 视频速率

A number that represents the speed multiplier to play the video. 0 pauses the video. 2 plays it at twice the speed.

一个数字，表示播放视频的速度速率。0暂停视频。2以两倍的速度播放。

### Loop 循环

A boolean that is true when the video will loop to the beginning at the end.

一个布尔值，当视频从开始循环到结尾时为真。

### Volume 音量

A number from 0-1 that represents the loudness of the video.

一个 0-1 的数字，表示视频的音量。

------

### Related Patches 相关模块

[Video Info 视频信息](./../Utility/Video%20Info.md)

[Video File 视频文件](./Video%20File.md)
