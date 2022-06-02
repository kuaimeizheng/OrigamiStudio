---
sidebar_position: 2
---

# Sample and Hold 采样保持

Store a value of any type. The patch will store the value until a new value is sampled or until the current value is reset.

存储任何类型的值。模块将存储采集的值，直到新值被采样或直到当前值被重置为止。

Right-click to change the type (ex: number, text, color).

右键更改接口数量和类型。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db9db180-bb54-4a61-bb3d-f104ad56a27b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T182056Z&X-Amz-Expires=86400&X-Amz-Signature=639da17f167ca16dbf76de10f6265dc95e92c5ac25981f3f0d472ddd28d62089&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Value 值**

A value of any type. By default, the value is a number.

一个任意类型的值，通常是数字。

**Sample 采样**

A boolean that is true when the patch is sampling a value. When false, the patch will not sample the value, even if it changes. The patch outputs the most recently sampled value.

一个布尔值，当模块对值采样时为true。

当值为false时，模块不会对该值进行采样，即使更改。

模块输出最近采样的值。

通俗解释就是Sample开关打开，Value的值就会输出到输出端口。

**Reset 重置**

A pulse that clears the currently stored value.

一个脉冲，表示在输出端口清除当前存储的值，重置为 0 。

**Type 类型**

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e6058b12-64d0-4ed8-a3fb-f42402342ce0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T182103Z&X-Amz-Expires=86400&X-Amz-Signature=3750d2e0313f83c82405caa0444b573e2ff0be585c6db4169cb7d31f94f98142&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Output 输出**

The currently stored value.

输出当前存储的值

------

### ***\*Related Patches 相关模块\****

[Pulse 脉冲](https://www.notion.so/Pulse-ac15ab739fed400496866264e653095f)

[Interaction 交互](https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc)
