---
sidebar_position: 2
---

# Switch 开关

Remember state (on or off). Switch patches are like light switches. They can be off or on and are useful when building simple two-state interactions (showing and hiding comments in a popover, for example).

记住 On 或 Off 两个状态。Switch 模块跟灯的开关一样。开关可以被打开或关闭，用于需要在两个状态之间切换（如，隐藏或显示评论。）

The Switch patch’s Flip port is useful when one interaction type is used to control the switch. For example, if repeatedly tapping a photo zooms it between a large and small size, the Switch patch can be used to hold the current zoom state (in or out). Simply connect the Switch patch’s Flip input port to the Tap output of the photo’s Interaction patch.

用来控制 Switch 模块的交互模块连接到 Flip 接口。例如点击图片放大或缩小，Switch 模块可以保持缩放的两个状态（进或出）。将图片图层的 Interaction 模块的 Tap 输出口连接到 Switch 模块的 Flip 输入口就可以实现。

The Switch patch’s On and Off ports are useful when different types of interactions control the switch. For example, in a compose window, a Compose button might turn on the switch and the Cancel and Done buttons might turn off the switch.

On 和 Off 接口用于不同类型的交互控制同一个开关。例如在一个编辑弹窗中，可能编辑按钮打开开关，取消和确定按钮关闭开关。

See [State Basics](./../Patch%20Editor/States.md) for more information.

更多信息请参考 State Basic。

![Image](./../../../static/img/docs/Utility/switch.png)

### Flip 反转

A pulse that flips the state of the switch (from on to off, or vice versa).

翻转开关状态的脉冲（开、关之间循环切换）。一般连接交互模块。

### Turn On 打开

A pulse that turns the switch on. If the switch is already on, the pulse has no effect.

打开开关的脉冲。如果开关已经是打开状态则无效。一般连接交互模块。

### Turn Off 关闭

A pulse that turns the switch off. If the switch is already off, the pulse has no effect.

关闭开关的脉冲。如果开关已经是关闭状态则无效。一般连接交互模块。

### On / Off 输出

A boolean that is true if the switch is on.

开关打开时布尔值为真。一般连接到动画模块。

------

### Related Patches 相关模块
