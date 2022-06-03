---
sidebar_position: 1
---

# Loop 循环

Loops are a powerful feature for easily building dynamic repeating UI and interactions in Origami, such as a list or a grid of photos. So instead of manually copying and pasting a Layer five times, we would connect our Layer to a Loop patch by any of it’s properties in the Patch Editor with a Count Input of five. If you’re coming from a programming background Loops behave similarly to Arrays or a for statement. Loops are a great way to reduce complexity and repetition in your prototype.

循环是一个强大的功能，可以在 Origami 中轻松创建动态以及重复设计和交互，例如列表或照片网格。因此，我们无需手动复制和粘贴图层五次，而是通过模块编辑器中的相应属性将图层连接到循环模块，计数端口输入为 5。如果你有编程知识，循环的行为类似于数组 for 语句。循环主要是为了减少原型的复杂性和重复性。

Loops are especially powerful when combined with [Layout](../Canvas/Layout) in the Canvas. By default looped layers will stack on top of each other on the Canvas, but when added to a [Layout-enabled Group](../Layer/Group) the looped layers will automatically be arranged based on the Layout settings on the Group, such as a vertical list or a grid.

循环与画布中的布局结合使用时，循环尤其强大。默认情况下，循环图层会在画布上相互堆叠，但当添加到启用布局的组时，循环图层将根据组的布局设置进行排列，例如垂直列表或网格。

