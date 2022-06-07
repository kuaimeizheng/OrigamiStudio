---
sidebar_position: 2
---

# QR Code Detection 二维码检测

Detect QR codes in a still image, video or, from a camera stream.

检测静止图像、视频或摄像机流中的二维码。

All the outputs are loops of the same size; and the indices of each loop matches with every other output. For example, Top Left [2] and Bottom Right [2] both correspond to the same QR code at index 3.

所有输出都是相同大小的循环；并且每个循环的索引与其他所有输出匹配。例如，左上 [2] 和右下 [2] 都对应索引 3 处的相同二维码。

![Image](./../../static/img/docs/Utility/qr-code-detection.png)

### Enable 启用

A Boolean value that is true when detection is enabled.

一个布尔值，表示启用检测时为真。

### Layer 图层

An Image or Video layer to search for QR codes.

用于搜索 QR 码的图像或视频层。

### Quality 质量

Specify the accuracy of the detection. A High quality requires more processing time.

指定检测的准确性。 高质量需要更多的处理时间。

### QR Detected 二维码检测

A Boolean value that is true when at least one QR code has been detected.

一个布尔值，当至少检测到一个二维码时为真。

### Message 消息

A Loop of Texts with the messages decoded for each detected QR code.

一个文本循环，其中包含为每个检测到的二维码码解码的消息。

### Top Left 左上方

A Loop of positions for the top left corner.

左上角的位置循环。

### Top Right 右上方

A Loop of positions for the top right corner.

右上角的位置循环。

### Bottom Left 左下方

A Loop of positions for the bottom left corner.

左下角的位置循环。

### Bottom Right 右下方

A Loop of positions for the bottom right corner.

右下角的位置循环。

------

### Related Patches 相关模块

[Face Detection 人脸检测](./Face%20Detection.md)

[Object Detection 目标检测](./Object%20Detection.md)
