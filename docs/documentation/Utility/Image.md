---
title: Image 图片
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Image 图片

An image represented as a patch. Double-click the thumbnail to select an image from Finder. Drag an image into the graph to create an Image patch. Connect to an [Image Layer](./../Layer/Image%20Layer.md) to display it in the viewer.

表示图像的模块。

### 给模块添加图片：

- 双击缩略图从 Finder 中选择图片。
- 将图片拖动到模块的缩略图区域中也可以给模块添加图片。

### 使图片在查看器中显示：

- 将 Image 模块的输出端口连接到 Image Layer 的 Image 属性。
- 将图片直接拖动到图层列表中以创建 Image Layer。

<div className="patch-container">
    <div className="patch processor">
        <h3>Image</h3>
        <ul className="inputs">
        </ul>
        <ul className="outputs">
            <li>&nbsp;<span></span></li>
        </ul>
    </div>
</div>

### Output 输出

The image.

输出一张图片。

---

### Related Patches 相关模块

[Image Info 图片信息](./Image%20Info.md)

---

### Related Layers 相关图层

[Image File 图像文件](./../Layer/Image%20File.md)
