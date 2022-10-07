---
sidebar_position: 5
---

# Video File 视频文件

Select a video to add as a Video Layer.

选择一个视频添加到 Video Layer。

![Image](./../../../static/img/docs/Layer/video-file.png)

属性：

### Enable 启用

A boolean that is true when the layer is displayed.

勾选启用图层。

### Position 位置

The position to display the layer. Use [Point 3D](./../Utility/Point%203D.md) to set Z position.

位置。点击属性名称 Position可以显示3个轴向并设置值。

### Anchor 锚点

The anchor point to position the layer relative to. See [Coordinates 坐标](./../Concepts/Coordinates.md) for more information.

组位于屏幕中的锚点，详细信息阅读[Coordinates 坐标](./../Concepts/Coordinates.md)。

### Size 尺寸

The size of the layer.

图层大小。

### Opacity 不透明度

The opacity of the layer.

图层的不透明度。

### Scale 比例

The scale of the layer.

图层显示的比例。

### Rotation 角度

The rotation of the layer. Use [Point 3D](./../Utility/Point%203D.md) to set X or Y rotations.

图层的角度。点击属性名称 ### Rotation可以显示3个角度并设置值。

### Pivot 轴心点

The pivot to rotate and scale the layer about. See [Coordinates 坐标](./../Concepts/Coordinates.md) for more information.

图层缩放、旋转、移动时的中心点或初始点。详细信息阅读[Coordinates 坐标](./../Concepts/Coordinates.md)。

### Video 视频

A video to play.

选择视频到图层。

### Play 播放

A boolean that is true when the video is playing.

勾选时播放视频。

### Fill Style 填充类型

The image sizing behavior: fit, fill, stretch, or tile.

图像大小行为：适合、填充、拉伸或平铺。

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

视频

### Video Rate 视频速率

A number that represents the speed multiplier to play the video. 0 pauses the video. 2 plays it at twice the speed.

表示视频播放速度倍数的数字。 0暂停视频。 2为两倍的速度播放。

### Loop 循环

A boolean that is true when the video will loop to the beginning at the end.

勾选选启用循环播放。

### Scrub

A boolean that is true when the video will jump to the time specified in Scrub Time.

当视频将跳到Scrub Time中指定的时间时为真的布尔值。

### Scrub Time

The time to jump the video to when Scrub is on.

视频跳转到设置的时间时打开Scrub。

### Volume 音量

A number from 0-1 that represents the loudness of the video.

从0-1开始的数字，表示视频的声音大小。

### Playback 回放

The playback style: asynchronous or synchronous. By default, playback is asynchronous.

播放方式：异步或同步。默认情况下，播放是异步的。 Asynchronous means the video plays independently from the framerate of the prototype — videos play smoothly even when prototype has a low framerate. Synchronous means the video plays at a rate coordinated with the framerate of the composition. This supports coordinating multiple videos that need to be matched precisely.

**异步**:指视频独立于原型的帧速率播放，视频播放更平滑，即使的播放帧率较低。

**同步**:指视频以合成的帧率协调播放速率。有助于协调需要精确匹配的多个视频。

### Current Time 当前时间

The elapsed time of the video, in seconds.

视频的已用时间，以秒为单位。

### Duration 时长

The length of the video, in seconds.

视频的长度，以秒为单位。

### Natural Size 原始大小

The original size of the video.

视频的原始大小。

------

### Related Patches 相关模块

[Video Info 视频信息](./../Utility/Video%20Info.md)

[Video Layer 视频图层](./Video%20Layer.md)