We can also use Loops to generate repeating Layers or Components from real dynamic data sources, for example we could create a list of daily [weather forecasts](https://origami.design/examples/weather-forecast.html) from a weather API using the [Network Request](../Data/Network%20Request) patch. Check out the Prototyping with [Data tutorial](https://origami.design/tutorials/smarter-interactions/Prototyping-with-Data.html) for an example of how to do this. Thinking in Loops can be helpful when handing-off a prototype to an engineer to get built since they translate more closely to how the design will be implemented in code.

我们还可以使用循环从真实的动态数据源生成重复的图层或组件，例如，我们可以使用网络请求模块从天气 API 创建每日天气预报列表。关于如何做这个，请请查看[Data tutorial 使用数据制作原型教程](https://origami.design/tutorials/smarter-interactions/Prototyping-with-Data.html)。在将原型交给工程师进行开发时，循环思维很有帮助，因为更接近于如何用代码实现设计。

# Creating Loops 创建循环

Loop patches in Origami are all colored green and any patches that get connected to a Loop patch will have a green tinted connection cable. Any time you see patches connected with a green connection cable, that connected patch graph is being evaluated for each item in the loop. Loops can be created using the Loop, Loop Builder and Loop Over Array patches.

Origami 中的循环模块都是绿色的，任何连接到循环的模块都将有一条绿色的连接线。每当您看到通过绿色连接线连接的模块时，都会为循环中的每个项目评估连接的模块图。可以使用 Loop循环、Loop Builder 循环生成器 和 Loop Over Array 循环数组 模块创建循环。

https://origami.design/public/images/videos/loop_connections.mp4

### ### Loop Patch 循环模块### 

The simplest loop in Origami is created using the Loop patch, this will output a loop counting up to the number of items in the Count input. Loops in Origami are Zero-Indexed, which means they start counting from 0, so a Loop with a Count of 5 will be “0, 1, 2, 3, 4“.

Origami 中最简单的循环是使用循环模块创建的，这将在Count计数端口输出一个循环的项目数量。 Origami 中的循环是从零开始索引的，这表示它们从 0 开始计数，因此计数为 5 的话，循环将是“0、1、2、3、4”。

We can easily see the value of each item in our loop by clicking on the output of the Loop patch. Hovering over each item in the loop popover will show how the connected patch graph is evaluated for each item in the loop.

You’ll see below when we hover through each item in the loop popover the number in the property patch changes to reflect the patch graph at each instance of the loop.

通过单击循环模块的输出端口，我们可以查看循环中每个项目的值。

将鼠标悬停在循环弹窗中的每个项目上，将显示循环中的每个选项是怎么为连接的模块计算的。

当我们将鼠标悬停在循环中的每个项目上时，您将看到下面属性模块中的数字会发生变化，这会影响到循环中每个实例模块。

https://origami.design/public/images/videos/loop_patch.mp4

### ### Loop Builder Patch 循环生成器模块### 

Another way to create a loop is with the Loop Builder patch. This patch allows more control over what value you’d like each item in your loop to be. By default this will a loop of numbers but we can change the [type](../Patch%20Editor/Patches) by clicking on the patch header and selecting a different type. For example we could create a loop of colors as seen below or a loop of On/Off boolean values.

创建循环的另一种方法是使用 Loop Builder 循环生成器 模块。此模块允许您更方便地控制环中每个项目的值。默认情况下，这是一个数字循环，但我们可以通过单击模块标题，并选择其他类型来更改类型。例如，我们可以创建如下所示的颜色循环或 On/Off 布尔值循环。

https://origami.design/public/images/videos/loop_builder.mp4

Note: If you’re only seeing one layer show up on the Canvas and in the Viewer, make sure your Layer is a child of a [Layout-enabled](../Canvas/Layout) group.

注意：如果您在画布和查看器中只看到一个图层，请确保您的图层是一个启用了布局的组的子图层。

### ### Loops and Layout 循环和布局### 

Layout lets you control how looped layers are arranged on the canvas. Make your looped layer a child of a [Layout-enabled](../Canvas/Layout) Group and change the Group Layout properties in the Inspector.

布局可以让你控制如何在画布上排列循环图层。使循环图层成为启用布局的组的子级，并在检查器中更改组布局的属性。

https://origami.design/public/images/videos/loop_builder.mp4

### ### Looping Components 循环组件### 

Using loops with Components allows us to specify what point in the layer hierarchy we want our loop to repeat. For example if we were creating a list of contacts from a loop of names, and we passed the names loop to the Text Layer, it would create multiple Text Layers for each name.

使用循环组件允许我们设置循环重复的是图层层次结构中的哪个属性点。例如，如果我们正在创建来自一组名称循环的联系人列表，并且我们将名称循环传递给文本图层，它将为每个名称创建多个文本图层。

However, if we were to group our contact list cell into a component while maintaining the connecting between the loop of names and the text layer inside the component, it would create multiple instances of the list cell while still passing the name to the text layer inside as shown in the example below.

但是，如果我们要将联系人列表单元整理到组件，同时保持组件中的 名称循环 和 文本图层 之间的连接，它将创建列表单元的多个实例，同时仍将名称传递给内部文本层，如下面的示例所示。

https://origami.design/public/images/videos/group_into_component.mp4

# Loops and Data 循环和数据

Loops can also be created from Arrays by using the [Loop Over Array](../Loops/Loop%20Over%20Array) patch. This is useful when working with a web API data source with using the [Network Request](../Data/Network%20Request) patch.

循环也可以通过使用 Loop Over Array 数组遍历 模块从数组中创建。这一般用于使用网络请求模块处理web API数据源。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c8abd7a-5598-47a2-aa16-7b1734489770/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T041444Z&X-Amz-Expires=86400&X-Amz-Signature=c33f8e5d4bf6e238fe8e4416a226cca0688639c66981a762b89d862958d26be1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Nested arrays to Loops of Loops 嵌套数组到循环的循环

# Multiple Loops 多个循环

Often when building more complex prototypes there will be cases where you’ll want to use loops inside other loops. For example a newsfeed prototype could have a loop of posts and within each post there could be a carousel of images loop and a Facepile of reactions loop, creating a loop of loops.

通常在构建更复杂的原型时，会出现需要在其他循环中使用循环的情况。例如，一个新闻流原型可能会有一个帖子循环，并且在每个帖子中有一个轮播图的图像循环和响应Facepile(头像)循环，这就是一个循环中的循环。

https://origami.design/public/images/videos/multiple_loops.mp4

When we combine loops together by connecting multiple loops to multiple properties of a layer, Origami will try to interleave or “zipper” the loops together as seen in the video above. This has some helpful use cases but often what we want is to have one loop create multiple of the other loop, the way we can do that is by using Components. When we create a Component in Origami, the Component Info popover lets us decide what behavior we want connected loops to have on the component.

当我们通过将多个循环连接到图层的多个属性来组合在一起时，Origami 将尝试在上面的视频中看到的嵌套或“封装”循环。一些常用的做法，就是通常我们想要的是有一个循环创建多个其他循环，我们可以通过组件来实现这一点。当我们在 Origami 中创建一个组件时，组件信息弹窗允许我们设置连接的循环在组件上有什么特性。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/657c4342-9536-465e-b453-e06824bab8a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040304Z&X-Amz-Expires=86400&X-Amz-Signature=bc3c058370b67030fc6c1d434b934391d4160196fa969861f3f74aed6c875035&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### ### Loop Behavior 循环特性

*Pass into Component* - Makes the loop available inside the component by passing it through without looping the component. Passing in (Default in Origami Version 81 and older)

传递组件——通过传递循环而不是循环组件，使循环限制在组件内部。(默认值为Origami版本81及以上)

*Loop the Component* - The component will be evaluated for each item in the loop passing the item into the component. (Default in Origami Version 82 and newer)

循环组件——将计算循环中的每个项目，并将项目传递到组件。（默认值为Origami Version 82及更新版本)

To create a loop that loops another loop, one of the component inputs loop behavior needs to be set to “Loop the Component” and another needs to be set to “Pass into Component”.

The loop passed to the “Loop the Component” will create multiple instances of the component and the loop passed to “Pass into Component” can be looped independently inside each of the component instances as shown below.

要创建循环另一个循环的循环，则需要将其中一个组件输入循环特性设置为“Loop the Component 循环组件”，另一个需要将其设置为“Pass into Component 传入组件”。

传递给“Loop the Component 循环组件”的循环将创建多个组件实例，传递给“Pass into Component  传递组件”的循环可以在每个组件实例内独立循环，如下所示。

https://origami.design/public/images/videos/loop_of_loops.mp4

### ### Nested arrays to Loops of Loops 嵌套数组到循环的循环

Another way of building looped components is using the [Loop Over Array](../Loops/Loop%20Over%20Array) patch with a nested array. This is useful for working with data from a web API that includes multidimensional arrays.

构建循环组件的另一种方法是使用带有嵌套数组的Loop Over Array数组遍历模块。这一般用于处理包含多维数组的web API的数据。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6e21fb70-caba-4ba5-88b9-e44a63bd58a9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040332Z&X-Amz-Expires=86400&X-Amz-Signature=53b709e85b48644bfc23950ead5912c26f18d56d49eae4ad8bfebe90e48be664&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Nested arrays to Loops of Loops

嵌套数组到循环的循环

### ### Looped Component Outputs 循环组件输出

An important caveat about Looped Components is that components cannot *output* a loop of loops. Outputs from looped components are appended to one another into a flat loop.

An example of this is adding a tap Output to the Looped Component shown earlier this would output a flattened loop of 25 pulse outputs since 5 x 5 is 25.

关于循环组件需要注意食物是，组件不能输出循环的循环组。来自循环组件的输出被一个接一个地输出到一个扁平循环中。

比如在之前的循环组件中添加一个点击输出，这将输出一个包含25个脉冲输出的扁平循环，因为5 x 5等于25。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/720564a9-8ba6-4e96-b524-f0d4e7d7a951/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040354Z&X-Amz-Expires=86400&X-Amz-Signature=a39817b35418f8967672f1c338b7c9f9915722e438fb423520c5105b83ee0fd6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Looped Component Outputs 循环组件输出

### ### Manipulating Loops 操作循环

[Loop Filter](../Loops/Loop%20Filter) and [Loop Select](../Loops/Loop%20Select) are the two patches for selecting items from a loop, useful for working with the [Loop Option Switch](../Loop/Loop%20Option%20Switch) for getting the selected item in a loop.

Loop Filter 循环筛选 和 Loop Select 循环选择 是用于从循环中选择项目的两个模块，一般用于在使用Loop Option Switch 循环选项开关 在循环中获取所选项目。

### ### Loops & Interactions 循环&交互### 

When we add an [Interaction](.../Interaction/Interaction) patch to a looper layer, the Interactions output will then be looped as well. Using the [Loop Option Switch](../Loop/Loop%20Option%20Switch) patch with the [Loop Select](../Loops/Loop%20Select) patch we can get the value of the tapped on item

当我们向循环图层添加一个交互模块时，交互输出也将被循环。通过使用Loop Option Switch 循环选项开关 模块和 Loop Select 循环选择模块，我们可以得到项目上被选中的值

https://origami.design/public/images/videos/loop_interactions.mp4

# Summary 总结

- Loops are a powerful feature for creating dynamic repeating UI and interactions in Origami
- Use Layout to control how looped Layers and Components are arranged on the Canvas
- Use Components to define what Group in the layer hierarchy should be repeated
- Use Components when you want to build loops of loops
- Loop behavior for Components is defined in the Component Info popover for each port. *Pass into Component* passes the loop into the component without looping the component and *Loop the Component* will loop the component passing in each item from the loop.
- Interactions on a looped layer will have their outputs looped as well.
- 循环是在Origami中创建动态重复UI和交互的一个非常强大的功能。
- 使用布局来控制如何排列画布上的循环图层和组件。
- 使用组件来设置图层层次结构中应重复的组。
- 使用组件来构建嵌套循环。
- 组件的循环特性在每个端口的组件信息弹窗中定义。*Pass into Component传入组件* 把循环传递给组件，而不是让组件循环。
- 循环图层的交互也将循环输出。
