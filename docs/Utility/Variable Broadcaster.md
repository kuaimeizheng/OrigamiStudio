---
sidebar_position: 2
---

# Variable Broadcaster 变量发送器

Sends a value to any Variable Receiver patch set to receive the same name. Used to simplify and organize patches by replacing the cables between patches.

将值发送到任何变量接收器模块集以接收相同的名称。用于通过替换模块之间的连线来简化和整理补丁。

By default, the variable can be used locally, and is available only within the current patch graph. Click the popup menu (or right-click the patch) to change the scope to “Global” to make the value available within the current patch graph as well as any child components. Learn more about [Global Variables](./../Concepts/Variables.md).

默认情况下，该变量可以在本地使用，并且仅在当前模块图中可用。单击弹出菜单（或右键单击模块）以将范围更改为“全局”，以使该值在当前模块图中以及任何子组件中可用。详细了解[全局变量](./../Concepts/Variables.md)。

Rename the patch to set the name of the value.

重命名模块以设置该值的名称。

Right-click the patch to change the type of the value, or to change the scope of where the variable is available.

右键单击模块以更改值的类型，或更改变量可用的范围。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a3059001-331e-4b3e-afda-27e96232a42c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T182459Z&X-Amz-Expires=86400&X-Amz-Signature=e1edf2f35cf6312c4a7a8b68a0b768a46894eb8ff98adb37648de39e1d587fb7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Input 输入

A value to broadcast.

要发送的值。

------

### Related Patches 相关模块

[Variable Receiver 变量接收器](./Variable%20Receiver.md)

[Splitter 分离器](./Splitter.md)
