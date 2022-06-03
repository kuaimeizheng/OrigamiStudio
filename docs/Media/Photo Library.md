---
sidebar_position: 2
---

# Photo Library 照片库

Retrieve images and videos from Camera Roll on iOS or Photo Library on macOS

从 iOS 上的相机胶卷或 macOS 上的照片库中检索图像和视频

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/97898c4a-9cf0-4fdb-bbec-ee726481502e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T175704Z&X-Amz-Expires=86400&X-Amz-Signature=5ac5c2a3d000aa94810664bc6ced505d74fb0f72f1519282f28e25fc9b9971fd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Sort By 排序方式

The criteria by which the Photo media output is going to be sorted. The options are:

照片媒体输出的排序标准。选项包括：

1. None. 无
2. Creation Date. 创建日期
3. Size. 大小
4. Duration. (only available for media type video) 持续时间。（仅适用于媒体类型视频）

### Order 顺序### 

Works together with Sort By to determine if the list should be in Ascending or Descending order.

与 Sort By 一起使用以确定列表应该按升序还是降序排列。

### Media Type 媒体类型

Filters the results by media type. The possible media types are:

按媒体类型过滤结果。可能的媒体类型有：

1. All. 全部
2. Photos. 照片
3. Videos. 视频

### Album 相册### 

A string that filters the output to elements that are only present in that Album. If an empty string is provided it will bring “All Photos” from the Library. For querying the Albums see: [Photo Albums](https://www.notion.so/Photo-Albums-a46ad8c7f21b4c4f89d6845b0fa2889b)

一个字符串，用于过滤只出现在该专辑中的元素的输出。如果提供一个空字符串，它将带来“所有照片”从图书馆。查询相册的方法请参见“相册”

### Index 索引### 

A loop of photo media indices.

照片媒体索引循环。

### Photo Media 照片媒体### 

A loop of photo media assets (Each photo media asset can be an image or a video.)

照片媒体资产循环（每个照片媒体资产可以是图像或视频。）

### Error 错误### 

A boolean if there is an error retrieving photo media assets. Usually due to permission issues.

如果检索照片媒体资产时出错，则为布尔值。通常是由于权限问题。
