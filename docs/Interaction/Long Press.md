---
sidebar_position: 2
---

# Long Press 长按

Capture long presses. To be used with the Down port in the [Interaction](./Interaction.md) patch.

Use the Touch button on a layer to quickly add interactions.

捕捉长按。Down接口需要连接[Interaction](./Interaction.md)模块使用。

使用图层右上角的Touch按钮快速创建交互。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/15654c63-f16d-4a8e-b9df-3e0033c4f539/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170946Z&X-Amz-Expires=86400&X-Amz-Signature=460bdcca574a8d371db6db3f3c68245d3922f5c9dd53359e4c56ac95c602693d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Down 按下

A boolean that comes from the Interaction patch’s Down output.

Interaction模块的Down输出口连接到这里。

### Delay 延迟

The minimum time duration of the touch down to activate a long press. By default, the delay is 0.5s.

设置按下持续的最小时长激活 Long Press 模块。默认情况下，延迟为0.5s。

### Long Press 长按### 

Turns on when the press passes the duration specified in Delay input

按下Delay接口定义的最小时长时打开。

------

### Related Patches 相关模块

[Interaction 交互](./Interaction.md)

[Hover 悬停](./Hover.md)

[Double Tap 双击](./Double%20Tap.md)

[Mouse 鼠标](./Mouse.md)

[Touches 触摸](./../Device/Touches.md)

[Trackpad 触控板](./../Device/Trackpad.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/56cd2fcd-c89b-4b3c-a794-19eef22b3aff/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170952Z&X-Amz-Expires=86400&X-Amz-Signature=140273cffbf39d0f1321ed9da92c120abfd89edec624c0831a23f1f01434fded&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
