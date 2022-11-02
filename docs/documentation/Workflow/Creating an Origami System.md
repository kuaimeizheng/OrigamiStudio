---
title: Creating an Origami System 系统创建
sidebar_position: 10
last_update:
  author: 蒯美政
---

# Creating an Origami System 系统创建

系统构建器允许您直接在 Origami 中创建可以与他人共享的组件系统。

---

在线视频教程链接：https://player.vimeo.com/video/701724282?portrait=0&title=0&byline=0

创建并与你的团队共享一个 [layer and patch components 图层和模块组件库](./Components.md) ，并通过使用 Origami 系统让每个人都保持更新。

在本教程中，我们将通过步骤创建一个 Origami 系统，以及如何发布系统，并与其他人共享。

如果还没有，在开始本教程之前，请查看 [Create a Component 创建组件](https://origami.design/tutorials/smarter-interactions/Create-Component.html) 教程。下载教程启动文件跟随我们建立一个 Origami 系统。

---

## The Original System Maker 最初的 Origami 系统构建器

以前，当你想要创建一个 Origami System 时，你首先要创建一个 System Maker。从这里，您可以添加您希望添加到系统中的文档组件的 Origami 文件。

![The Original System Maker](https://origami.design/public/images/documentation/system-creation-original.png) The Original System Maker

虽然这样子很好，但 System Maker 有一些缺点。它使得在系统中有会出现相同组件的多个版本。这可能会出现冲突导致不允许发布系统，或者导致文件之间的组件不匹配。

另外，使用原始的 System Maker，你必须管理大量的 Origami 文件。这最终使得构建和维护系统库成为一件苦恼的事情。

## The New Origami System Workflow 新的 Origami 系统流程

虽然 Origami 中不再存在 System Maker ，但 Origami 仍然支持遗留的 System Maker 文件，但不再提供创建新的 System Maker 的能力，但创建一个 Origami System 实在是太容易了。

一个重要的注意事项正在推进，新的/当前的构建 Origami 系统的工作流要求所有组件都保存在一个 Origami 文件中。这与过去允许使用多个 Origami 文件来构建一个系统有很大的不同。

这一课，我们将从头开始。让我们从打开 Origami Studio 开始，创建一个新的 Origami 文件并保存。我们将文件命名为 Custom Components。在 start package 文件夹中，打开所有三个 Origami 文件(Button、Post 和 Profile)。然后复制并粘贴每个文档组件到我们的 Custom Components 文件中。

![img](https://origami.design/public/images/documentation/system-creation-workflow-1.png)

在我们的文件中至少有一个组件时，在菜单栏的 component 选项卡下会出现一个新选项。

![img](https://origami.design/public/images/documentation/system-creation-workflow-2.png)

单击发布组件以打开系统发布器。一个新的弹出窗口出现了，在这里您将管理什么得发布，什么不发布。这将包括折纸文件中的所有文档组件和模块组件。此外，您可以输入关于每个组件的任何信息，类似于组件信息窗口。

![img](https://origami.design/public/images/documentation/system-creation-workflow-3.png)

一旦您对所包含的组件感到满意，并且每个组件的信息都是正确的，就可以继续点击 Continue 按钮。从这里，将出现一个新窗口。在这里，您将设置有关组件库的所有信息。

![img](https://origami.design/public/images/documentation/system-creation-workflow-4.png)

第一行是输入系统名称的地方，因此在这里，我们将输入自定义组件。

第二行是你将输入你的名字或组织的名称，将管理组件库的作者信息。

最后一个字段是您可以输入关于 Origami 系统的简要描述的地方。我们将输入“以您的名字命名的常用组件集合”。

在这里，你还可以通过点击 Advanced options 选项卡来输入/编辑一些额外的选项。

![img](https://origami.design/public/images/documentation/system-creation-workflow-5.png)

高级选项允许您修改/定制系统标识符，设置系统的版本，并设置一个显示图标，将显示旁边的任何组件，使用从您发布的 Origami 系统。

这里还可以附加任何处理文本样式、颜色库或数据的 JSON 文件。

让我们为系统添加一个自定义图标。在 Starting 文件夹中，有一个名为“cranestudios_large@2x.png”的镜像文件。只需单击您的 Finder 中的图像，并将其拖放到图像字段上。

一旦所有字段都被填满，点击继续按钮，你将被带到一个 finder 窗口，设置你希望在哪里保存你发布的库。

如果您愿意，您可以更改系统的名称，默认情况下，系统将继承您在上一个窗口的 name 字段中输入的名称。点击 Save，现在你已经发布了一个 Origami System。

## Loading and Sharing an Origami System 加载和分享 Origami 系统

将新创建的 System 加载到 Origami 中的第一种方法是双击导出的文件。这将自动添加到折纸。

下一种方法是通过 Preferences 窗格直接加载它。在系统栏菜单中，导航到 Origami Studio &gt;偏好。

将出现一个弹出菜单，从这里导航到 Components 选项卡。

![img](https://origami.design/public/images/documentation/system-creation-adding.png)

点击右下角的`+`符号，然后导航到你想要加载到 Origami 中的系统所在的位置。选择文件，然后单击 Open。

如果你想他人共享系统，我们建议将系统发布在共享文件夹或文件共享服务上，比如[Dropbox](https://dropbox.com/) 或 [谷歌 Drive](https://www.google.com/drive/) 。

当系统从共享位置安装时，每个人都将收到对系统的更新，并且包含较旧组件的现有文档将被提示进行升级。

## Using components from the System 使用系统中的组件

让我们通过创建一个新文档并添加新的系统按钮组件来检查新安装的组件。

首先，退出并重新打开 Origami Studio，重新加载包含新组件的库，并打开一个新文档。

打开图层库并输入 Custom Components 来搜索我们的新系统组件。选择 Button 组件并按 enter 将其添加到图层列表中。

![img](https://origami.design/public/images/documentation/system-creation-workflow-using-components.png)

## Wrapping up 结尾

就是这样，我们已经创建了我们自己的系统，可以很容易地分享给其他用户。要向系统添加更多组件，只需在同一个 Origami 文件中构建新组件，然后重新发布系统。

我们还可以将模块组件添加到 Origami 系统中，与图层组件一起分享。访问文档中的[Component](./Components.md)部分以获得更多信息。

## Migrating from System Maker to the New Publishing Flow 从系统构建器迁移到新的发布流程

如果你有一个使用旧 System Maker 的 Origami System，升级到新方法是相当简单的，但有一些注意事项。

如果你所有的图层和模块组件都在一个 Origami 文件中，你就可以直接进入 components &gt;Publish Components 并填写相应的字段。

如果组件分布在多个文件中，则需要将组件复制并粘贴到单个 Origami 文件中。我们建议从可能包含其他图层和/或模块组件(子组件)的较大组件开始。

这将有助于缓解组件的任何版本问题，希望还能缓解组件的任何破坏。

这也将有助于减少你需要做的复制和粘贴的数量。一旦您将所有组件复制并粘贴到新文件中，检查所有组件并再次检查是否有重复的内容。

如果有重复的组件，并且该组件在其他几个组件中使用，不幸的是，您需要决定哪一个是您希望保留的组件版本。

将重复的组件重命名为容易识别的名称(ex. Component Name (dup))，然后检查所有可能包含重复组件的组件。

如果副本存在于组件内部，您将需要用您希望保留的版本替换它，并重新将它附加到模块图中先前附加的副本的任何链接上。

一旦迁移完成，并且您对组件的状态感到满意，就可以继续发布流程。
