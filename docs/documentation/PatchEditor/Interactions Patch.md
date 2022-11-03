---
title: Interactions Patch 交互模块
sidebar_position: 20
last_update:
  author: 蒯美政
---

# Interactions Patch 交互模块

交互模块在查看器中输出有关用户交互（触摸、滑动、按键）的信息。

将鼠标悬停在图层上并按下 Touch 触摸 按钮或在模块库中搜索来添加交互。

---

## Interaction patches 交互模块

- [Interaction 交互](./../Interaction/Interaction.md) 最基础的交互。可以告诉你用户什么时候触碰或点击了指定的图层。

  它还提供了触摸区域在其父组中的位置，以及使用支持 3D 触摸的笔记本电脑、手机或平板电脑时的触控力度。

- [Scroll 滚动](./../Interaction/Scroll.md) 另一个常见的交互。可以垂直或水平滚动一个图层，并支持自定义的物理特性。

  还可以将其设置为分页模式，可以快速制作出轮播图的交互设计。

- [Pop Switch 流行开关](./../Interaction/Pop%20Switch.md) 可以帮助你快速切换原型中两种状态的可滑动的交互(例如:向左或向右滑动卡片)。除了滑动外，它还支持双指捏合。

- [Long Press 长按](./../Interaction/Long%20Press.md) and [双击](./../Interaction/Double%20Tap.md) 长按和双点击捕获长按和双点击时，连接到一个互动模块。

- [Drag 拖拽](./../Interaction/Double%20Tap.md) 使任何图层都可以拖动。

- [Keyboard 键盘](./../Interaction/Keyboard.md) 每当在查看器中按下一个键时显示。

- [Hover 悬停](./../Interaction/Hover.md) 允许你捕捉鼠标悬停交互。

## Notes on touch detection 触摸检测注意事项

需要启用图层，并且不透明度大于 0 才能接收触摸交互。图层组中的触摸交互会与父组共享，允许你建立内部带有可点击图层的滚动图层组。

---

## Summary 总结

- 交互模块传递有关用户的交互信息。
- 可以使用触摸菜单中的选项设置特定图层的交互。
- 有多种类型的交互模块用于设置不同类型的交互。
