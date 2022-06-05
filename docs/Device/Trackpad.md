---
sidebar_position: 2
---

# Trackpad 触控板

Capture touches on the computer trackpad.

Read the JSON with the [Structure Formatter](./../Data/JSON%20to%20Text.md) patch connected to a Text Layer. Get an individual touch with an [Object at Index](./../Data/Value%20at%20Index.md) patch Read an individual touch’s position or force with [Structure Key](./../Data/Value%20for%20Key.md) and a [Splitter](./../Utility/Splitter.md) set to position or number to cast the value.

在触控板上捕捉触摸。 通过 [Structure Formatter](./../Data/JSON%20to%20Text.md) 模块连接到文本图层读取JSON。通过 [Object at Index](./../Data/Value%20at%20Index.md) 模块获得一个单独的触摸，用 [Structure Key](./../Data/Value%20for%20Key.md) 和 [Splitter](./../Utility/Splitter.md) 模块读取单个触摸的位置或力度，设置位置或数字以转换值。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44941986-4ca2-4f32-97ee-2b014c77605d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170434Z&X-Amz-Expires=86400&X-Amz-Signature=b624fe948f093848ea65e802acbbc03dd44c397c971eb193490304ee21fe6887&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Touches 触摸

A JSON object containing information about the position of every touch on the trackpad.

一个JSON对象，包含每个在触控板上的触摸位置和力度信息。

------

### Related Patches 相关模块

[Splitter 分离器](./../Utility/Splitter.md)

[Interaction 交互](./../Interaction/Interaction.md)

[Mouse 鼠标](./../Interaction/Mouse.md)

[Touches 触摸](./Touches.md)

[Value for Key 关键值](./../Data/Value%20for%20Key.md)

[Value at Index 索引值](./../Data/Value%20at%20Index.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4572cad1-e9d9-4660-87c5-b44f604eb630/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170440Z&X-Amz-Expires=86400&X-Amz-Signature=f7e8f68e001e80d140c8b442b6743d77b93943ca36a557de9a6816431597dd0d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
