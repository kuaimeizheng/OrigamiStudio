---
title: Quick Interactions 快捷交互
sidebar_position: 15
last_update:
  author: 蒯美政
---

# Quick Interactions 快捷交互

快捷交互是在 Origami 画布中创建屏幕转场的一种更快的方式。

---

## Presenting Screens 显示屏幕

要创建快捷交互，请单击工具栏中的“快捷交互”图标，然后单击要触发交互的图层和要显示的画板。也可以按住 ### Ctrl +键将其从图层拖动到画板。

![](https://origami.design/public/images/documentation/quick_interaction_icon.png)

显示和关闭将使用您在工具栏中的“设备”下拉菜单中选择的设备对应的过渡样式，所以 iPhone 会使用 iOS 的过渡样式，而 Pixel 会使用 Material 的样式。

![](https://origami.design/public/images/documentation/quick_interactions_present@2x.png)

用快捷交互显示屏幕

使用轻按、双击或长按交互来触发当前的过渡。您可以在 Origami 右侧的检查器面板中，选择 Push、Modal 或 None 来更改过渡类型。

- **Push 推动** 默认 iOS 过渡，下一个屏幕将从右向左显示
- **Modal 模态** 下一个屏幕将从下向上过渡
- **None 无** 下一个屏幕没有过渡立即出现。

## Dismissing Screens 关闭屏幕

要关闭屏幕，请拖动添加交互的图层到其所包含的画板。 这将关闭该屏幕并返回到您需要展示的画板。

![](https://origami.design/public/images/documentation/quick_interactions_dismiss@2x.png)

关闭屏幕的快捷交互

## Quick Interactions & Patch Editor 快捷交互&模块编辑器

创建快捷交互将自动在模块编辑器中生成相应的交互模块。

![](./../../../static/img/docs/Canvas/quick-interactions-1.png)

当创建多个快捷交互时，Origami 通常会将自动生成的模块堆叠在彼此的顶部，如果你没有在模块编辑器中看到它们，请仔细检查。

---

## Summary 总结

- 使用快捷交互功能在原型中创建屏幕之间的转场。
