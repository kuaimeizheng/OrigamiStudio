---
title: Point 3D 三维点
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Point 3D 三维点

---

Create a point with 3 dimensions (X, Y). Useful when providing position and rotation values to layers.

创建具有 3 个维度（X，Y，Z）的点。用于当向图层提供位置、大小、锚点和轴心。

<div className="patch-container">
    <div className="patch processor">
        <h3>Point 3D</h3>
        <ul className="inputs">
            <li>X<span>0</span></li>
            <li>Y<span>0</span></li>
            <li>Z<span>0</span></li> 
        </ul>
        <ul className="outputs">
            <li>&nbsp;<span>0</span></li>
        </ul>
    </div>
</div>

### X

A number that represents the X value, which can represent a horizontal position or pitch rotation.

一个数值，表示水平位置或俯仰旋转的 X 值。

### Y

A number that represents the Y value, which can represent a vertical position or yaw rotation.

一个数值，表示表示垂直位置或偏航旋转的 Y 值。

### Z

A number that represents the Z value, which can represent a depth position or roll rotation.

一个数值，表示深度位置或滚动旋转的 Z 值

![Image](@site/static/img/docs/Utility/point-3d-example.png)

### Output 输出

A point with 3 dimensions.

一个三个维度的点。

---

### Related Patches 相关模块

[Point 点](./Point.md)

[Point Unpack 点解组](./Point%20Unpack.md)

[Point 3D Unpack 3D 点解组](./Point%203D%20Unpack.md)

[Vec4 四维](./Vec4.md)

[Vec4 Unpack 四维解组](./Vec4%20Unpack.md)

[Spacing 间距](./Spacing.md)

[Spacing Unpack 间距解组](./Spacing%20Unpack.md)
