---
sidebar_position: 2
---

# Creating an Origami System 系统创建

The new system maker allows you to create systems of components to share with others from directly inside of your Origami documents.

新的系统构建器允许您直接在 Origami 中创建可以与他人共享的组件系统。

------

# Prerequisites 先决条件

In order to create a new system, you must be in a saved Origami document with document components. You must be at the outermost level of the layer list (not within a component).

创建一个新系统，您必须在已保存并且带有组件的 Origami 文档中。您必须位于图层列表的最外层（不在组件内）。

# Publishing your system 发布你的系统

Click “Component” in the menu bar, then “Publish Components.”

单击菜单栏中的“Component 组件”，然后单击“Publish Components 发布组件”。

![Image](https://origami.design/public/images/documentation/publish-components.png)

The option to create a new component system

创建新组件系统的选项

- If you are already in a document with a published system, this option will be “Publish Component Updates.”
- 如果您已经在已发布过系统的文档中，则此选项将是“Publish Component Updates 发布组件更新”。

![Image](https://origami.design/public/images/documentation/publish-component-updates.png)

The option if you are already in a document with a published system

在已发布过系统的文档中显示的选项

Select which components you want to publish as part of your system. By default, all components will be selected. Then press continue.

选择您想发布为系统的那些组件。默认情况下，将选择所有组件。然后点击继续。

![Image](https://origami.design/public/images/documentation/component-selection.png)

The component selection page

组件选择页面

- You can edit metadata for each component before pressing continue by selecting the component from the list and then changing any metadata on the right side. These changes will be persisted in your document components whether or not you choose to finish the component publishing flow.
- 在点击继续之前，你看可以编辑每个组件的元数据，方法是从列表中选择组件，然后更改右侧的元数据。无论您是否选择完成组件发布流程，这些更改都将保留在您的文档组件中。

In the next screen, you can enter a name, author, and description for your system before pressing continue.

在下一步中，您可以输入系统的名称、作者和描述，然后点击继续。

![https://origami.design/public/images/documentation/system-metadata.png](https://origami.design/public/images/documentation/system-metadata.png)

The system metadata page

系统元数据页面

- You can click “Advanced Options” to show more options:
- 您可以单击“Advanced Options 高级选项”显示更多选项：
  - custom system identifier 自定义系统标识符
  - custom version 自定义版本
  - icon 图标
  - text styles/color/data 文本样式/颜色/数据
    - Press “Choose file…” to add these files, and the small “x” indicator to remove files you don’t want. 点击“Choose file… 选择文件...”添加这些文件，小“x”图标删除您不想要的文件。
- The name, author, system identifier, and version fields must be filled out in order to press “Continue” and finish publishing your system. 必须填写名称、作者、系统标识符和版本这些字段才能点击“继续”完成系统发布。

After publishing your system, a new section will appear in the sidebar that shows the System Info for your new or updated system.

发布系统后，侧栏中将出现一个新的区域，显示新的或更新后系统的系统信息。

![Image](https://origami.design/public/images/documentation/system-info-sidebar.png)

# Exporting your published system 导出你发布的系统

Follow these steps when you want to generate a .origami-system file that you can distribute.

如果要生成可以分发的 .origami-system 文件，请按照以下步骤操作。

After publishing a system, click on “File” in the menu bar, then “Export System.” Select a name and location and press “Save.”

发布系统后，单击菜单栏中的“File 文件”，然后单击“Export System 导出系统”。选择名称和位置，然后点击“Save 保存”。

![Image](https://origami.design/public/images/documentation/export-published-system.png)

Exporting your system

导出你的系统

# When to publish and when to export 何时发布和何时导出

- If you create new document components or want to edit your system metadata (such as bumping the version number), you should first run through the publishing process to ensure the correct components and information are being published.
- If you edit document components that are already part of your system, you can just follow the export steps to generate the .origami-system file.
- 如果你在创建新文档组件或想要编辑系统元数据（例如修改版本号）时，应该先运行发布过程，以确保发布的组件和信息是正确的。
- 如果您编辑的文档组件已经是系统一部分，您可以按照导出步骤生成 .origami-system 文件。
