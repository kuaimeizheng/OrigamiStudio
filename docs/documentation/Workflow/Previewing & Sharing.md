---
title: Previewing & Sharing 预览&分享
sidebar_position: 30
last_update:
  author: 蒯美政
---

# Previewing & Sharing 预览&分享

Origami Studio 支持在 iOS 和 Android 上预览实时原型，以及通过 iOS/Android Origami Live app 轻松地将文件分享到手机或平板电脑。

---

## Mirroring with USB USB 镜像

通过 USB 连接 iOS 或 Android 设备并运行 Origami。

当前的原型将立即开始在手机或平板电脑上显示预览。您在 Origami Studio 中所做的任何更改都会立即显示在预览中，无需重新启动。

### Origami Live for iOS

1. [Download it from the App Store](https://itunes.apple.com/us/app/origami-live-design-prototyping/id942636206)
2. 用 USB 连接线连接 iPhone 或 iPad
3. 打开 Origami Studio，确保至少有一个文件打开

### Origami live for Android

1. [Download it from Google Play](https://play.google.com/store/apps/details?id=com.facebook.Origami)
2. [Enable Developer Mode and USB Debugging](https://developer.android.com/tools/help/adb.html#Enabling). 您可能需要启用 USB 数据传输。
3. 用 USB 连接线连接 Android 手机或平板电脑。注意:需要一根支持数据传输的线缆。有些线缆只支持给设备充电。
4. 打开 Origami Studio，确保至少有一个文件打开

## Exporting Prototypes 导出原型

通过工具栏中的导出按钮将原型导出到您的手机或平板电脑：

![Image](https://origami.design/public/images/docs/previewingSharing-ExportDevice.png)

然后可以方便的带上手机或平板电脑，随时随地测试你的设计。

## Sharing Prototypes 分享原型

Origami Studio 文件也可以通过电子邮件、Dropbox、AirDrop 等方式直接发送到手机或平板电脑。下载相应的 iOS 或 Android 应用程序即可以打开原型。

## Using Custom Fonts 使用自定义字体

Origami Studio 不会将自定义字体镜像到您的设备。

### iOS

要在您的 iOS 设备上获取自定义字体，请使用适用于 iOS 的 [Anyfont](https://itunes.apple.com/us/app/anyfont/id821560738?mt=8) 或在 Mac 上使用 [Apple Configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344?mt=12)。

使用 Apple 配置器：

1. 从应用菜单中选择 `File > New Profile`
2. 为您的配置文件设置一个名称，并可选地在 General 通用选项卡中填写项目
3. 使用字体选项卡向配置文件添加字体
4. 使用`File > Save`并将`.mobileconfig`文件传输到您的设备(using email for example)
5. 在您的设备上打开文件。你现在应该从 Origami Studio 能看到你的自定义字体镜像

### Android

每个 Android 设备安装自定义字体的过程都不同[取决于设备](https://www.google.com/#q=how+to+install+fonts+on+android)。

## Troubleshooting 排除故障

在大多数情况下，可以通过重新启动 Origami Live、Origami Studio 或手机/平板电脑/计算机来解决问题。

确保 Origami Studio 和 Origami Live 都是最新版本。
