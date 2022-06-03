---
sidebar_position: 2
---

# Layout 布局

Layout is a dynamic system of constraints that controls the way your design elements are placed to create adaptive layouts. Designs automatically respond to any changes, making it faster to create & iterate on your work. Those coming from the web can think of it similarly to Flexbox.

布局是一个动态的约束系统，它控制设计元素的放置方式，以创建自适应的布局。设计自动响应任何变化，使它更快地创建和迭代您的工作。类似于网页开发中的Flexbox。

In order to use Layout, you have to enable it on Artboards and Group layers. Any objects within that group will get new Layout-related properties.

要使用布局，你必须在画板和图层组上启用它。该组中的任何对象都将获得与布局相关的新属性。

------

# Position 位置

Position determines where an object is in relation to other objects in the group. Position applies to any layer that has a parent group with Layout enabled. When setting Position, there are two parameters to choose from: ### Relativeand ### Absolute### .

位置决定了一个对象与组中其他对象的关系。位置应用于任何启用布局的父组中的图层。在设置位置时，有两个参数可供选择:相对位置和绝对位置。

- ### Relativemeans the object will position itself relative to the other objects in its group.
- ### Absolutemeans the object will ignore the other objects in the group and position itself at some X and Y value within the group.
- ### 相对位置就是这个对象会相对于它组中的其他对象来定位自己。
- ### 绝对位置就是对象将忽略组中的其他对象，并将自己定位于组中的某个 X 和 Y 值。

https://origami.design/public/images/videos/layout_position.mp4

# Size 尺寸

Size determines the width and height of an object or group. It applies to any layer that has a parent group with Layout enabled AND any parent group with Layout enabled. When setting ### Size### , there are three parameters to choose from: ### Auto### , ### Grow### , and ### Fixed### .

大小决定了对象或组的宽度和高度。它适用于启用布局的父组和启用布局的父组图层。设置大小时，有三个参数可供选择:自动、增长和固定。

- ### Automeans the parent group will snap to the height/width of the objects inside of it.
- ### Growmeans the object or group will grow to the height/width of its parent group.
- ### Fixedmeans the height/width of the object or group is set to a specific value. In Sketch, Fixed is an option in the dropdown. In Origami, you enter a specific number in the Size input field to make a layer Fixed.
- ### 自动表示父组将捕捉到其内部对象的高度/宽度。
- ### 增长表示对象或组将增长到其父组的高度/宽度。
- ### 固定表示对象或组的高度/宽度被设置为特定值。在 Sketch 中，固定 是下拉菜单中的一个选项。在 Origami 中，在 大小 输入框中输入特定的数字，以固定图层。

https://origami.design/public/images/videos/layout_size.mp4

# Direction 方向

The direction determines how they layers in an AutoLayout group are arranged. When setting ### Direction### , there are three parameters to choose from: ### Horizontal### , ### Vertical### , and ### Grid### .

方向决定了在启用了自动布局的组中图层的排列方式。

设置### 方向### 时，有三个参数可供选择：### 水平### 、### 垂直### 和### 栅格### 。

- ### Horizontalmeans the group’s objects will arrange side-to-side.
- ### Verticalmeans the group’s objects will arrange top-to-bottom.
- ### Gridmeans the group’s objects will arrange horizontally until they reach the maximum width, at which point they will stack in a new row. To set a group’s Direction to Grid, its width must be set to Fixed.
- ### 水平表示群组中的对象将从一边到另一边排列。
- ### 垂直表示群组对象将从上到下排列。
- ### 网格表示群组中的对象将水平排列，直到达到最大宽度，他们将另起一行进行堆叠。要将群组的方向设置为王哥，组的宽度必须设置为固定。

https://origami.design/public/images/videos/layout_direction.mp4

# Alignment 对齐

Alignment determines the anchor point that layers align to. It applies to any parent group that has Layout enabled. Alignment does not change the order the objects are stacked – it only changes their starting point. To change the order they stack, rearrange the layers in your layers list or rearrange the objects on Canvas.

对齐决定了图层对齐的锚点。它适用于任何启用了布局的父组。对齐并不会改变物体的堆叠顺序——它只会改变它们的起始点。要改变它们堆叠的顺序，请在图层列表中重新排列图层或在画布上重新排列对象。

https://origami.design/public/images/videos/layout_alignment.mp4

# Spacing, Padding & Margins 间距，内边距&外边距

These 3 properties determine the separation between, around and outside of layers in a Layout enabled group.

这3个属性决定了在启用布局的组中，图层之间、图层周围和图层外部的间距。

### Spacingapplies to any parent group that has Layout enabled. When setting Spacing, there are 3 parameters to choose from: ### Between### , ### EvenlY, and ### Fixed### .

间距适用于任何启用了布局的父组。设置间距时，有3个参数可供选择:### 平均### ，### 均匀### ，### 固定。

- ### Betweenmeans there will be even space between objects in the group.
- ### Evenlymeans there will be even space between objects in the group AND between objects and the group’s edge.
- ### Fixed (any number value)means the space between objects is set to a specific number. To set a group’s Spacing to Fixed, you enter a number in the Spacing input field.
- ### 平均表示在组中对象之间的间距会是偶数。
- ### 均匀表示组中的对象之间以及对象与组的边缘之间的间距是均匀的。
- ### 固定（任意数值）表示对象之间的间距是一个特定的数字。要将组的间距设置为固定，您需要在 Spacing间距 输入字段中输入一个数字。

### Paddingapplies to any parent group that has Layout enabled. Padding affects the space between the group’s edge and the objects inside of it.

### 内边距适用于任何启用了布局的父组。内边距影响组边缘和组内对象之间的空间。

### 外边距适用于任何启用布局的父组和启用布局的父组中的图层。外边距影响图层边缘与其父组之间的空间。

https://origami.design/public/images/videos/layout_spacing.mp4

# Cap & Baseline 上限&基线

Determines how Origami will vertically measure text bounds.

了解Origami如何测量文本的垂直边界。

- ### EnabledCap & Baseline snaps the text bounds to the cap & base height of the text.
- ### DisabledCap & Baseline snaps the text bounds to the bounding box.
- ### 启用将捕捉文本框中文本的上限和基线的高度。
- ### 禁用将捕捉文本框的边界。

![](https://origami.design/public/images/documentation/cap_and_baseline@2x.png)

Cap & Baseline examples

上限&基线 示例

------

# Summary 总结

- Layout makes it easy to create complex interfaces that respond to their content.
- Enable Layout on Artboards and Group layers from the Layout section in the Inspector panel.
- 布局可以很容易的创建复杂内容的响应界面。
- 在“检查器”面板的“布局”区域启用画板和组图层的布局功能。
