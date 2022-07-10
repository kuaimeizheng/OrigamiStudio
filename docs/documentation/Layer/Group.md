---
sidebar_position: 2
---

# Group 组

Organize related layers that move, scale, rotate, and fade together. Groups have a size that clips the layers within.

将图层整理在一起可以移动、缩放、旋转和淡入。组的大小可以裁剪其中的图层。
<div class="patch-container">
 <div class="patch layer">
  <h3>Group</h3>  
   <ul class="inputs">
    <li>Enable</li>
    <li>Position</li>
    <li>Anchor</li>
    <li>Size</li>
    <li>Opacity</li>
    <li>Scale</li>
    <li>Rotation</li>
    <li>Pivot</li>
    <li>Shadow Color</li>
    <li>Shadow Opacity</li>
    <li>Shadow Radius</li>
    <li>Shadow Offset</li>
   </ul>
 </div>
</div>

### Enable 启用

A boolean that is true when the layer is displayed.

勾选启用图层。

### Position 位置

The position to display the layer. Use [Point 3D](./../Utility/Point%203D.md) to set Z position.

显示图层的位置。使用 Point 3D 设置 Z 位置。

### Anchor 锚点

The anchor point to position the layer relative to. See [Coordinates](./../Concepts/Coordinates.md) for more information.

相对于图层定位的锚点。详细信息阅读[Coordinates 坐标](./../Concepts/Coordinates.md)。

### Size 尺寸

The size of the layer.

图层的大小 

### Opacity 不透明度

The opacity of the layer.

图层的不透明度。

### Scale 比例

The scale of the layer.

图层显示的比例。

### Rotation 角度

The rotation of the layer. Use [Point 3D](./../Utility/Point%203D.md) to set X or Y rotations.

图层的旋转。使用 Point 3D 设置 X 或 Y 旋转角度。

### Pivot 轴心点

The pivot to rotate and scale the layer about. See [Coordinates](./../Concepts/Coordinates.md) for more information.

图层缩放、旋转、移动时的中心点或初始点。详细信息阅读[Coordinates 坐标](./../Concepts/Coordinates.md)。

阴影：

### Shadow Color 阴影颜色

The color of the shadow.

阴影的颜色。

### Shadow Opacity 阴影不透明度

The opacity of the shadow. By default, the opacity is 0, which disables the shadow.

阴影的不透明度。 默认值为0，不显示阴影。

### Shadow Radius 阴影半径

The blur radius of the shadow.

阴影的模糊半径值。（值越大范围越大，颜色越淡）

### Shadow Offset 阴影偏移

The size of the shadow relative to the size of the layer.

阴影相对于图层的距离和角度。

------

### Related Patches 相关模块

[Interaction 交互](./../Interaction/Interaction.md)
