---
sidebar_position: 2
---

# Double Tap 双击

Capture double taps or single taps within a specified time frame. To be used with the Tap port in the [Interaction](./Interaction.md) patch.

Use the Touch button on a layer to quickly add interactions.

捕捉指定时间内的双击或单击。与 Interaction 模块的Tap 输出接口连接在一起使用。

使用图层上的 Touch 按钮快速添加交互。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/704baf32-c3e6-4ef4-97bd-3a303001bf31/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170559Z&X-Amz-Expires=86400&X-Amz-Signature=4f520af896073c4c5be71bc8179b3fae7622cd414d2c9e9509b520badaaa0c08&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Tap 轻点

A pulse that comes from the Interaction patch’s Tap output.

一个脉冲，表示交互模块的 Tap 输出端口连接到这里。

### Delay 延迟

The maximum time duration between two taps to activate a double tap. By default, the delay is 0.3s.

在最大持续时间内点击两次能激活双击。默认情况下，延迟为0.3秒。

### Double Tap 双击

Pulses when two taps occur in the specified delay

当双击发生后，在指定的延迟后产生脉冲。

### Single Tap 单击

Pulses when one tap occurs in the specified delay

当点击发生后，在指定的延迟后产生脉冲。

------

### Related Patches 相关模块

[Interaction 交互](./Interaction.md)

[Mouse 鼠标](./Mouse.md)

[Long Press 长按](./Long%20Press.md)

[Touches 触摸](./../Device/Touches.md)

[Trackpad 触控板](./../Device/Trackpad.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c95fd539-3c14-4ff8-b278-917ff7da8af4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170552Z&X-Amz-Expires=86400&X-Amz-Signature=033c838a211d677b053f1e7df65b8cc75fe059885262df2bcd4d5acc0498f543&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
