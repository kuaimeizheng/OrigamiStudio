---
title: Device Motion 设备运动
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Device Motion 设备运动

Access accelerometer and gyroscope information from the phone, tablet, or computer.

从手机，平板电脑或计算机访问加速度和陀螺信息。

![Image](@site/static/img/docs/Device/device-motion.png)

### Has Acceleration 有加速

A boolean that is true when the phone, tablet, or computer has acceleration information.

一个布尔值，表示当手机、平板、电脑有加速信息时为真。

### Acceleration 加速

A point 3d that represents the acceleration in X, Y and Z directions. Use [Point 3D Unpack](./../Utility/Point%203D%20Unpack.md) to get the individual acceleration values.

一个3D点，表示x、y和z方向的加速度。使用[Point 3D Unpack](./../Utility/Point%203D%20Unpack.md)模块获取加速度值。

### Has Rotation Rate  有旋转速度

A boolean that is true when the phone, tablet, or computer has rotation information.

一个布尔值，表示当手机、平板、电脑有旋转信息时为真。

### Rotation Rate 旋转速率

A point 3d that represents the rotation rate around the X, Y and Z axes. Use [Velocity](./../Utility/Velocity.md) to calculate total rotation over time.

一个3D点，表示x、y和z轴的旋转速率。用 [Velocity](./../Utility/Velocity.md) 模块计算总旋转时间。

------

### Related Patches 相关模块

[Velocity 速度](./../Utility/Velocity.md)

[Point 3D Unpack 3D点解组](./../Utility/Point%203D%20Unpack.md)
