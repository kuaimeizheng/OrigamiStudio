---
sidebar_position: 2
---

# Device Motion 设备运动

Access accelerometer and gyroscope information from the phone, tablet, or computer.

从手机，平板电脑或计算机访问加速度和陀螺信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/613637c1-fb71-4ab3-9ee4-1f9939ddc9fb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165555Z&X-Amz-Expires=86400&X-Amz-Signature=4a39d62b41ec64c4205f78048ddb05c1f69edf4881f64fbe77770e078e4bec36&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Has Acceleration 有加速**

A boolean that is true when the phone, tablet, or computer has acceleration information.

一个布尔值，表示当手机、平板、电脑有加速信息时为真。

**Acceleration 加速**

A point 3d that represents the acceleration in X, Y and Z directions. Use [Point 3D Unpack](./../Utility/Point%203D%20Unpack.md) to get the individual acceleration values.

一个3D点，表示x、y和z方向的加速度。使用[Point 3D Unpack](./../Utility/Point%203D%20Unpack.md)模块获取加速度值。

**Has Rotation Rate  有旋转速度**

A boolean that is true when the phone, tablet, or computer has rotation information.

一个布尔值，表示当手机、平板、电脑有旋转信息时为真。

**Rotation Rate 旋转速率**

A point 3d that represents the rotation rate around the X, Y and Z axes. Use [Velocity](./../Utility/Velocity.md) to calculate total rotation over time.

一个3D点，表示x、y和z轴的旋转速率。用 [Velocity](./../Utility/Velocity.md) 模块计算总旋转时间。

------

### Related Patches 相关模块

[Velocity 速度](./../Utility/Velocity.md)

[Point 3D Unpack 3D点解组](./../Utility/Point%203D%20Unpack.md)



历史版本

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1b2830a-3a89-41cf-9e2b-7e62fccf2d83/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165605Z&X-Amz-Expires=86400&X-Amz-Signature=736899ec7f0af04e2e70262d7b37d7d5036dbfbb89acbbc6e79b31554494f1fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
