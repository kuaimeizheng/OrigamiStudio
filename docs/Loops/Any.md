---
sidebar_position: 2
---

# Any 任意

Check if any of the booleans in a loop are true.

检查循环中的任何布尔值是否为真。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/12abf4fb-aac8-41f6-987d-992d454e97d9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172347Z&X-Amz-Expires=86400&X-Amz-Signature=2f76a24c967b828b5bda1956f93e29067e4e7b0da564268c060207b7307e2aae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Often used with an [Interaction](./../Interaction/Interaction.md) patch on a looped layer to check when any of the layers are tapped.

通常与循环图层上的交互模块一起使用，以检查突出什么时候被点击。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/993453ba-77e4-4de2-b779-134518a671c7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172354Z&X-Amz-Expires=86400&X-Amz-Signature=9bd3aeed249dcfe41ffc35ffe4373a67dd1435af3d49ed4293cd5d855c49fd22&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Loop 循环

A loop of booleans.

一个包含布尔值的循环

### Grouping 分组

For advanced use only. An index or a loop of indices. By default, the number is -1.

仅供高级使用。索引或索引循环。默认情况下，该数字为 -1。

### Output 输出

A boolean that is true if any of the loop of booleans are true. If a loop is passed into Grouping, then a loop of booleans.

如果布尔值循环中的任何一个为真，则该布尔值为真。

如果一个循环被传递到分组中，那么它就是一个布尔值循环。

------

### Related Patches 相关模块

[Interaction 交互](./../Interaction/Interaction.md)

[Loop 循环](./Loop.md)

[Loop Builder 循环生成器](./Loop%20Builder.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd325469-34bf-4d2c-a490-3e736bd31112/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172404Z&X-Amz-Expires=86400&X-Amz-Signature=bb2285d805e8e5e6cafc902d6f5afd6f69a12f58dc21f3bbae18d9a9b16b634b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
