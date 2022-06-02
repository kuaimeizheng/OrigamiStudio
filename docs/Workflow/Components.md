---
sidebar_position: 2
---

# Components 组件

Components are a powerful feature in Origami that allow you to reuse layers and patches across your document’s artboard, screens or even multiple documents. When you make changes to a component, those changes appear everywhere you use it in your prototype. They’re similar in concept to Components in Figma or Symbols in Sketch.

组件是 Origami 中的一项强大功能，允许您在文档中的画板、屏幕甚至多个文档中重复使用图层和模块。 当您对组件进行更改时，这些更改同步显示在原型中使用组件的地方。 它们在概念上类似于 Figma 或 Sketch 中的组件。

------

Components can be comprised of layers, patches or both.

组件可以由图层、模块或两者组成。

**Patch Components** are made up of solely of patches. Use patch components to reduce clutter and encapsulate a group of patches that perform a function. Think of them similarly to functions in programming.

**模块组件** 仅由模块组成。使用模块组件来减少杂乱，并封装一组执行某个功能的模块。这与编程中的函数类似。

**Layer Components** are made up of both layers and patches. Use layer components for re-usable UI objects in your design that can also have their own functionality. (Ex. A button component can have text and rectangle layers for its UI and contain an Interaction patch, among others, for its functionality.)

图层组件 由图层和模块组成。在设计中为需要重复使用的 UI 使用图层组件，组件也可以有自己的功能。（例如，按钮组件可以有文本和矩形图层，也可以包含交互模块，或者其他功能）

# Creating Patch Components 创建模块组件

To group multiple patches into one component, select the patches and choose **Component > Create Component** ⌃⌘G from the menu bar or right-click and select **Group Into Component…**.

要将多个模块组合成一个组件，请选择模块并从菜单栏中选择**Component 组件 > Create component 创建组件** ⌃⌘G 或右键单击并选择 **Group Into Component 组成组件**…。

https://origami.design/public/images/videos/even-or-odd.mp4

Creating Patch Components 创建模块组件

The group of patches above will be replaced by a new single patch component named “Even or Odd” with the inputs and outputs of the nodes it was connected to.

上面的一组模块将被一个名为“偶数或奇数”的新模块组件所取代，该组件包含其所连接节点的输入和输出。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d97d8cf4-87bf-4ca7-9554-cc0fdf3c7022/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T163259Z&X-Amz-Expires=86400&X-Amz-Signature=64f8f3454503de364e3e0b651b4b603387175b02dd2fa1a50c7e67af94dd6218&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

*Note: Layer property patches cannot be grouped into a patch component - to build patch groups with layers, use layer components.*

注意:图层属性模块不能被组合到一个模块组件中——要用图层构建模块组件，请使用图层组件。

### **Editing Patch Components 编辑模块组件**

To enter a patch group, double-click it or press ⌥↓. To leave it and go back, press ⌥↑. Menu items for entering and leaving a patch group are **Component > Enter Component** and **Component > Exit Component**.

双击或按⌥↓ 进入模块组。按 ⌥↑ 离开并返回。进入和离开模块组的菜单项为“**Component 组件 > Enter Component 进入组件**”和“**Component 组件 > Exit Component 退出组件**”。

The Input ports within components are represented by purple patches and the Output ports are represented by the blue patches.

组件中的输入端口由紫色模块表示，输出端口由蓝色模块表示。

