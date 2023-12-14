---
title: Loop 循环
sidebar_position: 15
last_update:
  author: 蒯美政
---

# Loop 循环

---

循环是一个强大的功能，可以在 Origami 中轻松创建动态以及重复设计和交互，例如列表或照片网格。

因此，我们无需手动复制和粘贴图层五次，而是通过模块编辑器中的相应属性将图层连接到循环模块，计数端口输入为 5。

如果你有编程知识，循环的行为类似于数组 for 语句。循环主要是为了减少原型的复杂性和重复性。

循环与画布中的[Layout 布局](./../Canvas/Layout.md)结合使用时，循环尤其强大。

默认情况下，循环图层会在画布上相互堆叠，但当添加到[Layout-enabled Group 启用布局组](./../Layer/Group.md)时，循环图层将根据组的布局设置进行排列，例如垂直列表或网格。

我们还可以使用循环从真实的动态数据源生成重复的图层或组件，例如，我们可以使用[Network Request 网络请求](./../Data/Network%20Request.md)模块从天气 API 创建每日[weather forecasts 天气预报](https://origami.design/examples/weather-forecast.html)列表。

关于如何做这个，请请查看[Data tutorial 使用数据制作原型教程](https://origami.design/tutorials/smarter-interactions/Prototyping-with-Data.html)。在将原型交给工程师进行开发时，循环思维很有帮助，因为更接近于如何用代码实现设计。

## Creating Loops 创建循环

Origami 中的循环模块都是绿色的，任何连接到循环的模块都将有一条绿色的连接线。

每当您看到通过绿色连接线连接的模块时，都会为循环中的每个项目评估连接的模块图。

可以使用 Loop 循环、Loop Builder 循环生成器 和 Loop Over Array 循环数组 模块创建循环。

https://origami.design/public/images/videos/loop_connections.mp4

### Loop Patch 循环模块

Origami 中最简单的循环是使用循环模块创建的，这将在 Count 计数端口输出一个循环的项目数量。

Origami 中的循环是从零开始索引的，这表示它们从 0 开始计数，因此计数为 5 的话，循环将是“0、1、2、3、4”。

通过单击循环模块的输出端口，我们可以查看循环中每个项目的值。

将鼠标悬停在循环弹窗中的每个项目上，将显示循环中的每个选项是怎么为连接的模块计算的。

当我们将鼠标悬停在循环中的每个项目上时，您将看到下面属性模块中的数字会发生变化，这会影响到循环中每个实例模块。

https://origami.design/public/images/videos/loop_patch.mp4

### Loop Builder Patch 循环生成器模块

创建循环的另一种方法是使用 Loop Builder 循环生成器 模块。此模块允许您更方便地控制环中每个项目的值。

默认情况下，这是一个数字循环，但我们可以通过单击模块标题，并选择其他类型来更改[type 类型](./../PatchEditor/States.md)。例如，我们可以创建如下所示的颜色循环或 On/Off 布尔值循环。

https://origami.design/public/images/videos/loop_builder.mp4

Note: If you’re only seeing one layer show up on the Canvas and in the Viewer, make sure your Layer is a child of a [Layout-enabled](./../Canvas/Layout.md) group.

注意：如果您在画布和查看器中只看到一个图层，请确保您的图层是一个[Layout-enabled 启用布局](./../Canvas/Layout.md)组的子图层。

### Loops and Layout 循环和布局

Layout lets you control how looped layers are arranged on the canvas. Make your looped layer a child of a [Layout-enabled](./../Canvas/Layout.md) Group and change the Group Layout properties in the Inspector.

布局可以让你控制如何在画布上排列循环图层。使循环图层成为[Layout-enabled 启用布局](./../Canvas/Layout.md)的组的子级，并在检查器中更改组布局的属性。

https://origami.design/public/images/videos/loop_builder.mp4

### Looping Components 循环组件

使用循环组件允许我们设置循环重复的是图层层次结构中的哪个属性点。

例如，如果我们正在创建来自一组名称循环的联系人列表，并且我们将名称循环传递给文本图层，它将为每个名称创建多个文本图层。

但是，如果我们要将联系人列表单元整理到组件，同时保持组件中的 名称循环 和 文本图层 之间的连接，它将创建列表单元的多个实例，同时仍将名称传递给内部文本层，如下面的示例所示。

https://origami.design/public/images/videos/group_into_component.mp4

## Loops and Data 循环和数据

循环也可以通过使用 [Loop Over Array 数组遍历](./../Loops/Loop%20Over%20Array.md)模块从数组中创建。这一般用于使用[Network Request 网络请求](./../Data/Network%20Request.md)模块处理 web API 数据源。

![Image](@site/static/img/docs/Concepts/loop-1.png)

Nested arrays to Loops of Loops 嵌套数组到循环的循环

## Multiple Loops 多个循环

通常在构建更复杂的原型时，会出现需要在其他循环中使用循环的情况。

例如，一个新闻流原型可能会有一个帖子循环，并且在每个帖子中有一个轮播图的图像循环和响应 Facepile(头像)循环，这就是一个循环中的循环。

https://origami.design/public/images/videos/multiple_loops.mp4

当我们通过将多个循环连接到图层的多个属性来组合在一起时，Origami 将尝试在上面的视频中看到的嵌套或“封装”循环。

一些常用的做法，就是通常我们想要的是有一个循环创建多个其他循环，我们可以通过组件来实现这一点。

当我们在 Origami 中创建一个组件时，组件信息弹窗允许我们设置连接的循环在组件上有什么特性。

![Image](@site/static/img/docs/Concepts/loop-2.png)

### Loop Behavior 循环特性

_Pass into Component_ 传递组件——通过传递循环而不是循环组件，使循环限制在组件内部。(默认值为 Origami 版本 81 及以上)

_Loop the Component_ 循环组件——将计算循环中的每个项目，并将项目传递到组件。（默认值为 Origami Version 82 及更新版本)

要创建循环另一个循环的循环，则需要将其中一个组件输入循环特性设置为“Loop the Component 循环组件”，另一个需要将其设置为“Pass into Component 传入组件”。

传递给“Loop the Component 循环组件”的循环将创建多个组件实例，传递给“Pass into Component 传递组件”的循环可以在每个组件实例内独立循环，如下所示。

https://origami.design/public/images/videos/loop_of_loops.mp4

### Nested arrays to Loops of Loops 嵌套数组到循环的循环

构建循环组件的另一种方法是使用带有嵌套数组的 [Loop Over Array 数组遍历](./../Loops/Loop%20Over%20Array.md) 模块。这一般用于处理包含多维数组的 web API 的数据。

![Image](@site/static/img/docs/Concepts/loop-3.png)

Nested arrays to Loops of Loops

嵌套数组到循环的循环

### Looped Component Outputs 循环组件输出

关于循环组件需要注意食物是，组件不能输出循环的循环组。来自循环组件的输出被一个接一个地输出到一个扁平循环中。

比如在之前的循环组件中添加一个点击输出，这将输出一个包含 25 个脉冲输出的扁平循环，因为 5 x 5 等于 25。

![Image](@site/static/img/docs/Concepts/loop-4.png)

Looped Component Outputs 循环组件输出

### Manipulating Loops 操作循环

[Loop Filter](./../Loops/Loop%20Filter.md) and [Loop Select](./../Loops/Loop%20Select.md) are the two patches for selecting items from a loop, useful for working with the [Loop Option Switch](./../Loops/Loop%20Option%20Switch.md) for getting the selected item in a loop.

[Loop Filter 循环筛选](./../Loops/Loop%20Filter.md) 和 [Loop Select 循环选择](./../Loops/Loop%20Select.md)是用于从循环中选择项目的两个模块，一般用于在使用 [Loop Option Switch 循环选项开关](./../Loops/Loop%20Option%20Switch.md) 在循环中获取所选项目。

### Loops & Interactions 循环&交互

当我们向循环图层添加一个交互模块时，交互输出也将被循环。通过使用 [Loop Option Switch 循环选项开关](./../Loops/Loop%20Option%20Switch.md)模块和  [Loop Select 循环选择](./../Loops/Loop%20Select.md)模块，我们可以得到项目上被选中的值

https://origami.design/public/images/videos/loop_interactions.mp4

## Summary 总结

- 循环是在 Origami 中创建动态重复 UI 和交互的一个非常强大的功能。
- 使用布局来控制如何排列画布上的循环图层和组件。
- 使用组件来设置图层层次结构中应重复的组。
- 使用组件来构建嵌套循环。
- 组件的循环特性在每个端口的组件信息弹窗中定义。_Pass into Component 传入组件_ 把循环传递给组件，而不是让组件循环。
- 循环图层的交互也将循环输出。
