---
sidebar_position: 2
---

# Face Detection 人脸检测

Detect faces in a still image, video, or from a camera stream.

检测静止图像、视频或摄像机流中的人脸。

All the outputs are loops of the same size; and the indices of each loop matches with every other output. For example, Left Eye Position [3] and Face Size [3] both correspond to the same Face at index 4.

所有输出都是相同大小的循环；每个循环的索引都与其他输出相匹配。

例如，左眼位置[3]和脸大小[3]都对应于索引4处的同一个脸。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1acd1479-386d-434f-a88b-65aba07490a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181116Z&X-Amz-Expires=86400&X-Amz-Signature=3cd13cfb9bf96a6dd9bdf5ab24e4a80092668703862ec1b09088dc1c4cb3bbd4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable 启用**

A Boolean value that is true when detection is enabled.

一个布尔值，当启用检测时为真。

**Layer 图层**

An Image or Video layer to search for faces.

用于搜索人脸的图像或视频图层。

**Max Faces 最大人脸数**

Limit the number of faces.

限制最大人脸数量。

**Quality 质量**

Specify the accuracy of the detection. Higher quality detection requires more processing time.

设置检测的准确性。更高质量的检测需要更多的处理时间。

**Positioning 定位**

Determine if the output values are converted to the relative position on the layer or it’s using the absolute values of the content of the layer. ex. A video layer can be 300x300 but its content 1920x1080.

确定输出值是转换为图层上的相对位置，还是使用图层内内容的绝对值。例如，视频图层可以是 300x300，但其内容是 1920x1080。

**Face Detected 检测到人脸**

A Boolean value that is true when at least one face has been detected.

一个布尔值，当至少检测到一张人脸时为真。

**Face Position 人脸位置**

A Loop of origin positions for each detected face.

每个检测到的人脸的原点位置循环。

**Face Size 人脸大小**

A Loop of sizes for the region for each detected face.

每个检测到的人脸的区域大小循环。

**Face Angle 人脸角度**

A Loop with the rotation of each detected face.

每个检测到的人脸的区域大小循环。

**Left Eye Detected 检测到左眼**

A Loop of Boolean values that is true for each face where the detector found the left eye.

一个布尔值循环，表示检测器发现了每张人脸的左眼。

**Left Eye Position 左眼位置**

A Loop of positions for the left eye of each face if available, otherwise the position is 0,0 so you might need to check if Left Eye Detected is true.

每张脸的左眼位置循环（如果可用），否则位置为 0,0，因此您可能需要检查检测到的左眼是否为真。

**Right Eye Detected 检测到右眼**

A Loop of Boolean values that is true for each face where the detector found the right eye.

一个布尔值循环，表示检测器发现了每张人脸的右眼。

**Right Eye Position 右眼位置**

A Loop of positions for the right eye of each face if available, otherwise the position is 0,0 so you might need to check if Right Eye Detected is true.

每张脸的右眼位置循环（如果可用），否则位置为 0,0，因此您可能需要检查检测到的右眼是否为真。

**Mouth Detected 检测到嘴巴**

A Loop of Boolean values that is true for each face where the detector found the mouth.

一个布尔值循环，表示检测器找到了每张人脸上的嘴巴。

**Mouth Position 嘴巴位置**

A Loop of positions for mouth of each face if available, otherwise the position is 0,0 so you might need to check if Right Eye Detected is true.

每个脸的嘴的位置循环（如果可用），否则位置为 0,0，因此您可能需要检查检测到的右眼是否为真。

**Tracking ID 跟踪 ID**

A Loop of Integer values that tries to identify the same face from a previous frame. This ID persists as long as the face is in the frame. Only available when High quality is selected.

一个整数值循环，试图从前一帧中识别出同一张脸。只要面部在框架中，此 ID 就会一直存在。仅在选择高质量时可用。

------

### ***\*Related Patches 相关模块\****

[QR Code Detection 二维码检测](https://www.notion.so/QR-Code-Detection-9223c3bc77014abda406359bcb6c9c7b)

[Object Detection 目标检测](https://www.notion.so/Object-Detection-c842dfa3920b43eabaf0663fee46c5b8)
