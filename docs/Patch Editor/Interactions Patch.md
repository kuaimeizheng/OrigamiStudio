---
sidebar_position: 2
---

# Interactions Patch 交互模块

Interaction patches output information about user interactions (touches, swipes, key presses) in the viewer. Add interactions by hovering on a layer and pressing the Touch button, or by searching in the Patch Library.

交互模块在查看器中输出有关用户交互（触摸、滑动、按键）的信息。 将鼠标悬停在图层上并按下 Touch触摸 按钮或在模块库中搜索来添加交互。

------

# Interaction patches 交互模块

- [Interaction]This is the bread and butter of interaction in Origami. It can tell you when a user touches down or taps on a particular layer. It also provides the position of the touch within its parent group, and the amount of force applied when using a laptop, phone, or tablet that supports 3D Touch.
- [Scroll]  This is another common interaction in Origami. It lets you scroll a layer vertically or horizontally, with customizable physics. It can be set to Paging mode, which is useful for prototyping carousels.
- [Pop Switch] This helps you quickly prototype a two-state, swipeable interaction (ex: swiping a card left and right). It also supports two-finger pinching in addition to swipes.
- [Long Press] and [Double Tap] Captures long presses and double taps when connected to an Interaction patch.
- [Drag] Make any layer draggable.
- [Keyboard] This shows whenever a key is pressed in the viewer.
- [Hover] Allows you to capture hover interaction with a mouse.
- [交互] 最基础的交互。可以告诉你用户什么时候触碰或点击了指定的图层。它还提供了触摸区域在其父组中的位置，以及使用支持3D触摸的笔记本电脑、手机或平板电脑时的触控力度。
- [滚动] 另一个常见的交互。可以垂直或水平滚动一个图层，并支持自定义的物理特性。还可以将其设置为分页模式，可以快速制作出轮播图的交互设计。
- [流行开关]  可以帮助你快速切换原型中两种状态的可滑动的交互(例如:向左或向右滑动卡片)。除了滑动外，它还支持双指捏合。
- [长按] and [双击] 长按和双点击捕获长按和双点击时，连接到一个互动补丁。
- [拖动] 使任何图层都可以拖动。
- [键盘]  每当在查看器中按下一个键时显示。
- [悬停] 允许你捕捉鼠标悬停交互。

# Notes on touch detection 触摸检测注意事项

Layers need to be enabled and have opacity larger than 0 to receive touches. Touches in Layer Groups are propagated and shared with the parent groups, allowing you to build scrolling layer groups with tappable layers inside.

需要启用图层，并且不透明度大于 0 才能接收触摸交互。图层组中的触摸交互会与父组共享，允许你建立内部带有可点击图层的滚动图层组。

------

# Summary 总结

- Interaction patches pass information about user interactions.
- Interactions for a particular layer can be captured by using the Touch menu.
- There are multiple types of interaction patches for capturing different types of interactions.
- 交互模块传递有关用户的交互信息。
- 可以使用触摸菜单中的选项设置特定图层的交互。
- 有多种类型的交互模块用于设置不同类型的交互。
