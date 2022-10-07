---
sidebar_position: 5
---

# Patch Organization 模块整理

As you start building more complex prototypes in Origami Studio, it’s easy to get lost in the Patch editor. Here are some tips to help organize it and speed up your workflow.

当您开始在 Origami Studio 中构建复杂的原型时，很容易迷失在模块编辑器中。这里有一些技巧可以帮助您整理它们，也可以节省你的时间。

------

# Name your Patches 命名你的模块

Give any patch a custom name by double-clicking the patch title or selecting the patch and pressing ⇧⏎. It’s often helpful to name patches by their effect. For example, if you have a [Switch](../Utility/Switch) responsible for animating a photo between a thumbnail (Off) and full screen (On), you could name the Switch “Photo is Full Screen” to make the effect of the Switch clear at a glance.

通过双击模块标题或选择模块并按  ⇧⏎，为模块输入一个自定义名称。建议根据模块的作用来命名。例如，如果您有一个 [Switch开关](../Utility/Switch) 控制在 缩略图 (Off) 和全屏 (On) 之间过渡的照片动画，您可以将 Switch开关 命名为“Photo is Full Screen 全屏照片”，以使 Switch开关 的效果一目了然。

# Add Comments around Patches 在模块周围添加注释

Use comments to describe what patches in your prototype are responsible for. Add a Comment patch from the patch popover, or select patches and choose  Patch > Comment Around Patches ^⌥C.

使用注释可以来描述原型中的模块的作用。从模块弹窗添加注释模块，或选中模块后选择 Patch 模块 > 模块周围注释 ^⌥C 。

![Image](https://origami.design/public/images/docs/patchOrganization-comments.png)

# Use Wireless Connections for Common Values 使用无线连接管理公用值

[Wireless Broadcaster](../Utility/Variable%20Broadcaster) W and [Wireless Receiver](../Utility/Variable%20Receiver) ⇧W can send values across your document without the use of connections. A Broadcaster will make a value available anywhere in the patch context. A Receiver can receive a value from any Broadcaster.

[Wireless Broadcaster 无线发送器](../Utility/Variable%20Broadcaster) `W`和 [Wireless Receiver 无线接收器](../Utility/Variable%20Receiver) `⇧W` 可以在您的文档中发送值，而无需使用连线。 发送器将在模块中的任何地方发送一个值。接收器可以从任一接收器中接收值。

![](https://origami.design/public/images/docs/patchOrganization-wireless.png)
