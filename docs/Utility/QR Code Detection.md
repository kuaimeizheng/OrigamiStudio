---
sidebar_position: 2
---

# QR Code Detection 二维码检测

Detect QR codes in a still image, video or, from a camera stream.

检测静止图像、视频或摄像机流中的二维码。

All the outputs are loops of the same size; and the indices of each loop matches with every other output. For example, Top Left [2] and Bottom Right [2] both correspond to the same QR code at index 3.

所有输出都是相同大小的循环；并且每个循环的索引与其他所有输出匹配。例如，左上 [2] 和右下 [2] 都对应索引 3 处的相同二维码。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b184408a-bf12-42a2-9de1-3463996e1094/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181847Z&X-Amz-Expires=86400&X-Amz-Signature=800f47e522422daf8bf5551b55f47faeefe7281284fd7c48d0d7c5ba9e60dcb2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable 启用**

A Boolean value that is true when detection is enabled.

一个布尔值，表示启用检测时为真。

**Layer 图层**

An Image or Video layer to search for QR codes.

用于搜索 QR 码的图像或视频层。

**Quality 质量**

Specify the accuracy of the detection. A High quality requires more processing time.

指定检测的准确性。 高质量需要更多的处理时间。

**QR Detected 二维码检测**

A Boolean value that is true when at least one QR code has been detected.

一个布尔值，当至少检测到一个二维码时为真。

**Message 消息**

A Loop of Texts with the messages decoded for each detected QR code.

一个文本循环，其中包含为每个检测到的二维码码解码的消息。

**Top Left 左上方**

A Loop of positions for the top left corner.

左上角的位置循环。

**Top Right 右上方**

A Loop of positions for the top right corner.

右上角的位置循环。

**Bottom Left 左下方**

A Loop of positions for the bottom left corner.

左下角的位置循环。

**Bottom Right 右下方**

A Loop of positions for the bottom right corner.

右下角的位置循环。

------

### ***\*Related Patches 相关模块\****

[Face Detection 人脸检测](https://www.notion.so/Face-Detection-1bfb78c83579410897d67b6fb94f8875)

[Object Detection 目标检测](https://www.notion.so/Object-Detection-c842dfa3920b43eabaf0663fee46c5b8)
