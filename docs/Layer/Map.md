---
sidebar_position: 2
---

# Map 地图

Shows a static snapshot of a map using Apple Maps API.

显示一个使用苹果地图API的地图的静态快照。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b5c74212-5b02-4afd-8e3f-cba8c99b6f0a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185331Z&X-Amz-Expires=86400&X-Amz-Signature=804783abf1d50f0556c1451e93c4657bc46beaa57cc9a3d270f388ca47aab1a9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Enable 启用

A boolean that is true when the layer is displayed.

一个布尔值，表示显示图层时为真。

### Opacity 不透明度

The opacity of the layer.

图层的不透明度。

### Position 位置

The position to display the layer. Use [Point 3D](./../Utility/Point%203D.md) to set Z position.

显示图层的位置。使用 Point 3D 设置 Z 位置。

### Scale 比例

The scale of the layer.

图层的比例。

### Rotation 旋转

The rotation of the layer. Use [Point 3D](./../Utility/Point%203D.md) to set X or Y rotations.

图层的旋转。使用 Point 3D 设置 X 或 Y 旋转。

### Pivot 中心点

The pivot to rotate and scale the layer about. See [Coordinates 坐标](./../Concepts/Coordinates.md) for more information.

旋转和缩放图层的中心点。有关详细信息，请参阅坐标。

### Map Center 地图中心

Latitude and longitude coordinate of the center of the map

地图中心的经纬度坐标

### Map Span 地图跨度

Latitude and longitude delta spanning visible portion of the map

跨越地图可见部分的纬度和经度增量

------

### Related Patches 相关模块

[Location 位置](./../Device/Location.md)
