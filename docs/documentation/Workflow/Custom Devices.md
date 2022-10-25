---
sidebar_position: 5
---

# Custom Devices 自定义设备

Extend the library of simulated devices in Origami Studio by making your own device with custom dimensions, scale, frame and hand images.

通过使用自定义尺寸、比例、框架和手形图片制作自定义设备，扩展 Origami Studio 中的模拟设备库。

------

# Creating a New Device 创建新设备

1. Download the [custom device example](https://s3-us-west-2.amazonaws.com/fborigami/custom_device_example/Example_device.origamidevice.zip) 下载自定义设备示例
2. Open the `.origamidevice` bundle by right-clicking and choosing *Show Package Contents* in the contextual menu 通过右键单击并在菜单中选择“显示包内容”打开 `.origamidevice` 包
3. Make adjustments to `info.json` file describing the device (see documentation below). Make sure to choose a unique key for every device you’re creating
4. Replace or add .png images and reference them in the `info.json` file
5. Double-click the bundle file to install it
6. 下载自定义设备示例
7. 通过右键单击并在菜单中选择“显示包内容”打开 `.origamidevice` 包
8. 对描述设备的 `info.json` 文件进行修改（请参阅下面的文档）。确保为您创建的每台设备都有一个唯一的密钥
9. 替换或添加 .png 图像并在 `info.json` 文件中引用它们
10. 双击包文件安装

Your new device will appear in the Device picker under the *Custom* menu item. Specify the `type` key in info.json to change this.

您的新设备将出现在自定义菜单项下的设备选择列表中。可以在 info.json 中设置 `type` 来改变。

# Testing your Device 测试你的设备

To test your custom device after installation:

在安装后测试您的自定义设备：

1. Switch to the device in Origami Studio
2. Make any changes inside the `.origamidevice` bundle
3. Double-click the `.origamidevice` bundle
4. Origami Studio will immediately refresh the device
5. 在 Origami Studio 中切换到设备
6. 在 `.origamidevice` 包内进行任意更改
7. 双击 `.origamidevice` 包
8. Origami Studio 将立即刷新设备

All installed devices are stored in `~/Library/Application Support/Diamond/Devices`. If you already have a device with the same name in that folder, it will be replaced.

所有已安装的设备都存储在 `~/Library/Application Support/Diamond/Devices` 中。如果您在该文件夹中已有同名设备，会被替换。

# Example info.json info.json 例子

```
{
  "key" : "iPhone4",
  "displayName" : "iPhone 4",
  "platform" : "iOS",
  "type" : "phone",
  "screenScale" : 2,
  "screenSize" : [
    320,
    480
  ],
  "handsImageScale" : 0.5649999999999999,
  "handsImageOffset" : [
    2,
    45
  ],
  "handsImages" : [
    "iPhoneHands.png",
    "iPhoneHands2.png",
    "iPhoneHands3.png"
  ],
  "deviceInsets" : [
    130,
    28,
    130,
    28
  ],
  "deviceImages" : {
    "White" : "iPhone4-White.png",
    "Black" : "iPhone4-Black.png"
  },
  "shadowOffset" : [
    20,
    -5
  ],
  "defaultDeviceOrientation" : "Portrait",
  "supportsDeviceOrientationPortrait" : true,
  "supportsDeviceOrientationLandscapeLeft" : true,
  "supportsDeviceOrientationLandscapeRight" : true,
  "supportsDeviceOrientationPortraitUpsideDown" : true
}
```

# info.json Documentation info.json 文档

Many of the properties of the device `info.json` file are exposed via the [Device Info](../Device/Device%20Info) patch.

设备 info.json 文件的许多属性都通过 [设备信息](../Device/Device%20Info) 模块获取。

### `key` 键

Type: String, Required

类型：字符串，必填

This is the most important item in the bundle. The key will be saved to designers’ compositions, so you can’t change it once it’s been picked. The key should be related to the commonly understood name for the device, but if there are multiple screen sizes or resolutions it must be unique to that combination. You shouldn’t include the device color in the key; that accounted for in the device images.

这是包中最重要的项目。密钥将保存到设计师的作品中，因此一旦被设置就无法更改。该键应与设备的常见名称相关，但如果有多种屏幕尺寸或分辨率，则该组合必须是唯一的。密钥中不应该包含设备颜色；这可以在设备图像体现。

### `displayName` 显示名称

Type: String, Required

类型：字符串，必填

The display name shows in the Device picker menu in Studio. It can be changed after the fact since it’s not saved in compositions.

名称显示在 Studio 的设备选择菜单中。它可以在之后更改，因为它没有保存在合成中。

### `screenSize` 屏幕尺寸

Type: Array of 2 numbers, Required

类型：2 个数字的数组，必填

The size of the device’s display in pt/dp. The size in pixels is `screenSize` multiplied by the `screenScale`.

This is exposed to compositions via the Device Info port “Screen Size”

通过设备信息的“屏幕大小”端口呈现给合成。

### `screenScale` 屏幕倍数

Type: Number, Required

类型：2 个数字的数组，必填

How many pixels are in each point.

每个点有多少像素。

For example, an iOS Retina screen is typically a scale of 2.0. The iPhone 6 Plus has a scale of 3.0. Android devices have a range of scales from 0.75 to 4.0 corresponding to ldpi (0.75) mdpi (1.0), hdpi (1.5), xhdpi (2.0), xxhdpi (3.0) and xxxhdpi (4.0).

例如，iOS Retina 屏幕的比例通常为 2.0。 iPhone 6 Plus 的比例为 3.0。 Android 设备的比例范围是 0.75 到 4.0，对应于 ldpi (0.75) mdpi (1.0)、hdpi (1.5)、xhdpi (2.0)、xxhdpi (3.0) 和 xxxhdpi (4.0)。

### `type` 类型

Type: String, Optional

类型：字符串，可选

The menu item in Device picker menu where this device is available. Available types are `computer`, `phone`, `tablet`, `tv`, `watch`, `window`, `custom`. Defaults to `custom` if not specified.

设备选择菜单中此设备可用的菜单项。可用类型包括`computer`, `phone`, `tablet`, `tv`, `watch`, `window`, `custom`。如果未指定，则默认为`custom`。

### `platform` 平台

Type: String, Optional

类型：字符串，可选

e.g. `iOS`, `Android`, `AndroidWear`, `WindowsPhone`, `Windows`, `OSX`, `tvOS`, or `watchOS`

### `mouseInput` 鼠标输入

Type: Boolean, Optional

类型：布尔值，可选

Whether this device uses a Mouse or Trackpad for input

此设备是否使用鼠标或触控板进行输入

### `viewerWindowNative` 查看本机窗口

Type: Boolean, Optional

类型：布尔值，可选

Whether this device uses a native mac window to display when popped out into its own window. The screenSize is then able to be resized freely.

当弹出自己的窗口时，设备是否使用本机mac窗口来显示。然后屏幕大小可以自由调整。

### `deviceInsets` 设备插件

Type: Array of 4 Numbers, Required

类型：4 个数字的数组，必填

Describes the distance around the device. Influences how the shadow is drawn and the device is positioned relative to the containing view frame.

描述设备周围的距离。影响阴影的设计方式以及设备相对于包含视图框架的位置。

### `shadowOffset` 阴影偏移

Type: Array of 2 Numbers, Optional

类型：2 个数字的数组，可选

If you want the builtin shadow, set this to something non-zero and you can position the shadow relative to the device.

如果你想要内置阴影，将其设置为非零值，你就可以相对于设备定位阴影。

### `deviceImages` 设备图像

Type: Dictionary of Strings to Strings

The keys in the dictionary describe colors the device is available in, the values are the names of the .png files within the bundle that will display the correct device frame within Origami Studio.

字典中的键描述了设备可用的颜色，值是包中 .png 文件的名称，将在 Origami Studio 中显示符合的设备框架。

### `deviceImageOffset` 设备图像偏移

Type: Array of 2 Numbers, Optional

类型：2 个数字的数组，可选

How much to offset the device image from the screen

设备图像相对于屏幕偏移多少

### `deviceImageScale` 设备图片缩放

Type: Number, Required if deviceImages is used

类型。数字，如果使用设备图像则必填

How much to scale up or down the device image compared to the screen scale

与屏幕相比，设备图像放大或缩小多少

### `deviceOverlayImages` 设备图片叠加

Type: Dictionary of Strings to Strings

Overlay images for devices that obscure parts of the screen, like Samsung Galaxy S8 or iPhone X. The keys need to match the colors provided in `deviceImages`, and the images need to be the same size.

为部分屏幕被遮挡的设备（例如三星 Galaxy S8 或 iPhone X）叠加图像。按键需要与`deviceImages`中提供的颜色相匹配，并且图像大小必须相同。

### `handsImageOffset` 手势图片偏移

Type: Array of 2 Numbers, Optional

类型：2 个数字的数组，可选

How much to offset the hand image from the device image

手部图像与设备图像的偏移量

### `handsImageScale` 手势图片缩放

Type: Float, Optional

类型：浮动，可选

How much to scale the hands image compared to the screen

与屏幕相比，手形图像比例多少

### `handsImages` 手势图片

Type: Array of Strings, Optional

类型：字符串数组，可选

Each entry here should refer to a hand image provided in the device bundle.

这里的每个条目都应该引用设备包中提供的手形图像。

### `handsOnTop` 手在前面

Type: Boolean, Optional

类型：布尔值，可选

Whether or not the hand is on top of the device. Useful for devices like iPad where the thumbs should be in front.

手是否在设备顶部。一般用于手持 iPad 大屏幕这样拇指经常放在顶部的设备。

### `defaultDeviceOrientation` 默认设备方向

Type: String, Optional

类型：字符串，可选

The default device orientation to show the device in for the provided screen size and device images. For example, if the device is a TV or tablet in landscape orientation, the value should be `LandscapeLeft` or `LandscapeRight`. Available orientations are `Portrait`, `LandscapeLeft`, `LandscapeRight`, `PortraitUpsideDown`. Defaults to `Portrait` if not specified.

根据提供的屏幕大小和设备图片显示设备的默认方向。例如，如果设备是横向的电视或平板电脑，则该值应为 `LandscapeLeft`或 `LandscapeRight`。可用的方向是`Portrait`, `LandscapeLeft`, `LandscapeRight`, `PortraitUpsideDown`.。如果未指定，则默认为`Portrait`。

### `supportsDeviceOrientationPortrait`支持设备方向纵向,

### `supportsDeviceOrientationLandscapeLeft`支持设备方向横向向左,

### `supportsDeviceOrientationLandscapeRight`支持设备方向横向向右,

### `supportsDeviceOrientationPortraitUpsideDown`支持设备方向纵向倒置

Type: Boolean, Optional

类型：布尔值，可选

Interface orientations that the device supports when being rotated.

设备旋转支持的界面方向。
