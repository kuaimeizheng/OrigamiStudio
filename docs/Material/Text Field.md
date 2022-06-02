---
sidebar_position: 2
---

# Text Field 文本输入框

An iOS text field that uses an Android phone or tablet’s native keyboard when running on device.

在设备上运行时使用Android手机或平板电脑本机键盘的IOS文本字段。

When no device is connected, use the [Fake Keyboard](https://www.notion.so/Fake-Keyboard-3feb346590de4ff3822b6079c7dc17b9).

没有连接设备时，请使用模拟键盘。

Use the Touch button on the component to get information about the text and editing status.

使用组件上的触摸按钮获取有关文本和编辑状态的信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e48e71ed-3539-4932-bc53-723c1317802c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190416Z&X-Amz-Expires=86400&X-Amz-Signature=d1781ae0b0eef4847cca644d5419ae4946d11b56b06095fbd68510b2a40588e3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable 启用**

A boolean that is true when the text field is displayed.

一个布尔值，表示显示文本字段时为true。

**Position 位置**

The position to display the text field.

显示文本字段的位置。

**Width 宽度**

The width of the text field.

文本字段的宽度。

**Anchor 锚点**

The anchor point to position the text field relative to. See [Coordinates](https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2) for more information.

用于定位文本字段的相对位置的锚点。有关更多信息，请参阅坐标。

**Font Name 字体名称**

The font name of the text.

文本的字体名称。

**Font Size 字体大小**

The font size of the text.

文本的字体大小。

**Begin Editing 开始编辑**

A pulse that focuses the text field and shows the keyboard if on an iPhone or iPad.

一个脉冲，表示聚焦在文本字段上，如果在iPhone或iPad上，则显示键盘。

**End Editing 结束编辑**

A pulse that unfocuses the text field and hides the keyboard if on an iPhone or iPad.

一个脉冲，表示未聚焦在文本字段上，如果在iPhone或iPad上，则显示键盘。

**Color 颜色**

The color of the text.

文本的颜色。

**Accent Color 强调颜色**

The color of the cursor and underline when editing.

编辑时光标的颜色和下划线。

**Text 文本**

A text string to change the text field to. Use Set Text to change the text.

要将文本字段更改为的文本字符串。使用文本设置更改文本。

**Hint Text 提示文本**

The placeholder text when no text is entered in the field.

当字段中没有输入文本时的占位符文本。

**Set Text 设置文本**

A pulse that changes the text using the Text input.

使用文本输入改变文本的脉冲。

**Underline 下划线**

A boolean that is true when an underline is displayed.

一个布尔值，表示显示下划线时，布尔值为真。

**Keyboard Type 键盘类型**

The type of keyboard to use on an Android phone or tablet.

在Android手机或平板电脑上使用的键盘类型。

**Secure Text Entry 安全文本输入**

A boolean that represents whether the text should be obfuscated, useful for password fields.

一个布尔值，表示文本是否应模糊处理，用于密码字段。

**Text Alignment 文本对齐**

The alignment of typed text in the text field: left, center, right.

键入文本在文本字段中的对齐方式：左，居中，右。

**Editing 编辑**

A boolean that is true when the text field is focused.

一个布尔值，当编辑文本字段时为真。

**Text 文本**

The current text string in the text field.

文本字段中的当前文本字符串。

**Enter Pressed 按下输入**

A pulse that represents when the return key is pressed.

一个脉冲，表示返回键被按下。

------

### ***\*Related Patches 相关模块\****

[Text Input Info 文本输入信息](https://www.notion.so/Text-Input-Info-dfa5b72d8f5e4bd8b1f679117406f268)

------

### Related Layers 相关图层

[Alert View 警示框](https://www.notion.so/Alert-View-82a7c414b0c04e489c7efe4bea7a239d)

[Checkbox 复选框](https://www.notion.so/Checkbox-3b26d11b40fe4fd6b4331fa09afc1b47)

[Fake Keyboard 模拟键盘](https://www.notion.so/Fake-Keyboard-3feb346590de4ff3822b6079c7dc17b9)

[Page Control 分页控制器](https://www.notion.so/Page-Control-73fd8adb143a4b34a3267ece18dfd876)

[Circular Progress 环形进度](https://www.notion.so/Circular-Progress-df848ba8986b4983aaa59dbf7c05faae)

[Screen 屏幕](https://www.notion.so/Screen-a0d1e5fd463540a6b93c635a9706cab2)

[Status Bar 状态栏](https://www.notion.so/Status-Bar-c2583cf542a241949665528cff2c5031)

[Switch 开关](https://www.notion.so/Switch-4171567de6384966b26842c68b41155d)
