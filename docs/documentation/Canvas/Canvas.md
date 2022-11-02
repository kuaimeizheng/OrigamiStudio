---
title: Canvas 画布
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Canvas 画布

Origami 中的画布类似 Sketch 和 Figma 中的画布。可以直观地拖放和调整您原型的大小。

也可以绘制以及编辑从 Sketch 和 Figma 导入的形状图层、文本、图像、视频和图层。使用 [布局](./Layout.md) 功能可以在您的画板和图层组中设置自适应布局。

---

## Artboards 画板

画板允许你为设计每个屏幕里的图层。可以在 Origami 工具栏最左上角中选择的 **Device Size 设备大小** 来调整画板尺寸。

## Layer Library 图层库

使用 &nbsp; **⌘⇧N** &nbsp;或工具栏中的&nbsp; **+** &nbsp;按钮在弹出窗口中选择并添加一个图层。(也就是图层和模块库的区别)。

![](https://origami.design/public/images/documentation/layer_library.png)

图层列表

## Layer Properties 图层属性

图层属性类似于模块上的端口。这些输入到端口的值改变了图层的样式。

https://origami.design/public/images/videos/patches_and_layers.mp4

模块输出端口连接到图层属性的输入端口

## Layer Property Patches 图层属性模块

要通过模块来调整图层属性，可以在检查器中单击属性，就会自动创建一个蓝色的图层属性模块，其中包含图层的名称和一个输入值，其它模块可以连接到这的输入端口。

![](./../../../static/img/docs/Canvas/canvas-2.png)

点击矩形属性上的 不透明度 端口，将把这个模块添加到模块编辑器中。

你也可以直接将连接线从一个模块拖到在检查器中的一个图层属性上。

如果一个属性有多个坐标值(例如：位置 X/Y，大小 W/H)，你可以点击特定的坐标值，例如：X

![](./../../../static/img/docs/Canvas/canvas-3.png)

或者点击整个属性，例如: 位置

![](./../../../static/img/docs/Canvas/canvas-4.png)

点击具有多个坐标值 (例如: 位置，大小，角度) 的属性将自动插入一个对应的模块，这可以显示默认情况下未显示的其他坐标(例如：Z)。

## Groups 组

可以选择任意数量的图层并按下 **⌘G **来对图层进行分组。Origami 的图层组有自己的大小和位置，并剪辑组中的图层。

## Masking 蒙版

图层可以被其他图层遮罩。**⌘⌥M** 可以把该图层变成 alpha 蒙版，将在它的正上方剪切该图层。

要给其他图层添加遮罩，您可以选择图层并按下 **⌘⌥⇧M** 。

所有的遮罩都是 alpha 遮罩，支持更高级的样式，比如渐变遮罩或者基于合并形状的复合遮罩。

## Components 组件

在 Android 或 iOS 上，有越来越多的用于快速构建原型的预置组件。组件列表在插入图层的弹窗中。

通过选择图层并按下快捷键 **⌘⌥G**，将会把它们组合在一起来创建自定义模块。

双击模块可以进入内部进行编辑。也可以将其添加到库中，然后按快捷键 **⌘⌥C** 与其他人共享

---

## Summary 总结

- 图层类似于 Sketch 和 Photoshop 等其他软件中的图层，可以进行分组和蒙版。
- 通过点击检查器中的图层属性，在模块编辑器中添加相应的模块来创建动画和改变图层。
- 使用预置的组件可以节省你的工作时间，也可以创建自己的组件库进行共享。
