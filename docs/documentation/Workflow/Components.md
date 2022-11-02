---
title: Components 组件
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Components 组件

组件是 Origami 中的一项强大功能，允许您在文档中的画板、屏幕甚至多个文档中重复使用图层和模块。

当您对组件进行更改时，这些更改同步显示在原型中使用组件的地方。 它们在概念上类似于 Figma 或 Sketch 中的组件。

---

组件可以由图层、模块或两者组成。


模块组件仅由模块组成。使用模块组件来减少杂乱，并封装一组执行某个功能的模块。这与编程中的函数类似。

图层组件 由图层和模块组成。在设计中为需要重复使用的 UI 使用图层组件，组件也可以有自己的功能。

(例如，按钮组件可以有文本和矩形图层，也可以包含交互模块，或者其他功能)

## Creating Patch Components 创建模块组件

要将多个模块组合成一个组件，请选择模块并从菜单栏中选择 `Component 组件 > Create component 创建组件` **⌃⌘G** 或右键单击并选择 `Group Into Component 组成组件`。

https://origami.design/public/images/videos/even-or-odd.mp4

创建模块组件

上面的一组模块将被一个名为 “Even or Odd 偶数或奇数” 的新模块组件所取代，该组件包含其所连接节点的输入和输出。

![Image](./../../../static/img/docs/Workflow/components-1.png)

注意：图层属性模块不能被组合到一个模块组件中——要用图层构建模块组件，请使用图层组件。

### Editing Patch Components 编辑模块组件

双击或按 `⌥↓` 进入模块组。按下 ` ⌥↑` 离开并返回。

进入和离开模块组的菜单项为`Component 组件 > Enter Component 进入组件 `和`Component 组件 > Exit Component 退出组件`。

组件中的输入端口由紫色模块表示，输出端口由蓝色模块表示。

![](https://origami.design/public/images/documentation/edit-patch-components.png)

编辑模块组件

## Creating Layer Components 创建图层组件

要创建组件，从模块编辑器中选择模块以及从图层面板中选择你想要设置为组件的图层。

然后，在菜单栏中单击 ` Component 组件 > Group Into Component 组为组件`或` ⌃⌘G` 。为组件输入一个名称，然后单击 `Create 创建`。

![](https://origami.design/public/images/documentation/create-layer-components.png)

选择要添加到图层组件的图层和模块

您会注意到带有紫色齿轮图标的单个图层已经取代了卡片组图层，并且模块已经消失。

这是因为所有内容都已移至组件中。现在是一个本地文档组件，可以在文档组件下的图层库中找到。

### Editing Layer Components 编辑图层组件

通过在画布上选择组件画板或在图层列表或模块编辑器中双击组件来编辑组件。

![](https://origami.design/public/images/documentation/edit-layer-components.png)

编辑组件

进入组件后，你会看到一些模块，显示该组件的已发布的输入和输出。发布的属性是组件的一部分，然后可以从主视图中进行编辑。你还会看到你在创建组件时添加的模块和图层。

通过点击 ` Components 组件 > Exit component 退出组件`或` ⌃⌥↑`或使用层列表顶部的`返回箭头`退出组件。

## Components Inputs and Outputs 组件的输入和输出

要添加、编辑、重新排序或删除单个输入和输出，请选择模块组并选择 ` Component 组件 > Component Info 组件信息` 或`⇧⌘I`打开模块信息弹窗。

端口设置选项允许您更改端口类型和其他属性，例如默认值、最大值和最小值。

![](https://origami.design/public/images/documentation/edit-component.png)

编辑组件信息

要从模块组件内部发布输入或输出，请选择一个端口并选择 `Component 组件 > Publish Port 发布端口`或` ⌥P`。将添加一个紫色或蓝色模块，表示模块组上的输入或输出。

组件在下拉菜单中还有一些特殊的端口标签可用 —— 例如，使用 Enable 启用 标签将显示组件上的眼睛图标，以便快速启用或禁用。当不需要特殊标签时，请使用通用自定义标签。

## Inserting Components 插入组件

组件是 Origami 中的一种图层类型，在图层库中。要插入一个组件，请点击工具栏上的 `+`进入下拉菜单，然后点击图层库，或者使用快捷键 `⌘+ 回车键`，直接打开图层库。

![](https://origami.design/public/images/documentation/adding-components.png)

## Types of Components 组件类型

### Platform Components 平台组件

iOS 和 Android 原生组件，例如状态栏、标签栏、操作列表、进度加载器等。

这些具有其平台的属性和行为，因此您的原型用起来是原生的体验。这些模块也由 Origami 团队维护。

### Device Components 设备组件

允许您访问设备特定元素的特殊组件。

例如相机（称为“取景器”）和捕获在设备键盘上输入的文本的文本字段。

### Document Components 文档组件

用户可以在单个文档中创建的自定义组件。该组件将仅出现在该文档的图层库中。

### User Library Components 用户库组件

已保存到用户库并在任何 Origami 文件的图层库中可用的自定义组件。

## Patch Library 组件库

如果您有一个重复使用的模块组件，就建议将其添加到您的模块库中。

选择模块组件，然后选择 `Component 组件 > Add to User Library 添加到用户库`或` ⌘⌥L`。选择 `Component 组件”> Show Patch Folder 显示模块文件夹`来显示在电脑上的模块库文件夹。

当组件在您的库中，您就可以在下次启动或打开文档时像添加其他模块和图层一样添加它。

注意：如果要在当前文档中立即可用，需要关闭并重新打开文档。

### Updating Components 更新组件

要对库中的组件进行更改或添加功能，请将模块或图层组件插入到您的文档中进行更改，并再次选择 `Component 组件 > Add to User Library 添加到用户库` 。

关闭并重新打开使用此模块或组件的文档，随后 Origami Studio 将提示您将模块升级到新版本。

通过从库中取消链接，对任何模块或组件进行临时更改。选择模块或图层组件，然后选择 `Component 组件 > Unlink Component from Library 从库中取消链接组件`。

### Platform-specific Components 特定于平台的组件

要将模块或组件限制用在某个平台，请在“模块信息”弹窗的“模块设置”选项卡中指定一个平台。这将使您的模块或组件仅在当前设备与所选平台匹配时才可用。

## Sharing a Folder of Patches and Components 共享组件和模块的文件夹

要让其他团队成员可以访问组件，请创建一个共享的 [Dropbox](https://dropbox.com/)  文件夹，并将您的组件添加到其中。

要将文档中的组件保存到共享文件夹，请使用 `Component 组件 > Add to Other Library 添加到其他库`。

团队成员可以使用 Origami Studio 偏好设置中系统选项卡中的 `+`按钮，将模块文件夹添加到库列表中使用。

![](https://origami.design/public/images/docs/patchGroups-system.png)
