---
sidebar_position: 2
---

# Screen 屏幕

A group component with realistic iOS-style push and modal transitions. Add any layer inside the screen.

具有现实iOS式推送和模态转换的组组件。在屏幕内添加任何图层。

Use the Touch button on the component to get information about the screen’s presentation status.

使用组件上的触摸按钮获取有关屏幕的演示状态的信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20b00a73-c84b-4645-b3d4-ea6834f6bb80/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190748Z&X-Amz-Expires=86400&X-Amz-Signature=eacbb09344901d9e71d9d79aad302e9cfc514d473ba510703dc3e9dca3ff4834&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

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

**Edge Swipe 边缘滑动**

A boolean that is true when edge-swiping is enabled.

一个布尔值，表示启用边缘滑动时为 true 。

**X Offset X位移**

A number that represents the horizontal offset of the screen.

一个数字，表示屏幕的水平偏移量。

**Progress 进度**

A progress value that represents presentation (0 for dismissed, 1 for presented). Used to synchronize other animations.

表示展示的进度值(0表示拒绝，1表示表示)。用于同步其他动画。

**Presented 已出现**

A boolean that is true when the screen is presented.

一个布尔值，表示当屏幕出现时为真。

**X Offset**

The X position for sliding the prior screen left in a Push transition. Connect to the X Offset of the prior screen.

在 Push 过渡中向左滑动前一个屏幕的 X 位置。连接到前一个屏幕的 X 偏移量。

------

### Related Patches 相关模块

[Interaction 交互](https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc)

[Scroll 滚动](https://www.notion.so/Scroll-2f1508bfbec742279786513c26602209)

[Pop Switch 流行开关](https://www.notion.so/Pop-Switch-e83d8b2e102c466db20fbe80716861c3)

------

### Related Layers 相关图层

[Action Sheet 操作列表](https://www.notion.so/Action-Sheet-925afa64e9fa42a5b2a9374fb41f8dbc)

[Activity Indicator 状态指示器](https://www.notion.so/Activity-Indicator-98b85e24705347b1bc147511e19aca54)

[Alert View 警示框](https://www.notion.so/Alert-View-a05a8e1476e543919ccf453585ce8850)

[Fake Keyboard 模拟键盘](https://www.notion.so/Fake-Keyboard-bf839e8038924161b2ca5b401ebc6faf)

[Navigation Bar 导航栏](https://www.notion.so/Navigation-Bar-2465c6dafddd4a6baeef32d390b015d3)

[Notification 通知](https://www.notion.so/Notification-093ed757b8764a1c936d4c12d632fde7)

[Page Control 分页控制器](https://www.notion.so/Page-Control-b89791a9a0334256b622a5afacfe80ca)

[Segmented Control 分段控制器](https://www.notion.so/Segmented-Control-b1867e80759140748500b210f18f90e5)

[Slider 滑块](https://www.notion.so/Slider-db6e484091084d90a58cba409bb59e9a)

[Status Bar 状态栏](https://www.notion.so/Status-Bar-5aec10025d1b402f83d61811505d89c0)

[Switch 开关](https://www.notion.so/Switch-8e35180bcd1747a282e0b12af1095015)

[Tab Bar 标签栏](https://www.notion.so/Tab-Bar-12b5f2f77b1a42688677f942a9f1a2e7)

[Text Field 文本输入框](https://www.notion.so/Text-Field-35f7f23e5f714582ab1c7d7af511281b)

[Visual Effect 毛玻璃效果](https://www.notion.so/Visual-Effect-4df6115644d141dab240ae1a8f882c66)
