---
sidebar_position: 3
---

# Quick Interactions 快捷交互

Quick Interactions are a faster way to create flows between screens in the Origami [Canvas].

快捷交互是在 Origami 画布中创建屏幕转场的一种更快的方式。

------

# Presenting Screens 显示屏幕

To create a Quick Interaction, click on the Quick Interaction icon in the toolbar and then click on the layer you’d like to trigger the Interaction from to the arboard you’d like to present. You can also Ctrl + Drag from the layer to the artboard.

要创建快捷交互，请单击工具栏中的“快捷交互”图标，然后单击要触发交互的图层和要显示的画板。也可以按住 ### Ctrl +键将其从图层拖动到画板。

![](https://origami.design/public/images/documentation/quick_interaction_icon.png)

Presenting and dismissing will use the corresponding transition styles of whichever device platform you have selected in the Devices dropdown in the Origami toolbar. So an iPhone will use the iOS presentation and dismiss transitions while a Pixel will use the Material presentation and dismiss transitions.

显示和关闭将使用您在工具栏中的“设备”下拉菜单中选择的设备对应的过渡样式，所以iPhone会使用iOS的过渡样式，而Pixel会使用Material的样式。

![](https://origami.design/public/images/documentation/quick_interactions_present@2x.png)

Presenting screens with Quick Interations

用快捷交互显示屏幕

Trigger a present transition using a Tap, Double Tap or Long Press interaction. You can change the presentation transition type from Push, Modal or None in the Inspector panel on the right hand side of Origami.

使用轻按、双击或长按交互来触发当前的过渡。您可以在Origami右侧的检查器面板中，选择Push、Modal或None来更改过渡类型。

- **Push** Default iOS transition, will slide in the next screen being presented from right to left
- **Modal** Will transition in the next screen from the bottom up
- **None** Will present the next screen immediately with no transition.
- **推动** 默认iOS过渡，下一个屏幕将从右向左显示
- **模态** 下一个屏幕将从下向上过渡
- **无** 下一个屏幕没有过渡立即出现。

# Dismissing Screens 关闭屏幕

To dismiss a screen, drag from the layer you’d like to add the interaction to the containing Artboard. This will dismiss that screen and return back to the Artboard you presented from.

要关闭屏幕，请拖动添加交互的图层到其所包含的画板。 这将关闭该屏幕并返回到您需要展示的画板。

![](https://origami.design/public/images/documentation/quick_interactions_dismiss@2x.png)

Dismissing screens with Quick Interations

关闭屏幕的快捷交互

# Quick Interactions & Patch Editor 快捷交互&模块编辑器

Creating a Quick Interaction will automatically generate a corresponding patch in the Patch Editor.

创建快捷交互将自动在模块编辑器中生成相应的交互模块。

![](./../../../static/img/docs/Canvas/quick-interactions-1.png)

*When creating multiple Quick Interactions, Origami will often stack the automatically generated patches on top of each other so double check that if you’re not seeing them show up in the Patch Editor.*

当创建多个快捷交互时，Origami通常会将自动生成的模块堆叠在彼此的顶部，如果你没有在模块编辑器中看到它们，请仔细检查。

------

# Summary 总结

- Use the Quick Interaction feature to create transitions between screens in your prototypes.
- 使用快捷交互功能在原型中创建屏幕之间的转场。
