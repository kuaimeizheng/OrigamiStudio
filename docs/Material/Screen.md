---
sidebar_position: 2
---

# Screen 屏幕

A group component with realistic material-style transitions. Add any layer inside the screen.

很真实的Material样式过渡的组件。可以在屏幕内添加任何图层。

Use the Touch button on the component to get information about the screen’s presentation status.

使用组件上的 Touch 按钮获取有关屏幕显示状态的信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c939db2-b744-4245-92fc-bb08dd76f6d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190315Z&X-Amz-Expires=86400&X-Amz-Signature=0ea820f1ad266caa4b169fd5c9595d9371d80cc53104afc082c2774d61b63e2d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable 启用**

A boolean that is true when the screen is displayed.

一个布尔值，表示在显示屏幕时，布尔值是真。

**Present 出现**

A pulse that presents the screen by animating it in.

一个脉冲，表示触发屏幕入场动画。

**Dismiss 消失**

A pulse that dismisses the screen by animating it out.

一个脉冲，表示触发屏幕消失动画。

**Transition 过渡**

The animation style: Push or Modal.

动画风格：推进或模态。

**Start State 开始状态**

The starting position: Dismissed or Presented.

开始位置:消失或出现。

**Scale 比例**

A number that represents the scale of the screen.

代表屏幕比例的数字。

**Progress 进度**

A progress value that represents presentation (0 for dismissed, 1 for presented). Used to synchronize other animations.

表示展示的进度值(0表示拒绝，1表示表示)。用于同步其他动画。

**Presented 已出现**

A boolean that is true when the screen is presented.

一个布尔值，表示当屏幕出现时为真。

**Previous Screen Scale 上一个屏幕比例**

The scale value for scaling the previous screen down in a Push transition. Connect to the Scale of the previous screen.

在 Push 过渡中缩小前一个屏幕的比例值。连接到上一个屏幕的比例。

------

### Related Patches 相关模块

[Interaction 交互](https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc)

[Scroll 滚动](https://www.notion.so/Scroll-2f1508bfbec742279786513c26602209)

[Pop Switch 流行开关](https://www.notion.so/Pop-Switch-e83d8b2e102c466db20fbe80716861c3)

------

### Related Layers 相关图层

[Alert View 警示框](https://www.notion.so/Alert-View-82a7c414b0c04e489c7efe4bea7a239d)

[Checkbox 复选框](https://www.notion.so/Checkbox-3b26d11b40fe4fd6b4331fa09afc1b47)

[Fake Keyboard 模拟键盘](https://www.notion.so/Fake-Keyboard-3feb346590de4ff3822b6079c7dc17b9)

[Page Control 分页控制器](https://www.notion.so/Page-Control-73fd8adb143a4b34a3267ece18dfd876)

[Circular Progress 环形进度](https://www.notion.so/Circular-Progress-df848ba8986b4983aaa59dbf7c05faae)

[Status Bar 状态栏](https://www.notion.so/Status-Bar-c2583cf542a241949665528cff2c5031)

[Switch 开关](https://www.notion.so/Switch-4171567de6384966b26842c68b41155d)

[Text Field 文本输入框](https://www.notion.so/Text-Field-4a2ab8b08c3a49d19b19e4f715dedf41)
