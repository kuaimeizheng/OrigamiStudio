---
sidebar_position: 2
---

# Delay 延迟

Delay a value by the specified number of seconds. The patch will not output the value it receives until the delay has elapsed.

以指定的秒数延迟脉冲。Delay 模块在接收到信息后不会马上输出，而是等到指定的延迟时间过了之后才输出。

Right-click to change the type (ex: number, boolean, color).

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c9775ea2-7c27-4475-b275-3fe72b6bbc68/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181048Z&X-Amz-Expires=86400&X-Amz-Signature=b99943bb391984523d20ee39c5d4a9d0f9e81ac2d6bde95aa9092869f573d007&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Value 值

The value to delay.

要延迟的值连接到这里。

### Duration 持续时间

The number of seconds to wait.

等待多长时间（单位：秒）。

### Style 样式

The condition for triggering the delay, one of Always, When Increasing, and When Decreasing. The default Always option will always trigger a delay, while When Increasing and When Decreasing will trigger a delay only when the value is currently increasing or decreasing.

Note that the When Increasing and When Decreasing options only apply to number and boolean values; otherwise, When Increasing and When Decreasing will function the same as Always.

触发延迟的条件，可以选择 “始终”、“当增加时”、“当减少时”。默认的 “始终”选项将始终触发延迟。而 “当增加时”、“当减少时”选项将仅在当前值增加或减少时触发延迟。

请注意 “当增加时”、“当减少时” 选项仅适用于数值和布尔值；否则，“当增加时”、“当减少时”和 “始终” 功能相同。

### Value 值

The value, which will be output only after the delay has elapsed.

输出延迟后的值。

------

### Related Patches 相关模块

[Delay 1 延迟1](./Delay%201.md)

[Switch 开关](./Switch.md)

[Interaction 交互](./../Interaction/Interaction.md)
