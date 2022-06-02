---
sidebar_position: 1
---

# Canvas 画布

The Canvas in Origami works the way one might expect coming from Sketch or Figma. Visually drag, drop and resize to layout your prototype. Draw and edit shape layers, text, images, videos and layers imported from Sketch & Figma. Setup adaptive layouts in your artboards and groups using layout.

Origami 中的画布类似 Sketch 和 Figma 中的画布。可以直观地拖放和调整您原型的大小。也可以绘制以及编辑从 Sketch 和 Figma 导入的形状图层、文本、图像、视频和图层。使用 [布局](https://www.notion.so/Layout-d865c2cba6e5404e9130467676dc6f65) 功能可以在您的画板和图层组中设置自适应布局。

------

# Artboards 画板

Artboards allow you to contain the layers for each screen you’re designing. The artboard dimensions are determined by the Device Size selected in the far left corner of the Origami toolbar.

画板允许你为每个屏幕里的图层进行设计。画板尺寸由 Origami 工具栏最左上角中选择的“Device Size 设备大小”决定。

# Layer Library 图层库

Add a layer with the layer insertion popover using ⌘⇧N or the + button in the toolbar. (Explain how the layer library is different from the patch library).

使用 **⌘⇧N** 或工具栏中的 **+** 按钮在弹出窗口中添加一个图层。(也是图层库和模块库的区别)。

![](https://origami.design/public/images/documentation/layer_library.png)

Layer Library 图层库

# Layer Properties 图层属性

Layer properties are similar to ports on patches. The values of these input ports determine the appearance of the layer.

图层属性类似于模块上的端口。这些输入到端口的值改变了图层的外观。

https://origami.design/public/images/videos/patches_and_layers.mp4

Connecting Patch outputs to layer property inputs

模块输出端口连接到图层属性输入端口

# Layer Property Patches 图层属性模块

To adjust layer properties via patches, click on the property in the inspector, and a blue layer property patch is created with the name of the layer and a single input port that writes a value to that port.

要通过模块来调整图层属性，在检查器中单击属性，就会创建一个蓝色的图层属性模块，其中包含图层的名称和一个输入值连接到这的输入端口。

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/98c4bb7e-b2f6-4fc6-a02e-897eafc7796c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T160637Z&X-Amz-Expires=86400&X-Amz-Signature=7b6e283c37751746ac40f0ee62ae743f98ffc2ffbb889434e66f4ad1acbc8b6c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Clicking on the Opacity port on a Rectangle's property will add this patch to the Patch Editor.

点击矩形属性上的 不透明度 端口将把这个模块添加到模块编辑器中。

You can also drag a cable directly from a patch to a layer property in the inspector.

你也可以直接将连接线从一个模块拖到在检查器中的一个图层属性上。

If a property has multiple coordinates (ex: Position X/Y, Size W/H), you can click on the coordinate specifically, ex: X

如果一个属性有多个坐标值(例如:位置 X/Y，大小 W/H)，你可以点击特定的坐标值，例如:X

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bf73959c-29c4-42e7-be56-ba4b86981bbb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T160753Z&X-Amz-Expires=86400&X-Amz-Signature=a9a0336eb704007921c68244da8b0c04726c56b41936d73f42a70bee1df08c70&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

… or click on the property as a whole, ex: Position

或者点击整个属性，例如: 位置

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1e3f0fb0-077e-4fdf-aa7b-8307d9ea7706/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T160808Z&X-Amz-Expires=86400&X-Amz-Signature=ff6d743315829aef1daf77ebf6757e87509d3ab32c3312a440621ebd44924b79&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Clicking on a property with multiple coordinates (ex: Position, Size, Rotation) will automatically insert a Point patch, which can expose additional coordinates (ex: Z) that aren't shown by default.

点击具有多个坐标值 (例如: 位置，大小，角度) 的属性将自动插入一个对应的模块，这可以显示默认情况下未显示的其他坐标(例如:Z)。

# Groups 组

Layers can be grouped by selecting any number of layers and pressing ⌘G. Layer groups in Origami Studio have their own size and position, and clip layers within.

可以选择任意数量的图层并按下 **⌘G** 来对图层进行分组。Origami的图层组有自己的大小和位置，并剪辑组中的图层。

# Masking 蒙版

Layers can be masked by other layers. Pressing ⌘⌥M will turn the layer to an alpha mask, clipping the layer right above it. To add additional layers to be masked, you can select the layers and press ⌘⌥⇧M.

图层可以被其他图层遮罩。**⌘⌥M** 可以把该图层变成 alpha 蒙版，将在它的正上方剪切该图层。要给其他图层添加遮罩，您可以选择图层并按下 **⌘⌥⇧M**。

All masks are alpha masks, which can let you do advanced masks like gradient masks or composite masks based on a group of shapes.

所有的遮罩都是 alpha 遮罩，支持更高级的样式，比如渐变遮罩或者基于合并形状的复合遮罩。

# Components 组件

There is a growing collection of pre-built components for quickly prototyping with standard components on Android or iOS. Components are listed in the layer insertion popover.

在Android或iOS上，有越来越多的用于快速构建原型的预置组件。组件列表在插入图层的弹出框中。

Create custom components by selecting layers and pressing ⌘⌥G to group them into a component. Double-click the component to enter it and make changes. Add it to your Library and share it with others by pressing ⌘⌥C.

通过选择图层并按快捷键 **⌘⌥G** 将它们组合在一起来创建自定义模块。双击模块进入内部进行编辑。也可以将其添加到库中，然后按快捷键 **⌘⌥C** 与其他人共享

------

# Summary 总结

- Layers are similar to layers in other apps like Sketch and Photoshop, and can be grouped and masked
- Animate and change layers by clicking on layer properties in the inspector to add a corresponding patch in the Patch Editor.
- Use pre-made components to speed up your workflow, and create your own library to share.
- 图层类似于Sketch和Photoshop等其他软件中的图层，可以进行分组和蒙版。
- 通过点击检查器中的图层属性，在模块编辑器中添加相应的补模块来创建动画和改变图层。
- 使用预置的组件来节省你的工作时间，并创建您自己的组件库进行共享。