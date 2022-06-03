---
sidebar_position: 2
---

# Cubic Bezier Curve 三次贝塞尔曲线

Allows you to define custom animation curves by specifying 2 control points. The cubic bezier curve is normalized, meaning the start point of the curve is always (0,0) and the end is always (1,1).

允许您通过指定 2 个控制点来定义自定义动画曲线。三次贝塞尔曲线是标准化的，这意味着曲线的起点始终为 (0,0)，终点始终为 (1,1)。

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f7aab41-05be-45c3-9676-f05d3bf6c0ce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T152656Z&X-Amz-Expires=86400&X-Amz-Signature=a00b5af4bc2f89c70e0b092afdc228ec2bd1ad60380976df829986e6da96373d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Progress 进度

A number from 0-1 that represents the progress of the animation.

一个从 0 到 1 的数字，表示动画的进度。

### Input 输入

The X position of the first control point.

第一个控制点的 X 位置。

### Input 输入

The Y position of the first control point.

第一个控制点的 Y 位置。

### Input 输入

The X position of the second control point.

第二个控制点的 X 位置。

### Input 输入

The Y position of the second control point.

第二个控制点的 Y 位置。

### Progress 进度

The progress value derived from the new cubic bezier curve.

从新的三次贝塞尔曲线导出的进度值。

### 2D Progress 2D进度

The X, Y position of the input progress on the curve. This can be used to plot the bezier curve.

输入进度在曲线上的 X、Y 位置。这可用于绘制贝塞尔曲线。

---

### Related Patches 相关模块

[Classic Animation 经典动画](./Classic%20Animation.md)

[Cubic Bezier Curve 三次贝塞尔曲线](./Cubic%20Bezier%20Curve.md)

[Progress 进度](./../Utility/Progress.md)

[Transition 过渡](./../Utility/Transition.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f0e9e85a-bfcf-469c-b05a-5f254265e8fe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T160002Z&X-Amz-Expires=86400&X-Amz-Signature=86a552146fd73312ae11b83be114ca5fe1c05c1eabf8e82b0237a22a75a8f68e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
