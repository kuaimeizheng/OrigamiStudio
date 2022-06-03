---
sidebar_position: 2
---

# Object Detection 目标检测

Detect regions in a still image, video, or from a camera stream.

检测静止图像、视频或摄像机流中的区域。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/99c2462f-7aed-4aa3-a92e-454493a3e0ce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181344Z&X-Amz-Expires=86400&X-Amz-Signature=41007e3d4a73fdbc9e051f285b19d9fe282198e5e42e5d94dd4dc544a1945d61&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Enable 启用

A Boolean value that is true when detection is enabled.

布尔值，启用检测时为true。

### Layer 图层

An Image or Video layer to search for objects.

用于搜索对象的图像或视频层。

### Type 类型

Specify the type of detection needed. There are two possible types and both have different use cases:

指定需要的检测类型。有两种可能的类型，它们都有不同的用例:

1. Object Based. Highlights foreground objects and provides a coarse segmentation of the main subjects in an image. This type can return up to three sets of position and size for the corresponding regions.
2. 基于对象的。突出显示前景对象，并提供图像中主要主题的粗分割。该类型最多可以返回三组对应区域的位置和大小。
3. Attention Based. If you’re deciding what to keep in an image based on what’s most interesting, use Attention Based type. This type always return only one set of position and size for the region.
4. 基于注意力的。如果你根据最有趣的内容来决定在图像中保留什么，那么使用基于注意力的类型。该类型总是只返回区域的一组位置和大小。

### Region Detected 检测到的区域

A Boolean value that is true when at least one region has been detected.

布尔值，当至少检测到一个区域时为真。

### Position 位置

A Loop of origin positions for each of the detected regions.

每个被检测区域的原点位置的循环。

### Size 大小

A Loop of sizes for each detected regions.

每个检测区域的大小循环。

### Error 错误

A Boolean value that is true when the detection cannot be performed, one cause could be the OS, as this is only available on macOS 15+ and iOS 13+.

当检测不能执行时，布尔值为true，一个原因可能是操作系统，因为这只在macOS 15+和iOS 13+上可用。

### Error Description 错误描述

Text providing a more detailed explanation for why the detection cannot be performed.

为无法执行检测提供更详细解释的文本。

------

### Related Patches 相关模块

[QR Code Detection 二维码检测](./QR%20Code%20Detection.md)

[Face Detection 人脸检测](./Face%20Detection.md)
