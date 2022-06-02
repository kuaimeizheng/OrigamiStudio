---
sidebar_position: 2
---

# Photo Albums 相册

Retrieve album information from Camera Roll on iOS or Photo Library on macOS

从iOS上的Camera Roll或macOS上的Photo Library中检索相册信息

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/defb2f7d-9e26-42e0-aecf-99fcf3df1797/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T175633Z&X-Amz-Expires=86400&X-Amz-Signature=3fe313f769936b276ab0b9036c50df161143a32e0e09ade9db975629d84b5925&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Sort By 排序方式**

The criteria by which the Albums output is going to be sorted. The options are:

对Albums输出进行排序的标准。有以下选项是=:

1. Name. 名称
2. Count.  数量
3. Start Date. (This is based on the starting date of its contents, it is not the creation date of the Album) 开始日期。(这是基于其内容的开始日期，而不是相册的创建日期)
4. End Date. 结束日期

**Order 顺序**

Works together with Sort By to determine if the list should be in Ascending or Descending order.

与 Sort By 一起使用以确定列表应该按升序还是降序排列。

**Index 索引**

A loop of photo media indices.

照片媒体索引的循环。

**Title 标题**

A loop of Texts with the titles of each album.

每个专辑标题的文本循环。

**Cover Image 封面图片**

A loop of Images with the first photo of each album.

带有每个专辑的第一张照片的图像循环。

**Count 数量**

A loop of Numbers with the estimated count of assets of each Album.

带有每个专辑资产估计数的数字循环。

**Error 错误**

A boolean if there is an error retrieving photo albums. Usually due to permission issues.

如果检索相册出错，则为布尔值。通常是由于权限问题。
