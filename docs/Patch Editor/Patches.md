---
sidebar_position: 1
---

# Patches 模块

Patches are the building blocks of Origami Studio. Play with your ideas and iterate with incredible speed.

模块是 Origami 中的构建单元。可以快速测试和优化你的想法。

Patches allow you to add interaction, animation, and behavior to your prototype. Each patch performs a unique function and can pass and receive information to and from other patches.

模块允许你在原型中添加交互、动画和行为。每个模块都有一个独特的功能，可以向其他模块传递和接收信息。

------

The patch library contains a large number of patches, but a core set of 15-20 patches will support most prototypes. They all have single key [Keyboard Shortcuts] to enable super fast iteration.

模块库包含大量模块，但 15-20 个核心模块将可以制作大多数原型。它们都有键盘快捷键来快速添加。

Patches range from simple math patches:

包括简单的数学模块：

![](./../../static/img/docs/Patch%20Editor/patches-1.png)

The  [+] patch takes two number inputs on the left, and outputs the sum on the right. 2 + 3 = 5.

- 模块 在左边端口接收两个数字输入，在右边输出它们的和。例如：2 + 3 = 5。

… to patches that add [interactions](./../Interaction/Interaction.md) to layers:

添加图层交互的模块:

![](./../../static/img/docs/Patch%20Editor/patches-2.png)

The [Interaction](./../Interaction/Interaction.md) patch outputs information about touches on the Viewer on a layer. When a finger is touching down on Rectangle, it outputs ✓ in the Down port.

交互模块在图层的查看器上输出关于触摸的信息。当手指按下选择的图层时，在down端口输出 ✓。

… to patches that manage states:

管理状态的模块：

![](./../../static/img/docs/Patch%20Editor/patches-3.png)



The [Switch](./../Utility/Switch.md)  patch can be turned on or off by the inputs on the left, and outputs the current state on the right.

[Switch](./../Utility/Switch.md) 开关模块可以通过左边的输入端口设置打开或关闭，右边输出当前开关状态。

… to patches that control layer properties:

控制图层属性的模块：

![](./../../static/img/docs/Patch%20Editor/patches-4.png)

Add layer property patches by clicking on any property in the Layer inspector. This patch controls if a layer named Rectangle is shown/hidden.

点击图层检查器中的任何属性添加图层属性模块。这个模块控制一个矩形图层是否显示/隐藏。

# Ports 端口

Ports allow patches to receive information in and pass information back out. The ports on the left side of a patch are inputs, and the ones on the right are outputs. Edit Inputsby clicking the port’s value(unless a cable from another patch is connected to the Input already).

端口允许模块接收信息并返回信息。模块左边的端口为输入端口，右边的端口为输出端口。通过单击端口的值编辑(如果另一个模块的连线已经连接到输入端口，将不能编辑)。

Each port has a different type of information it can receive — the important types of values used in Origami are:

每个端口都有它可以接收的不同类型的信息——Origami 中使用的常用值类型包括：

- Number: An integer or decimal.
- Boolean: A boolean value, which can have two possible values (ex: true/false, yes/no, on/off, 0/1). Boolean ports are often labeled On/Off, and the On value is represented with a checkmark. Similar to programming, a boolean can be converted to a number 0 (off) or 1 (on) when passing values between patches.
- **Text:** Any text string.
- **Image:** Any image that you drag or paste.
- **Video:** Any video that you drag or paste.
- **Sound:** Any sound that you drag or paste.
- **Color:** Any RGB or HSL color.
- **IndeX:** Any non-negative, integer (ex: 0, 1, 2)
- **JSON Data:** Any number of values of any type in JSON format. JSON (JavaScript Object Notation) is a common format for storing and exchanging data.
- **Point:** A value that represents numbers in 2D, 3D, or 4D. Points can represent any set of X, Y, Z values (ex: Position X, Y, Z; Rotation X, Y, Z).
- **值：**整数或小数。
- **布尔值：**一个布尔值，可以有两个可能的值（例如：真/假、是/否、开/关、0/1）。布尔值的端口通常标记为 开/关，并且 打开 时用复选框的标记表示。与编程类似，在模块之间传递值时，布尔值可以转换为数字 0（关闭）或 1（打开）
- **文本：**任何文本字符串。
- **图像：**您拖动或粘贴的图像。
- **视频：**您拖动或粘贴的视频。
- **声音：**您拖动或粘贴的声音。
- **颜色：**任何RGB或HSL颜色。
- **索引：**任何非负整数（例如：0、1、2）
- **JSON数据：**JSON 格式的任意类型和数量的值。JSON（JavaScript Object Notation）是一种用于存储和交换数据的通用格式。
- **Point：**表示2D、3D或4D的数值。点可以表示任意一组 X, Y, Z 值(例如:位置 X, Y, Z; 旋转 X, Y, Z)。

Some patches can change the number of ports it has or the type of value it supports. Right-click any patch to see the options available.

一些模块可以更改它的端口数量或它支持的值的类型。右键单击任意模块可查看可用的选项。

# Cables 连线

Cables pass information (values) from patch to patch via their ports. Think of values like water, and cables as the pipes that move it from place to place. The values flow in one direction: left-to-right from an output to an input.

连线通过端口将信息(值)从一个模块传递到另一个模块。把信息(值)想象成水，把连线看作是把它从一个地方连接到另一个地方的管道。这些信息(值)按照特定的方向流动: 从输出到输入，从左到右。

To create a cable, drag from an output port (on the right of a patch) to an input port (on the left of a patch). To disconnect a cable, drag the right end out of the Input port.

要创建连线，可以从输出端口（在模块的右侧）拖动到输入端口（在模块的左侧）。若要断开连线，请将右侧的连线拖出输入端口。

An output port may connect to multiple cables, but an input port can only accept one cable at a time. Use patches like math (+, -, x, /), logic (Or, And, Not), Transition, or Option Picker to combine or select from multiple cables. Quickly connect an output to multiple inputs by selecting the output, and shift-clicking the inputs you want to connect.

一个输出端口可以连接多根连线，但一个输入端口一次只能接收一根连线。使用一些模块如 数学 (+， -， x， /)， 逻辑 (或, 与, 非)， 转换，或 选项选择器 这些组合可以选择多根连线。通过选择输出，并按下 shift 键单击要连接的输入，可以快速将一个输出连接到多个输入。

# Connecting them together 连接在一起

In the example below, three different patches pass values to each other with cables that are connected to their ports. Together, the patches describe a touch down interaction that switches a layer on and off.

在下面的例子中，三个不同的模块通过连接到各自端口的连线相互传递值。这些模块组合在一起表示了一种打开和关闭图层的交互。

![](./../../static/img/docs/Patch%20Editor/patches-5.png)



------

# Summary 总结

- Patches let you quickly add interaction, animation, and behavior to your prototype.
- A patch can have inputs and outputs that let it communicate with other patches.
- There is a large library to support building any idea. For most prototypes, you only need to know about 15-20.
- Learn [keyboard shorcuts]  to speed up your workflow.
- 模块可以让你在原型中快速添加交互，动画和行为。
- 一个模块有输入和输出端口，可以与其他模块进行通信。
- 一个大的模块库帮助你快速实现想法，大多数原型只需要用到 15-20 个。
- 学习 [键盘快捷键](./../Workflow/Keyboard%20Shortcuts.md) 节省你的工作时间。
