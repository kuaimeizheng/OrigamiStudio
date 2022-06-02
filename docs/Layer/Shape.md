---
sidebar_position: 2
---

# Shape 形状

A shape specified by the shape input. Add a shape patch like Rectangle, Triangle, Oval, or Union of the above. Shapes can have a color fill and a stroke.

由形状端口输入指定的形状。添加一个形状模块，如矩形，三角形，椭圆形，或形状组合。形状可以有颜色填充和描边。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0a153a1a-4fe9-4fce-8895-65c2bda2747d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185723Z&X-Amz-Expires=86400&X-Amz-Signature=4c5bc8ac6c40c0cbad455b53762a8cad071094152618168c182548d27faa5ba5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable 启用**

A boolean that is true when the layer is displayed.

勾选启用图层。

**Fill 填充**

The color of the layer.

图层的颜色。

**Shape 形状**

The path to draw. Add a shape patch like Rectangle, Triangle, Oval, or Union of the above.

绘制的路径。将圆形、矩形、三角形等形状模块的 **Shape** 输出口连接到这个属性。

**Position 位置**

The position to display the layer. Use [Point 3D](https://www.notion.so/Point-3D-6d2c3b3df3f74659ae0d647876ce3aa9) to set Z position.

显示图层的位置。使用 Point 3D 设置 Z 位置。

**Opacity 不透明度**

The opacity of the layer.

图层的不透明度。

**Scale 比例**

The scale of the layer.

图层显示的比例。

阴影：

**Shadow Color 阴影颜色**

The color of the shadow.

阴影的颜色。

**Shadow Opacity 阴影不透明度**

The opacity of the shadow. By default, the opacity is 0, which disables the shadow.

阴影的不透明度。 默认值为0，不显示阴影。

**Shadow Radius 阴影半径**

The blur radius of the shadow.

阴影的模糊半径值。（值越大范围越大，颜色越淡）

**Shadow Offset 阴影偏移**

The size of the shadow relative to the size of the layer.

阴影相对于图层的距离和角度。

**Stroke Color 描边颜色**

The color of the stroke.

描边的颜色。

**Stroke Width 描边宽度**

The width of the stroke. By default, the width is 0, which disables the stroke.

描边的宽度。默认情况下宽度为0，不显示描边。

**Start 开始**

A number from 0 to 1 that represents the start of the stroke.

描边开始的位置。

**End 结束**

A number from 0 to 1 that represents the end of the stroke.

描边结束的位置。

------

### ***\*Related Patches 相关模块\****

[Rounded Rectangle 圆角矩形](https://www.notion.so/Rounded-Rectangle-682f601349ac4e8985eb9b70c98792ca)

[Oval 椭圆形](https://www.notion.so/Oval-a93bcffdb9d94ba1a4dbd968ba185a87)

[Union 合并](https://www.notion.so/Union-25b8641484f545799ac0f5e2fd48620d)

[Triangle 三角形](https://www.notion.so/Triangle-de2307b4545640358caaee069a8ca536)

------

### Related Layers 相关图层

[Oval 椭圆形](https://www.notion.so/Oval-a93bcffdb9d94ba1a4dbd968ba185a87)

[Rectangle 矩形](https://www.notion.so/Rectangle-d4f77c73db8f4c9393d1a4616cd27912)
