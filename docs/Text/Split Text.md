---
sidebar_position: 2
---

# Split Text 拆分文本

Splits the text into a loop using the token.

使用标记将文本拆分为循环。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/72278616-ab25-4904-8785-7c72e1748624/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T180045Z&X-Amz-Expires=86400&X-Amz-Signature=da54886bdc1fcfbb6be0e2b52f2167f2e2071a46e2fab286409b1614967c2d10&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Text 文本

A text string to evaluate.

待处理的文本

### Token 标记### 

A text string to find and split the the text into parts around.

一个文本字符串，用于查找以这个标记文本位置将整个文本分割为几个部分。

### Output 输出

A loop of the parts of the text split by the token. The entire text will be returned if the token is not found.

将标记分割出来几个部分的文本组成循环。如果没有找到输入的标记文本，将返回整个文本。

------

### ### Sample  示例

如图：

输入的 ### Text 文本文本字符串为：这是示例文本。

输入的 ### Token 标记文本字符串为：示例。

### Output 输出将输出循环为：[这是] [文本]。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f2f87f86-ffb6-465e-939e-cba59253ed79/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T180052Z&X-Amz-Expires=86400&X-Amz-Signature=fa08ccb462ea472379fb353fc80e129a3c3ab624d9c7738df3e4ff451b611118&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

------

### Related Patches 相关模块

[Trim Text 修剪文本](https://www.notion.so/Trim-Text-1c15e6b94a6541b396788d4a55fba679)

[Text Replace 文本替换](https://www.notion.so/Text-Replace-4b19b333ebb24a8daaf32038de2ed5ee)

------

### Related Layers 相关图层

[Text Layer 文本图层](https://www.notion.so/Text-Layer-55f5163900ed47698f1ccc1752423a88)
