---
sidebar_position: 2
---

# Text Layer 文本图层

Display text. The alignment, size, font, and all other standard attributes of text can be configured on this layer.

显示文字。文本的对齐方式、大小、字体和所有其他标准属性都可以在该层上进行设置。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44e9dc04-9201-42a6-b83d-8138018aed00/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185747Z&X-Amz-Expires=86400&X-Amz-Signature=d2a9b9b0af37210b532e8a080a539d26752117cd61256d0c89faf47117a84da5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Enable 启用

A boolean that is true when the layer is displayed.

勾选启用查看器中才读取这个图层。

### Text 文本

A text string to display.

要显示的文字。

### Font Name 字体名称

The font family with which to render the text. By default, uses the font on the phone, tablet, or computer the prototype is running on.

用于呈现文本的字体系列。默认情况下，在使用正在运行的手机、平板电脑、电脑上的字体。

### Font Size 字体大小

The size with which to render the text, in dp.

文字大小，单位dp。

### Color 颜色

The color of the layer.

图层的颜色。

### Position 位置

The position to display the layer. Use [Point 3D](https://www.notion.so/Point-3D-6d2c3b3df3f74659ae0d647876ce3aa9) to set Z position.

位置。点击属性名称 ### Position可以显示3个轴向并设置值。

### Anchor 锚点

The anchor point to position the layer relative to. Determines text alignment See [Coordinates](https://origami.design/documentation/concepts/Coordinates.html) for more information.

相对于图层定位的锚点。确定文本对齐方式。

详细信息阅读[Coordinates 坐标](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2)。

### Size 尺寸### 

The size of the layer. Any text overflowing the width will be wrapped to subsequent lines.

文本框的大小。溢出宽度的文本会自动换行。

### Opacity 不透明度

The opacity of the layer.

图层的不透明度。

### Scale 比例

The scale of the layer.

图层显示的比例。

### Rotation 角度

The rotation of the layer. Use [Point 3D](https://origami.design/documentation/patches/builtin.point3D.html) to set X or Y rotations.

图层的角度。使用 [Point 3D](https://www.notion.so/Point-3D-6d2c3b3df3f74659ae0d647876ce3aa9) 模块设置Z、Y轴角度。

### Pivot 轴心点

The pivot to rotate and scale the layer about. See [Coordinates](https://origami.design/documentation/concepts/Coordinates.html) for more information.

图层缩放、旋转、移动时的中心点或初始点。详细信息阅读[Coordinates 坐标](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2)。

阴影：

### Shadow Color 阴影颜色

The color of the shadow.

阴影的颜色。

### Shadow Opacity 阴影不透明度

The opacity of the shadow. By default, the opacity is 0, which disables the shadow.

阴影的不透明度。 默认值为0，不显示阴影。

### Shadow Radius 阴影半径### 

The blur radius of the shadow.

阴影的模糊半径值。（值越大范围越大，颜色越淡）

### Shadow Offset 阴影偏移

The size of the shadow relative to the size of the layer.

阴影相对于图层的距离和角度。

### Character Spacing 文字间距

A number that represents the horizontal space between characters, in points.

表示字符之间的水平间距的数字，单位dp。

### Line Height 行间距

A number that represents the distance between baselines, in points.

表示两行文本间的距离，单位dp。

### Paragraph Spacing 段落间距

A number that represents the vertical space between paragraphs, in points.

表示两个段落之间的距离，单位dp。

------

### Related Patches 相关模块

[Text Size 文本大小](https://www.notion.so/Text-Size-72cf71974e544a7f9b2fc9fb5de9143e)

[Text Length 文本长短](https://www.notion.so/Text-Length-4f520beee1fd463aa41737d2afd76ae2)

[Text Style 文本样式](https://www.notion.so/Text-Style-971a1442321d4e04a09ba0219f755ef6)

------

### Related Layers 相关图层

[Text Field 文本输入框](./Text%20Field.md)
