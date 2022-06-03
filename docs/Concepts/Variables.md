---
sidebar_position: 1
---

# Variables 变量

Variables are a way to organize and simplify the patch graph of your prototype. At the simplest level, a ### Variable Broadcasterand ### Variable Receiverscan replace the cables that normally connect one patch’s output to other patches’ inputs. (In previous versions of Origami these patches were named Wireless Broadcasters and Receivers, because they removed the “wires” between patches!)

变量是整理和简化原型图的一种方法。在最简单的层面上，变量发送器和变量接收器可以替换通常连接一个模块的输出到其他模块的输入的连线。(在Origami的早期版本中，这些模块被命名为无线发送和接收器，因为它们删除了模块之间的“连线”!)

Variables can be especially useful as your prototype becomes more complex and the patch graph grows in size. Instead of dragging a cable and scrolling around a large graph, you can attach a Variable Broadcaster to the source value, and then insert a Variable Receiver patch anywhere you need to use it.

当你的原型变得更加复杂，并且模块图的大小也在增大时，变量便会变得非常有用。您可以将变量发送器附加到源值，然后将变量接收器模块插入到需要使用它的任何地方，而不是拖拽连线和在大型图形中滚动。

Here’s a basic example where a variable has been used to clean up the patch graph:

以下是一个使用变量来整理模块图的基础例子:

