---
title: Decode 解码
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Decode

Decodes a text in base64 into an image, JSON or plain text. This is usually needed to when retrieving resources from the Network Request Patch.

将 base64 中的文本解码为图像，JSON 或纯文本。这通常是在从网络请求模块中检索资源时需要的。

<div className="patch-container">
    <div className="patch processor">
        <h3>Array Sort</h3>
        <ul className="inputs">
            <li>Text<span></span></li>
        </ul>
        <ul className="outputs">
            <li>Loading<span></span></li>
            <li><span></span></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

### Text 文本

A text in base64 encoding that represents either an image, JSON or plain text.

base64 编码的文本，表示图像、JSON 或纯文本。

</div>
<div className="outputs">

### Output 输出

#### Loading 加载

A boolean that is true while the response is loading.

一个布尔值，在加载响应时为真。

#### Output 输出

The response result – image, JSON, or text – depending on the patch type.

响应结果——图像、JSON 或文本——取决于模块类型。

</div>
</div>

------

### Related Patches 相关模块

[Network Request 网络请求](./Network Request)
