---
sidebar_position: 2
---

# Wait 等待

Start a timer that waits the input duration before outputting a pulse.

启动等待指定时间的计时器

（设置延迟动画的计时器，在要延迟的脉冲上加上一个 Wait 模块，就能让这个脉冲延迟设定的时间到达下一个模块）

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7cfb782b-0aac-4c69-9a63-e06d76b94acd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T182735Z&X-Amz-Expires=86400&X-Amz-Signature=cbe24b6cbd86cac079051636142bd7a86860771cf2db6cacd971396016a46713&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Start 开始

A pulse that starts the timer.

启动定时器的脉冲。

### Duration 持续时间

The time to wait.

要等待的时间。

### Output 输出

A boolean that is true when the wait is finished

等待时间结束后发出脉冲。一般连接到事件类模块。

------

### Related Patches 相关模块

[When Prototype Starts 当原型启动时](https://www.notion.so/When-Prototype-Starts-12d376a890464eafb4479f301add9e73)