![](https://origami.design/public/images/documentation/variables-before-broadcast.png)

### Before:The Scroll Y position is connected to 3 different inputs, with cables overlapping parts of the patch graph.

### 开始:Scroll Y 位置连接3个不同的输入，连线与模块图的部分重叠。

https://origami.design/public/images/videos/variables-radio-wave.mp4

![](https://origami.design/public/images/documentation/variables-after-broadcast.png)

### After:A variable broadcaster for Scroll Y position has been connected to the scroll patch, and 3 variable receivers have replaced the cables from the scroll patch

### 结束:Scroll Y 位置的一个变量发送器已连接到滚动模块，3个变量接收器已替换滚动模块的连线

Variables can also help you navigate around a large patch graph. If you click on the ‘radio wave’ icon of a wireless receiver, Origami will pan the patch graph to reveal the source broadcaster. As your prototype grows in size, this can be a helpful way to understand what values are affecting your prototype, and where they’re being modified.

变量还可以帮助您在一个大的模块图中导航。如果你点击无线接收器的“无线电波”图标，Origami将平移模块图来显示源发送器。随着原型规模的增大，这可以帮助你理解什么值影响你的原型，以及它们在哪里被修改。

Variables can also be used to centralize values that you use throughout your prototype so that you can change a value in one place and have it update everywhere.

变量也可以用来集中你在整个原型中使用的值，这样你可以在一个地方更改一个值，就可以在各处更新它。

For instance, in the example above, there is a toolbar that fades out as the content scrolls beneath it, and the content also fades out as it scrolls offscreen. By setting a variable for the toolbar height, it can be used to transition the opacity of the toolbar as well as the scroll content.

例如，在上面的例子中，有一个工具栏，当内容在它下面滚动时，它会淡出，当它滚动出屏幕时，内容也会淡出。通过为工具栏高度设置一个变量，它可以用来过渡工具栏的不透明度以及滚动内容。

![](https://origami.design/public/images/documentation/variables-example.png)

### Example:Using variables to centralize & reuse values

示例:使用变量来集中和复用值

Using variables to define and reuse important values not only keeps the patch graph tidy, but also makes it easier to update your prototype.

使用变量来定义和复用重要的值不仅可以保持模块图的整洁，还可以让你更容易地更新原型。

For instance, if the design of the header changes to be taller, you only have to change the value once. (If you’re coming from a programming background, this is similar to defining a constant that you use throughout your code.)

例如，如果标题的设计更改为更高，您只需要更改一次值。(如果你有编程背景，这类似于在代码中定义一个常量。)

This also can help other people who you might share your prototype with quickly understand the important values you’re using throughout a prototype.

这也可以帮助那些与你分享原型的人快速理解你在整个原型中所使用的重要数值。

For instance, you might set up several variables for the UI text in your design, and then share it with a writer on your team to edit and try out different labels, without having to navigate all the logic of the prototype.

例如，你可以在设计中为UI文本设置多个变量，然后将其与团队中的作者共享，以便编辑和尝试不同的标签，而无需浏览原型的所有逻辑。

As your prototype becomes more complex, you’ll probably want to encapsulate functionality using ### [Components.](../Workflow/Components)The components you create can also take advantage of these centralized values with ### Global Variables### .

随着原型变得越来越复杂，您可能想要使用组件封装功能。您创建的组件也可以利用这些集中的值和全局变量。

# What Are Global Variables? 什么是全局变量?

Global variables in Origami are used to define values at a high level and propagate those values to wherever they are needed in the prototype. They can be used to change the appearance or functionality of an entire prototype. Global variable values cascade downward throughout components.

在Origami中，全局变量用于在较高级别定义值，并将这些值传播到原型中需要它们的任何位置。它们可以用来改变整个原型的外观或功能。全局变量值在整个组件中向下级联。

So, from any location in the prototype, a user is able to read from a global variable that is either in the same component, its parent component, or any ancestor component.

因此，在原型中的任何位置，用户都能够从同一个组件、其父组件或任何祖先组件中的全局变量中读取数据。

# How to Use Global Variables 怎么使用全局变量

Perform the following steps to use global variables in Origami:

执行以下步骤在Origami中使用全局变量:

- Insert a variable broadcaster with your desired name, type, and value into your Origami prototype. This will be where the global variable’s value is defined.
- Click the pop-up menu on upper right corner of the variable broadcaster and choose the option for Global from the scope menu. You can also right click on the variable broadcaster and choose the Scope menu item.
- Insert a variable receiver into any child component of the component in which the variable broadcaster is located. This will be where the global variable value is read.
- Click the name on the variable receiver to see a pop-up menu of all local variables defined in the current component as well as all of the global variables available to the current component.
- To access the value of a global variable broadcaster, choose that global variable name from the menu. The variable receiver will change its scope, name, type, and value to match that of the selected global variable broadcaster.
- 插入一个变量发送器与您想要的名称，类型，和值到您的Origami原型。这将是定义全局变量的地方。
- 点击变量发送器右上角的弹出菜单，并从范围菜单中选择全局选项。您也可以右键单击变量发送器，并选择Scope菜单项。
- 将变量接收器插入变量发送器所在组件的任何子组件中。这将是读取全局变量值的地方。
- 单击变量接收器上的名称，可以看到当前组件中定义的所有本地变量以及当前组件可用的所有全局变量的弹出菜单。
- 要访问全局变量发送器的值，请从菜单中选择该全局变量名。变量接收器将改变其范围、名称、类型和值，以匹配所选的全局变量发送器。

In the example from above, imagine we’ve made each item in our scrolling view into a self-contained Item View component. If we first change the scope of our Header Height variable at the root of our document to Global, we can now add a variable receiver inside the Item View component that’s connected to the Header Height variable. Now each item view can automatically fade out when its position overlaps the header height.

在上面的例子中，假设我们已经将滚动视图中的每个项目都变成了一个独立的项目视图组件。如果我们首先将文档根目录下的Header Height变量的作用范围更改为 Global，我们现在可以在 Item View 组件中添加一个变量接收器，该接收器连接到 Header Height 变量。现在每个项目视图可以在其位置与标题高度重叠时自动淡出。

![](https://origami.design/public/images/documentation/variables-header-height.png)

https://origami.design/public/images/videos/variables-global.mp4

# Global Variables are Cascading 全局变量是级联的

It’s important to note that when you define a global variable, it is accessible from the component it was created in, as well as any components contained within that component. The value cascades from the top level down to each child component that access it, including their children, and their children’s children, and so on. However, components can override an ancestor’s global variable by defining a new global variable with the same name and type of value.

需要注意的是，当您定义一个全局变量时，它可以从创建它的组件以及该组件中包含的任何组件访问。该值从顶层向下级联到访问它的每个子组件，包括它们的子组件和它们的子组件的子组件，等等。但是，组件可以通过定义具有相同名称和值类型的新全局变量来覆盖祖先的全局变量。

This is possible because global variable receivers get their values from the matching global variable broadcaster that’s nearest in the component hierarchy. So, if you want a certain value to apply to specific components in your prototype and then change the value to be different for other child components, you simply add another global variable broadcaster in one of the child components.

这是可能的，因为全局变量接收器从组件层次结构中最接近的匹配全局变量发送器获取它们的值。因此，如果你想要一个特定的值应用到原型中的特定组件，然后改变这个值，使其与其他子组件不同，你只需在其中一个子组件中添加另一个全局变量发送器。

Let’s take an example of applying a Dark Mode global variable to a prototype. Imagine you have an Editor component, which you’d like to match the system setting for Dark Mode. The background should be white when it’s in light mode, and black when it’s in dark mode. You might also have an inspector panel component in your Editor that should also match the rest of the UI. By setting a global variable for Dark Mode, at the top of your document, the Editor can receive the default value (based on the current system appearance, for example). The Inspector panel will also inherit the Dark Mode value from the root of the document.

让我们举一个将 Dark Mode 全局变量应用到原型的例子。假设您有一个Editor组件，您希望它与Dark Mode 的系统设置相匹配。背景应该是白色时，它在亮色模式，黑色时，它在黑暗模式。在编辑器中，您可能还有一个检查面板组件，它也应该与UI的其余部分相匹配。通过为 Dark Mode 设置一个全局变量，在你的文档的顶部，Editor可以接收到默认值(例如，基于当前的系统外观)。检查面板也将从文档的根目录继承暗模式值。

![](https://origami.design/public/images/documentation/variables-receivers1-diagram.png)

Now imagine your Editor component also has an embedded Photo View component. Instead of matching the system appearance, any UI you display over the Photo View should always have a dark appearance.

现在，假设你的编辑器组件也有一个嵌入式照片视图组件。与其匹配系统外观，你在照片视图上显示的任何UI都应该总是有一个黑色的外观。

By creating a new Dark Mode global broadcaster in the Photo View component, we can override the root level Dark Mode broadcaster’s value and ensure that any components placed within the Photo View always honor the dark appearance. Now, the exact same Inspector component we used before will automatically switch to dark mode, since it’s now receiving the Photo View component’s dark mode value.

通过在照片视图组件中创建一个新的暗模式全局发送器，我们可以覆盖根级暗模式发送器的值，并确保在照片视图中放置的任何组件总是遵循黑暗外观。现在，我们之前使用的检查器组件会自动切换到暗模式，因为它现在接收photoview组件的暗模式值。

![](https://origami.design/public/images/documentation/variables-receivers2-diagram.png)

------

# Conclusion 结论

Variables are a key tool to organize and simplify your Origami prototypes, allowing you to make your patch graph easier to understand, to consolidate logic, and even enable powerful new capabilities for components.

You can start small, by just using local variable broadcasters & receivers to make your patch graph more organized. As you advance to building custom components for yourself or others, consider ways global variables can make your components more powerful and easier to use.

变量是组织和简化Origami原型的关键工具，允许您使模块图更容易理解，整合逻辑，甚至为组件提供强大的新功能。

你可以从小处开始，通过使用局部可变发送器和接收器来让你的模块图更有组织。在为自己或他人构建自定义组件时，考虑全局变量可以使组件更强大、更容易使用的方法。
