---
sidebar_position: 2
---

# Screen 屏幕

A group component with realistic iOS-style push and modal transitions. Add any layer inside the screen.

具有现实iOS式推送和模态转换的组组件。在屏幕内添加任何图层。

Use the Touch button on the component to get information about the screen’s presentation status.

使用组件上的触摸按钮获取有关屏幕的演示状态的信息。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20b00a73-c84b-4645-b3d4-ea6834f6bb80/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190748Z&X-Amz-Expires=86400&X-Amz-Signature=eacbb09344901d9e71d9d79aad302e9cfc514d473ba510703dc3e9dca3ff4834&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Enable 启用

A boolean that is true when the screen is displayed.

一个布尔值，表示在显示屏幕时，布尔值是真。

### Present 出现

A pulse that presents the screen by animating it in.

一个脉冲，表示触发屏幕入场动画。

### Dismiss 消失

A pulse that dismisses the screen by animating it out.

一个脉冲，表示触发屏幕消失动画。

### Transition 过渡

The animation style: Push or Modal.

动画风格：推进或模态。

### Start State 开始状态

The starting position: Dismissed or Presented.

开始位置:消失或出现。

### Edge Swipe 边缘滑动

A boolean that is true when edge-swiping is enabled.

一个布尔值，表示启用边缘滑动时为 true 。

### X Offset X位移

A number that represents the horizontal offset of the screen.

一个数字，表示屏幕的水平偏移量。

### Progress 进度

A progress value that represents presentation (0 for dismissed, 1 for presented). Used to synchronize other animations.

表示展示的进度值(0表示拒绝，1表示表示)。用于同步其他动画。

### Presented 已出现

A boolean that is true when the screen is presented.

一个布尔值，表示当屏幕出现时为真。

### X Offset

The X position for sliding the prior screen left in a Push transition. Connect to the X Offset of the prior screen.

在 Push 过渡中向左滑动前一个屏幕的 X 位置。连接到前一个屏幕的 X 偏移量。

------

### Related Patches 相关模块

[Interaction 交互](./../Interaction/Interaction.md)

[Scroll 滚动](./../Interaction/Scroll.md)

[Pop Switch 流行开关](./../Interaction/Pop%20Switch.md)

------

### Related Layers 相关图层

[Action Sheet 操作列表](./Action%20Sheet.md)

[Activity Indicator 状态指示器](./Activity%20Indicator.md)

[Alert View 警示框](./Alert%20View.md)

[Fake Keyboard 模拟键盘](./Fake%20Keyboard.md)

[Navigation Bar 导航栏](./Navigation%20Bar.md)

[Notification 通知](./Notification.md)

[Page Control 分页控制器](./Page%20Control.md)

[Segmented Control 分段控制器](./Segmented%20Control.md)

[Slider 滑块](./Slider.md)

[Status Bar 状态栏](./Status%20bar.md)

[Switch 开关](./Switch.md)

[Tab Bar 标签栏](./Tab%20Bar.md)

[Text Field 文本输入框](./Text%20Field.md)

[Visual Effect 毛玻璃效果](./Visual%20Effect.md)
