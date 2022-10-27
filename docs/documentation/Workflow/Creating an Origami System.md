---
sidebar_position: 5
---

# Creating an Origami System 系统创建

系统构建器允许您直接在 Origami 中创建可以与他人共享的组件系统。

---

在线视频教程链接：https://player.vimeo.com/video/701724282?portrait=0&title=0&byline=0

Create and share a library of [layer and patch components](./Components.md) with your team and keep everyone up to date by using an Origami System.

创建并与你的团队共享一个 [图层和模块组件库](./Components.md) ，并通过使用 Origami 系统让每个人都保持更新。

In this tutorial, we’ll walk through the steps to create an Origami System and how to publish the system and share it with others.

在本教程中，我们将通过步骤创建一个 Origami 系统，以及如何发布系统，并与其他人共享。

If you haven’t already, review the [Create a Component](https://origami.design/tutorials/smarter-interactions/Create-Component.html) tutorial before starting this one. Download the tutorial starter assets to follow along as we build an Origami System.

如果还没有，在开始本教程之前，请查看 [创建组件](https://origami.design/tutorials/smarter-interactions/Create-Component.html) 教程。下载教程启动文件跟随我们建立一个 Origami 系统。

---

## The Original System Maker 最初的 Origami 系统构建器

Previously, when you wanted to create an Origami System, you would first create a System Maker. From there, you would add Origami files that would contain document components that you wished to add to your System.

以前，当你想要创建一个 Origami System 时，你首先要创建一个 System Maker。从这里，您可以添加您希望添加到系统中的文档组件的 Origami 文件。

![The Original System Maker](https://origami.design/public/images/documentation/system-creation-original.png) The Original System Maker

While this worked fine, there were a few shortcomings of the System Maker. It made it possible to have multiple versions of the same component within the system. Which could either lead to conflicts that would not allow the System to be published, or mismatching components between files. Added, with the original System Maker, you would have to manage numerous Origami files. This ended up making building and maintaining a System Library a tedious affair.

虽然这样子很好，但 System Maker 有一些缺点。它使得在系统中有会出现相同组件的多个版本。这可能会出现冲突导致不允许发布系统，或者导致文件之间的组件不匹配。

另外，使用原始的 System Maker，你必须管理大量的 Origami 文件。这最终使得构建和维护系统库成为一件苦恼的事情。

## The New Origami System Workflow 新的 Origami 系统流程

While a System Maker no longer exists in Origami (Origami still supports legacy System Maker files, but no longer offers the ability to create a new one), creating a Origami System couldn’t be easier.

虽然 Origami 中不再存在 System Maker ，但 Origami 仍然支持遗留的 System Maker 文件，但不再提供创建新的 System Maker 的能力，但创建一个 Origami System 实在是太容易了。

An important note moving forward, the new/current workflow for building an Origami System requires that all of the Components be saved in a single Origami file. This is much different from the past which allowed multiple Origami files to be used to build a System.

一个重要的注意事项正在推进，新的/当前的构建 Origami 系统的工作流要求所有组件都保存在一个 Origami 文件中。这与过去允许使用多个 Origami 文件来构建一个系统有很大的不同。

For this lesson, we’ll first start from scratch. Let’s start by opening Origami Studio, create a new Origami file and save. We’ll name the file Custom Components. In the Starting package folder, open up all three Origami files (Button, Post, and Profile). Then copy and paste each document component into our Custom Components file.

这一课，我们将从头开始。让我们从打开 Origami Studio 开始，创建一个新的 Origami 文件并保存。我们将文件命名为 Custom Components。在 start package 文件夹中，打开所有三个 Origami 文件(Button、Post 和 Profile)。然后复制并粘贴每个文档组件到我们的 Custom Components 文件中。

![img](https://origami.design/public/images/documentation/system-creation-workflow-1.png)

With at least one component in our file, a new option appears under the Component tab in the menu bar.

在我们的文件中至少有一个组件时，在菜单栏的 component 选项卡下会出现一个新选项。

![img](https://origami.design/public/images/documentation/system-creation-workflow-2.png)

Click on Publish Components to open the System Publisher. A new popover appears and here is where you’ll manage what gets and does not get published. This will include all Document Components and Patch Components in your Origami File. Also, you can enter any information about each component, similar to the Component Info window.

单击发布组件以打开系统发布器。一个新的弹出窗口出现了，在这里您将管理什么得发布，什么不发布。这将包括折纸文件中的所有文档组件和模块组件。此外，您可以输入关于每个组件的任何信息，类似于组件信息窗口。

![img](https://origami.design/public/images/documentation/system-creation-workflow-3.png)

Once you are satisfied with what component(s) are being included and the information for each component is correct, proceed to hit the Continue button. From here, a new window will appear. This is where you’ll enter all of the information about your Component Library.

一旦您对所包含的组件感到满意，并且每个组件的信息都是正确的，就可以继续点击 Continue 按钮。从这里，将出现一个新窗口。在这里，您将设置有关组件库的所有信息。

![img](https://origami.design/public/images/documentation/system-creation-workflow-4.png)

The first line is where you’ll enter the Name of your System, so for here, we’ll type in Custom Components. The second line is where you’ll enter your name or the name of the org that will be managing the Library. The last field is where you can enter a brief description about the Origami System. We’ll type in “A collection of regularly used custom components by Your Name.” From here, you can also enter/edit a few additional options by clicking on the Advanced Options tab.

第一行是输入系统名称的地方，因此在这里，我们将输入自定义组件。

第二行是你将输入你的名字或组织的名称，将管理组件库的作者信息。

最后一个字段是您可以输入关于 Origami 系统的简要描述的地方。我们将输入“以您的名字命名的常用组件集合”。

在这里，你还可以通过点击 Advanced options 选项卡来输入/编辑一些额外的选项。

![img](https://origami.design/public/images/documentation/system-creation-workflow-5.png)

The Advanced Options allows you to modify/tailor the System Identifier, set the versioning of the System and set a display Icon that will be displayed next to any component that is used from your published Origami System. Here is also where you will attach any JSON files that handle text styling, color libraries, or data. Let’s add a custom icon for our System. In the Starting folder, there is an image file called “cranestudios_large@2x.png”. Simply click on the image in your Finder and drag and drop it over the image field.

高级选项允许您修改/定制系统标识符，设置系统的版本，并设置一个显示图标，将显示旁边的任何组件，使用从您发布的 Origami 系统。

这里还可以附加任何处理文本样式、颜色库或数据的 JSON 文件。

让我们为系统添加一个自定义图标。在 Starting 文件夹中，有一个名为“cranestudios_large@2x.png”的镜像文件。只需单击您的 Finder 中的图像，并将其拖放到图像字段上。

Once all of the fields are filled, hit the Continue button and you will be taken to a finder window to set where you wish to have your published library saved. You can change the name of the system if you wish, by default the system will inherit the name you entered in the Name field in the previous window. Click on Save and you have now published an Origami System.

一旦所有字段都被填满，点击继续按钮，你将被带到一个 finder 窗口，设置你希望在哪里保存你发布的库。

如果您愿意，您可以更改系统的名称，默认情况下，系统将继承您在上一个窗口的 name 字段中输入的名称。点击 Save，现在你已经发布了一个 Origami System。

## Loading and Sharing an Origami System 加载和分享 Origami 系统

The first way to load your newly created System into Origami is by double-clicking on the exported file. This will automatically add it to Origami. The next way is to load it in directly via the Preferences pane. In the System Bar menu, Navigate to Origami Studio > Preferences. A pop-up menu will appear and from here, navigate to the Components Tab.

将新创建的 System 加载到 Origami 中的第一种方法是双击导出的文件。这将自动添加到折纸。

下一种方法是通过 Preferences 窗格直接加载它。在系统栏菜单中，导航到 Origami Studio &gt;偏好。

将出现一个弹出菜单，从这里导航到 Components 选项卡。

![img](https://origami.design/public/images/documentation/system-creation-adding.png)

Click on the + symbol in the lower right corner, and then navigate to where the System you want to load into Origami resides. Select the file and then click Open.

点击右下角的+符号，然后导航到你想要加载到 Origami 中的系统所在的位置。选择文件，然后单击 Open。

If you plan on sharing the system with others, we’d recommend publishing the system on a shared folder or a file sharing service like [Dropbox](https://dropbox.com/) or [Google Drive](https://www.google.com/drive/). When the system is installed from a shared location, everyone will receive updates to the system, and existing documents with older components will be prompted to upgrade.

如果你想他人共享系统，我们建议将系统发布在共享文件夹或文件共享服务上，比如[Dropbox](https://dropbox.com/) 或 [谷歌 Drive](https://www.google.com/drive/) 。

当系统从共享位置安装时，每个人都将收到对系统的更新，并且包含较旧组件的现有文档将被提示进行升级。

## Using components from the System 使用系统中的组件

Let’s check out our newly installed component by creating a new document and adding the new system Button component.

让我们通过创建一个新文档并添加新的系统按钮组件来检查新安装的组件。

First, quit and re-open Origami Studio to reload the libraries with our new components and open a new document.

首先，退出并重新打开 Origami Studio，重新加载包含新组件的库，并打开一个新文档。

Open the layer library and type Custom Components to search for our new system components. Select the Button component and press enter to add it to the layer list.

打开图层库并输入 Custom Components 来搜索我们的新系统组件。选择 Button 组件并按 enter 将其添加到图层列表中。

![img](https://origami.design/public/images/documentation/system-creation-workflow-using-components.png)

## Wrapping up 结尾

And that’s it, we have created our own System that can be easily distributed to other users. To add more components to the system, just build the new component within the same Origami file and re-publish the system.

就是这样，我们已经创建了我们自己的系统，可以很容易地分享给其他用户。要向系统添加更多组件，只需在同一个 Origami 文件中构建新组件，然后重新发布系统。

We can also add patch components to Origami systems to distribute along with layer components. Visit the [Component](./Components.md) section in the documentation to find out more.

我们还可以将模块组件添加到 Origami 系统中，与图层组件一起分享。访问文档中的[Component](./Components.md)部分以获得更多信息。

## Migrating from System Maker to the New Publishing Flow 从系统构建器迁移到新的发布流程

If you have a previously built Origami System that utilizes the old System Maker, upgrading to the new method is fairly straight-forward, but there are some caveats. If all of your layer and patch components are already in a single Origami file, you’re good to go and can go straight to Components > Publish Components and fill out the corresponding fields.

如果你有一个使用旧 System Maker 的 Origami System，升级到新方法是相当简单的，但有一些注意事项。

如果你所有的图层和模块组件都在一个 Origami 文件中，你就可以直接进入 components &gt;Publish Components 并填写相应的字段。

If the components are spread out through multiple files you’ll need to copy and paste the components into a single Origami file. We suggest starting with the larger components that may contain other layer and/or patch components (subcomponents).

如果组件分布在多个文件中，则需要将组件复制并粘贴到单个 Origami 文件中。我们建议从可能包含其他图层和/或模块组件(子组件)的较大组件开始。

This will help mitigate any versioning issues with components and hopefully any breakage of a component. This will also help cutdown on the amount of copying and pasting you’ll need to do. Once you’ve finished copying and pasting all of the components into the new file, review all the components and double-check there are no duplicates.

这将有助于缓解组件的任何版本问题，希望还能缓解组件的任何破坏。

这也将有助于减少你需要做的复制和粘贴的数量。一旦您将所有组件复制并粘贴到新文件中，检查所有组件并再次检查是否有重复的内容。

If there are duplicates, and the component is used in several other components, unfortunately, you’ll need to decide which is the version of the component you wish to keep. Rename the duplicate component to something that is easily identifiable (ex. Component Name (dup)), and then inspect all of the components that may contain the duplicate component(s).

如果有重复的组件，并且该组件在其他几个组件中使用，不幸的是，您需要决定哪一个是您希望保留的组件版本。

将重复的组件重命名为容易识别的名称(例如:组件名称(dup))，然后检查所有可能包含重复组件的组件。

If the duplicate exists inside of a component, you will need to replace it with the version that you wish to keep and re-attach it to any linkage that the duplicate was attached to previously in the Patch Graph.

如果副本存在于组件内部，您将需要用您希望保留的版本替换它，并重新将它附加到模块图中先前附加的副本的任何链接上。

Once the migration is complete and you are satisfied with the state of the components, proceed onto the publishing flow.

一旦迁移完成，并且您对组件的状态感到满意，就可以继续发布流程。
