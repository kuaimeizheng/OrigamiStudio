---
sidebar_position: 2
---

# Screen 屏幕

A group component with realistic material-style transitions. Add any layer inside the screen.

很真实的Material样式过渡的组件。可以在屏幕内添加任何图层。

Use the Touch button on the component to get information about the screen’s presentation status.

使用组件上的 Touch 按钮获取有关屏幕显示状态的信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c939db2-b744-4245-92fc-bb08dd76f6d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190315Z&X-Amz-Expires=86400&X-Amz-Signature=0ea820f1ad266caa4b169fd5c9595d9371d80cc53104afc082c2774d61b63e2d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

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

### Scale 比例

A number that represents the scale of the screen.

代表屏幕比例的数字。

### Progress 进度

A progress value that represents presentation (0 for dismissed, 1 for presented). Used to synchronize other animations.

表示展示的进度值(0表示拒绝，1表示表示)。用于同步其他动画。

### Presented 已出现

A boolean that is true when the screen is presented.

一个布尔值，表示当屏幕出现时为真。

### Previous Screen Scale 上一个屏幕比例

The scale value for scaling the previous screen down in a Push transition. Connect to the Scale of the previous screen.

在 Push 过渡中缩小前一个屏幕的比例值。连接到上一个屏幕的比例。

------

### Related Patches 相关模块

[Interaction 交互](./../Interaction/Interaction.md)

[Scroll 滚动](./../Interaction/Scroll.md)

[Pop Switch 流行开关](./../Interaction/Pop%20Switch.md)

------

### Related Layers 相关图层

[Alert View 警示框](./Alert%20View.md)

[Checkbox 复选框](./Checkbox.md)

[Fake Keyboard 模拟键盘](./Fake%20Keyboard.md)

[Page Control 分页控制器](./Page%20Control.md)
[Circular Progress 环形进度](./Circular%20Progress.md)

[Status Bar 状态栏](./Status%20bar.md)

[Switch 开关](./Switch.md)

[Text Field 文本输入框](./Text%20Field.md)
