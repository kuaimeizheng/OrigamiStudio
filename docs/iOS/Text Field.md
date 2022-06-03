---
sidebar_position: 2
---

# Text Field 文本输入框

An iOS text field that uses the iPhone or iPad native keyboard when running on device.

在设备上运行时使用iPhone或iPad本机键盘的IOS文本字段。

When no device is connected, use the [Fake Keyboard](./Fake%20Keyboard.md).

没有连接设备时，请使用模拟键盘。

Use the Touch button on the component to get information about the text and editing status.

使用组件上的触摸按钮获取有关文本和编辑状态的信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2bd175c5-66eb-4414-996c-22b5f2af318c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190952Z&X-Amz-Expires=86400&X-Amz-Signature=0f5b3a7c9d84f512f35ad165328d40ee35e51e4be321fd2d448b4f4806bb6720&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Enable 启用

A boolean that is true when the text field is displayed.

一个布尔值，表示显示文本字段时为true。

### Position 位置

The position to display the text field.

显示文本字段的位置。

### Width 宽度

The width of the text field.

文本字段的宽度。

### Anchor 锚点

The anchor point to position the text field relative to. See [Coordinates](./../Concepts/Coordinates.md) for more information.

用于定位文本字段的相对位置的锚点。有关更多信息，请参阅坐标。

### Text 文本

A text string to change the text field to. Use Set Text to change the text.

要将文本字段更改为的文本字符串。使用文本设置更改文本。

### Font Name 字体名称

The font name of the text.

文本的字体名称。

### Font Size 字体大小

The font size of the text.

文本的字体大小。

### Text Alignment 文本对齐

The alignment of typed text in the text field: left, center, right.

键入文本在文本字段中的对齐方式：左，居中，右。

### Color 颜色

The color of the text.

文本的颜色。

### Tint Color 色调颜色

The color of the cursor.

光标的颜色。

### Opacity 不透明度

The opacity of the text field.

文本输入框的不透明度。

### Scale 比例

The scale of the text field.

文本输入框的比例。

### Editing - Begin 编辑 - 开始

A pulse that focuses the text field and shows the keyboard if on an iPhone or iPad.

一个脉冲，表示如果在 iPhone 或 iPad 上，聚焦文本字段并显示键盘。

### Editing - End 编辑 - 结束

A pulse that unfocuses the text field and hides the keyboard if on an iPhone or iPad.

一个脉冲，表示如果在 iPhone 或 iPad 上，使文本字段失焦并隐藏键盘。

### Editing - Set Text 编辑 - 设置文本

A pulse that changes the text to the value of the Text input.

一个脉冲，表示将文本更改为输入的文本。

### Placeholder - Text 占位符 - 文本

The placeholder text when no text is entered in the field.

占位文本。

### Placeholder - Color 占位符 - 颜色

The color of the placeholder text.

占位文本的颜色。

### Settings - Keyboard Type 设置 - 键盘类型

The type of keyboard to use on an iPhone or iPad.

在 iPhone 或 iPad 上使用的键盘类型。

### Settings - Show Clear 设置 - 显示清除

The behavior of displaying the clear button: always, unless editing, while editing, none

显示清除按钮的行为：总是，除非编辑，编辑时，无

### Settings - Secure Text 设置 - 安全文本

A boolean that represents whether the text should be obfuscated - useful for password fields.

一个布尔值，表示文本是否应该模糊处理 - 一般用于密码字段。

### Editing 编辑

A boolean that is true when the text field is focused.

一个布尔值，当编辑文本字段时为真。

### Text 文本

The current text string in the text field.

文本字段中的当前文本字符串。

### Enter Pressed 按下输入

A pulse that represents when the return key is pressed.

一个脉冲，表示返回键被按下。

------

### Related Patches 相关模块

[Text Input Info 文本输入信息](./../Text/Text%20Input%20Info.md)

------

### Related Layers 相关图层

[Action Sheet 操作列表](./Action%20Sheet.md)

[Activity Indicator 状态指示器](./Activity%20Indicator.md)

[Alert View 警示框](./Alert%20View.md)

[Fake Keyboard 模拟键盘](./Fake%20Keyboard.md)

[Navigation Bar 导航栏](./Navigation%20Bar.md)

[Notification 通知](./Notification.md)

[Page Control 分页控制器](./Page%20Control.md)

[Screen 屏幕](./Screen.md)

[Segmented Control 分段控制器](./Segmented%20Control.md)

[Slider 滑块](./Slider.md)

[Status Bar 状态栏](./Status%20bar.md)

[Switch 开关](./Switch.md)

[Tab Bar 标签栏](./Tab%20Bar.md)

[Visual Effect 毛玻璃效果](./Visual%20Effect.md)