![](https://origami.design/public/images/documentation/edit-patch-components.png)

Editing Patch Components 编辑模块组件

# Creating Layer Components 创建图层组件

To create a component, select the patches from the Patch Editor and/or the layers from the Layers Panel/Canvas that you would like to be included in your component. Then, with those selected, from the menu bar click on **Component > Group Into Component** ⌃⌘G. Choose a name for your component then click **Create**.

要创建组件，从模块编辑器中选择模块以及从图层面板中选择你想要设置为组件的图层。然后，在菜单栏中单击 **Component 组件 > Group Into Component 组为组件 ⌃⌘G**。为组件输入一个名称，然后单击 Create 创建。

![](https://origami.design/public/images/documentation/create-layer-components.png)

Select the layers and patches to be added to your layer component

选择要添加到图层组件的图层和模块

You’ll notice a single layer with a purple cog icon has replaced the card group layers and the patches have disappeared. This is because everything has been moved into the component. This is now a local document component and it can be found in the Layer Library under Document Component.

您会注意到带有紫色齿轮图标的单个图层已经取代了卡片组图层，并且模块已经消失。这是因为所有内容都已移至组件中。现在是一个本地文档组件，可以在文档组件下的图层库中找到。

### **Editing Layer Components 编辑图层组件**

Edit a component by selecting the components artboard on the Canvas or by double-clicking the component in the Layer List or Patch Editor.

通过在画布上选择组件画板或在图层列表或模块编辑器中双击组件来编辑组件。

![](https://origami.design/public/images/documentation/edit-layer-components.png)

Editing Components 编辑组件

Once you enter the component you will see some patches that show the published inputs and outputs of the component. Published properties are the pieces of the component that will then be editable from the main view. You will also see the patches and layers you added when creating your component.

进入组件后，你会看到一些模块，显示该组件的已发布的输入和输出。发布的属性是组件的一部分，然后可以从主视图中进行编辑。你还会看到你在创建组件时添加的模块和图层。

Exit the component by clicking on **Components > Exit Component** **⌃⌥↑** or using the back arrow at the top of the Layer List.

通过点击 **Components 组件 > Exit component 退出组件 ⌃⌥↑** 或使用层列表顶部的返回箭头退出组件。

# Components Inputs and Outputs 组件的输入和输出

To add, edit, re-order or remove the individual inputs and outputs, select the patch group and choose **Component > Component Info** ⇧⌘I to bring up the Patch Info popover. The Port Setup tab allows you to change the port type and other properties like default, maximum and minimum values.

要添加、编辑、重新排序或删除单个输入和输出，请选择模块组并选择 **Component 组件 > Component Info 组件信息 ⇧⌘I** 打开模块信息弹窗。端口设置选项允许您更改端口类型和其他属性，例如默认值、最大值和最小值。

![](https://origami.design/public/images/documentation/edit-component.png)

Editing Component Info 编辑组件信息

To publish inputs or outputs from inside a patch component, select a port and choose **Component > Publish Port** ⌥P. This will add a purple or blue patch that represents an input or output on the patch group.

要从模块组件内部发布输入或输出，请选择一个端口并选择 **Component 组件 > Publish Port 发布端口 ⌥P**。将添加一个紫色或蓝色模块，表示模块组上的输入或输出。

Components also have a number of special port tags available in the dropdown menu - for example, using the *Enable* tag will reveal the eye icon on your component for quick enabling or disabling. When a special tag isn’t needed, use the generic Custom tag.

组件在下拉菜单中还有一些特殊的端口标签可用 —— 例如，使用 启用 标签将显示组件上的眼睛图标，以便快速启用或禁用。当不需要特殊标签时，请使用通用自定义标签。

# Inserting Components 插入组件

Components are a type of layer in Origami and live inside the Layer Library. To insert a component click the + in the toolbar to access the dropdown, then click Layer Library or use the shortcut ⌘ + Return to open the Layer Library directly.

组件是Origami中的一种图层类型，在图层库中。要插入一个组件，请点击工具栏上的 "+"进入下拉菜单，然后点击图层库，或者使用快捷键 **⌘+ 回车键**，直接打开图层库。

![](https://origami.design/public/images/documentation/adding-components.png)

# Types of Components 组件类型

### **Platform Components 平台组件**

iOS and Android native components such as status bar, tab bars, action sheets, progress spinners and more. These take on the properties and behaviors of their platform so your prototype feels native. These are also maintained by the Origami team.

iOS 和 Android 原生组件，例如状态栏、标签栏、操作列表、进度加载器等。这些具有其平台的属性和行为，因此您的原型用起来是原生的体验。这些模块也由 Origami 团队维护。

### **Device Components 设备组件**

Special components that allow you to access device specific elements such as the Camera (called “Viewfinder”) and Text Field which captures text typed on the device keyboard.

允许您访问设备特定元素的特殊组件，例如相机（称为“取景器”）和捕获在设备键盘上输入的文本的文本字段。

### **Document Components 文档组件**

Custom components that a user can create within a single document. This component will appear in the Layer Library for that document only.

用户可以在单个文档中创建的自定义组件。该组件将仅出现在该文档的图层库中。

### **User Library Components 用户库组件**

Custom components that have been saved to the user’s library and available in the Layer Library in any Origami file.

已保存到用户库并在任何 Origami 文件的图层库中可用的自定义组件。

# Patch Library 组件库

If you have a patch component that you use over and over, it may make sense to add it to your patch library. Select the patch component and choose **Component > Add to User Library** ⌘⌥L. Reveal the patch library folder by choosing **Component > Show Patch Folder**.

如果您有一个重复使用的模块组件，就建议将其添加到您的模块库中。选择模块组件，然后选择 **Component 组件 > Add to User Library 添加到用户库 ⌘⌥L** 。选择 **Component 组件”> Show Patch Folder 显示模块文件夹** 来显示在电脑上的模块库文件夹。

Once a component is in your library, you will be able to add it the same way as you add other patches and layers next time you start or open a document. To make it available in your current document, close and re-open it.

当组件在您的库中，您就可以在下次启动或打开文档时像添加其他模块和图层一样添加它。

注意：如果要在当前文档中立即可用，需要关闭并重新打开文档。

### **Updating Components 更新组件**

To make changes or add functionality to a component in your library, insert the patch or layer component to your document, make your changes and choose **Component > Add to User Library** again. Close and re-open any documents using this patch group or component, and Origami Studio will prompt you to upgrade the patches to the new version.

要对库中的组件进行更改或添加功能，请将模块或图层组件插入到您的文档中进行更改，并再次选择**Component 组件 > Add to User Library 添加到用户库**。关闭并重新打开使用此模块或组件的文档，随后 Origami Studio 将提示您将模块升级到新版本。

Make one-off changes to any patch or component by unlinking it from the library. Select the patch or layer component and choose **Component > Unlink Component from Library**.

通过从库中取消链接，对任何模块或组件进行临时更改。选择模块或图层组件，然后选择 **Component 组件 > Unlink Component from Library 从库中取消链接组件**。

### **Platform-specific Components 特定于平台的组件**

To limit a patch or component to a platform, specify a platform in the Patch Setup tab of the Patch Info popover. This will make your patch or component available only if the current device matches the chosen platform.

要将模块或组件限制用在某个平台，请在“模块信息”弹窗的“模块设置”选项卡中指定一个平台。这将使您的模块或组件仅在当前设备与所选平台匹配时才可用。

# Sharing a Folder of Patches and Components 共享组件和模块的文件夹

To make components accessible to other team members, create a shared [Dropbox](https://dropbox.com/) folder and add your components to it. To save a component in your document to a shared folder, use the **Component > Add to Other Library**.

要让其他团队成员可以访问组件，请创建一个共享的 Dropbox 文件夹，并将您的组件添加到其中。要将文档中的组件保存到共享文件夹，请使用 **Component 组件 > Add to Other Library 添加到其他库**。

Members of the team can add this folder to the list of loaded libraries using the *+* button in Systems tab in Origami Studio preferences.

团队成员可以使用 Origami Studio 偏好设置中系统选项卡中的 + 按钮，将模块文件夹添加到库列表中使用。

![](https://origami.design/public/images/docs/patchGroups-system.png)
