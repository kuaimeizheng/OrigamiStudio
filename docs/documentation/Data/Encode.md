---
title: Encode 编译
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Decode

Encodes an image, JSON or plain text into a base64 text. This is usually needed to send resources with the Network Request Patch.

将图像、JSON或纯文本编码为base64文本。这通常需要用网络请求模块发送资源。

<div className="patch-container">
    <div className="patch processor">
        <h3>Encode</h3>
        <ul className="inputs">
            <li><span></span></li>
        </ul>
        <ul className="outputs">
            <li>Loading<span></span></li>
            <li>Text<span></span></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

### Input 输入

An image, JSON, or text – depending on the patch type..

图像，JSON或文本-取决于模块类型。

</div>
<div className="outputs">

### Output 输出

#### Loading 加载

A boolean that is true while the response is loading.

一个布尔值，在加载响应时为真。

#### Text 文本

The encoded bas64 text..

编码的bas64文本…

</div>
</div>

------

### Related Patches 相关模块

[Network Request 网络请求](./Network Request)

[Decode 解码](./Decode)
