---
title: Scripting Basics 脚本基础
sidebar_position: 25
last_update:
  author: 蒯美政
---

# Scripting Basics 脚本基础

---

模块编辑器在 Origami 中提供了一个强大灵活的[编程环境](https://origami.design/tutorials/getting-started/coming-from-code.html)。然而，有时传统的命令式编程可能是更好的解决方案。

多亏了新的 Javascript 模块，Origami 现在可以通过 Hermes 运行时直接运行 Javascript ([ES6\*](https://github.com/facebook/hermes/blob/main/doc/Features.md))。

## Getting a script into Origami 在 Origami 中编写脚本

有两种方法添加 JavaScript 模块到 Origami:

<video src="https://origami.design/public/images/videos/scripting-droppingJSPatch.mov
" height="500" width="100%" autoplay="" muted="" loop="loop" align="left"></video>

将有效的.js 文件拖放到模块图中

<video src="https://origami.design/public/images/videos/scripting-addJs.mov
" height="500" width="100%" autoplay="" muted="" loop="loop"></video>

通过模块选择器插入 JavaScript 模块。

## Getting started 快速开始

这个重新创建[splitter](https://origami.design/documentation/patches/builtin.splitter.html)的基本示例脚本，演示了创建一个工作的Javascript文件模块所需的元素。

结果将在模块编辑器中生成一个新的自定义模块，其中包含脚本定义的输入逻辑和输出。

```
var patch = new Patch();

patch.inputs = [
  new PatchInput("Input", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("Output", types.NUMBER),
];

patch.alwaysNeedsToEvaluate = false;
patch.loopAware = false;

patch.evaluate = function() {
  patch.outputs[0].value = patch.inputs[0].value;
}

return patch;
```

### Breaking down the necessary pieces of a script: 分解步骤的必要部分:

1. 创建模块对象
2. 定义其输入和输出
3. 设置模块属性。(可选)
4. 添加逻辑
   - 读写值
5. 返回模块对象

#### Create the patch object. 创建模块对象

第一步是创建类[Patch](https://origami.design/documentation/concepts/ScriptingAPI.html#patch)的对象。这个类是用来执行任何 JavaScript 的接口。

```
var patch = new Patch();
```

#### Define its inputs and outputs. 定义其输入和输出

`inputs`是[PatchInput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput)的数组，同样`outputs`是[PatchOutput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput)的数组。创建一个带有 Name、Type 和可选默认值的端口。数组中每个端口的顺序将在转换为模块时显示(见下图)

Javascript 文件模块中可用的类型列表可以在这里找到:[types](https://origami.design/documentation/concepts/ScriptingAPI.html#types)

```
patch.inputs = [
  new PatchInput("Input", types.NUMBER, 0),
];

patch.outputs = [
 new PatchOutput("Output", types.NUMBER),
];
```

<div className="patch-container">
      <div className="patch processor">
          <h3>Javscript Patch</h3>
          <ul className="inputs">
              <li>Input <span>0</span></li>
          </ul>
          <ul className="outputs">
              <li>Output <span>0</span></li>
          </ul>
      </div>
</div>

#### Set the patch properties. 设置模块属性

有几个属性可以改变评估模块的方式。([loopAware](https://origami.design/documentation/concepts/ScriptingAPI.html#patchloopaware-boolean-default-false), [alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/ScriptingAPI.html#patchalwaysneedstoevaluate-boolean-default-false))这一步是可选的，因为这些属性已经有了默认值 false。

```
patch.alwaysNeedsToEvaluate = false;
patch.loopAware = false;
```

#### Add logic. 添加逻辑

每个模块对象必须提供一个 evaluate 函数。这个函数不接受任何参数，也不返回任何值；我们期望从输入端口读取数据，并向输出端口写入数据。

这个评估函数是添加模块核心功能的地方。只要至少一个输入发生变化，evaluate 函数就会运行。除非属性[alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/ScriptingAPI.html#patchalwaysneedstoevaluate-boolean-default-false)被设置为' true '。

在这种情况下，每一帧都会调用 evaluate 函数。为了使 Origami 尽可能高效地运行，我们已经投入了大量的精力，使用高度优化的评估时间表，所以在大多数情况下，这应该被设置为`false`。

```
patch.evaluate = function() {
  // Add logic here...
}
```

#### Reading and writing values. 读写值

为了读取输入的值，脚本需要通过索引引用“输入”数组。例如:读取第一个输入的值：`patch.inputs[0].value; `

输出值也以类似的方式设置，即将值赋给' outputs '数组的索引。例如，在第一个输出上写一些东西：`patch.outputs[0]。值= 10;`

对于循环值，使用`values`属性(instead of just `value`)。`values`属性可以读取或写入一个数组的值来表示循环的值。

详情可查看[PatchInput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput) 和 [PatchOutput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput)。

#### Return the object. 返回对象

最后，我们需要返回完全配置的 Patch 对象。Origami 使用[IIFE](https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/)作为加载模块的机制。这就是为什么在最后返回模块是非常重要的，否则 Origami 将抛出一个错误。

```
return patch;
```

## Example 例子

使用模块验证电子邮件可能变得非常复杂，而命令式编程可以轻松检查有效电子邮件地址所需的字符。

另一个优点是在网上有更多的命令式编程的代码片段。例如，快速搜索[如何用正则表达式验证电子邮件](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)

```
var patch = new Patch();

patch.inputs = [
  new PatchInput("Email", types.STRING, ""),
];

patch.outputs = [
  new PatchOutput("Valid", types.BOOLEAN, false),
];

patch.evaluate = function() {
  const regexp =
  new RegExp(\["\[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-\]",
               '+@\[a-zA-Z0-9\](?:\[a-zA-Z0-9-\]{0,61}\[a-zA-Z0-9\])',
               '?(?:\\.\[a-zA-Z0-9\](?:\[a-zA-Z0-9-\]{0,61}',
               '\[a-zA-Z0-9\])?)*$'\].join(''));
  patch.outputs\[0\].value = regexp.test(patch.inputs\[0\].value);
}

return patch;
```

这个脚本生成一个模块，可以轻松检查输入字符串是否具有有效的电子邮件格式。

## Debugging 调试

目前还没有合适的工具来调试 JavaScript 模块，比如断点。然而，通过使用`Console .log(…)`可以将消息输出到 Origami 的 JavaScript 控制台。

JavaScript 控制台可以在隐藏/显示 JavaScript 控制台的视图菜单中找到。

一旦控制台打开，它将显示来自选定的最后一个 JavaScript 模块的日志消息。

JavaScript 控制台消息将直接来自模块的代码，或者来自脚本中的警告或错误。

For example take this code: `patch.outputs[0].value = [];`

例如，下面这段代码:`patch.outputs[0]。值=[];`

这将尝试将一个数组写入单个值。因此控制台将输出以下警告:`警告:无法将JavaScript值转换为适当的Origami类型。忽略.`

日志消息可以快速累积，Origami 为它们设置了一个最大[限制](https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#maximum-log-messages)。这可能会使信息难以跟踪。

因此，Origami 在`console`上提供了一个额外的方法，称为`watch`。这对于通过不同的评估周期跟踪特定变量非常有效。例如:

<video src="https://origami.design/public/images/videos/scripting-console-log.mov" 
height="500" width="100%" autoplay="" muted="" loop="loop"></video>

<video src="https://origami.design/public/images/videos/scripting-console-watch.mov" 
height="500" width="100%" autoplay="" muted="" loop="loop"></video>

## Modifying a Script 修改脚本

右键单击任何 JavaScript 模块都会出现 “_在默认编辑器中打开_” 选项。

![img](https://origami.design/public/images/documentation/scripting-editjsPatch.png)

确保配置了正确的编辑器。Chrome(或 Safari)通常是打开 JavaScript 文件的默认应用程序，但它们不是编辑器。查看[如何为任何文件类型更改默认应用程序](https://www.imore.com/how-set-mac-app-default-when-opening-file)。

此外，在相同的上下文菜单中还有一个选项 “_Open With_” ，它可以让你从可以编辑 JavaScript 文件的应用程序列表中进行选择。

### Considerations when modifying a script. 修改脚本时的注意事项。

#### Origami must be opened at all times while editing a JavaScript Patch. Origami 必须在编辑 JavaScript 模块时一直打开。

修改脚本还可能涉及修改模块的结构。

例如，增加输入或输出。这些变化需要反映在模块图中，因为 Origami 需要是开放的，以便能够处理这些变化。在此工作流之外所做的任何更改都可能被遗漏或导致原型出现故障。

注意，一旦你关闭 Origami。您正在编辑的 JavaScript 文件被删除。

您不应该尝试重用该文件。根据所使用的编辑器，在该路径上继续编辑文件是不安全的这一事实可能或多或少会很突出。例如，在 VS Code 中，它在标题中显示文件已被删除。

![img](https://origami.design/public/images/documentation/scripting-deletedFile.png)

#### Effectively modifying inputs & outputs. 有效修改输入和输出。

当修改已连接的 JavaScript 模块上的输入或输出时。重要的是要记住，更改端口的名称甚至类型是安全的，Origami 将保持连接。

一般来说，只要端口的顺序保持不变，就可以保持连接。删除一个输入然后重新添加它会丢失之前的任何连接。

改变两个端口的顺序实际上与重命名它们相同。因为访问端口总是通过索引。

#### Duplicated JavaScript Patch. 复制 JavaScript 模块。

重复的 JavaScript 模块指向相同的文件源。因此，修改该文件将在所有这些相同的模块中生效。

这只发生在同一个文件的上下文中。复制/粘贴一个 JavaScript 模块到另一个文件将创建一个全新的 JavaScript 文件。

## Limitations 限制

### Host/Browser calls. 主机/浏览器调用。

经常会看到 JS 代码使用`alert(…)`或`document.getElementById(…)`等调用

这些方法是特定于浏览器[BOM](https://www.w3schools.com/js/js_window.asp)或 HTML [DOM](https://www.w3schools.com/js/js_htmldom.asp)的。因此，它们不是 JavaScript 语言本身的一部分，因此 Origami 不支持它们。

其他类似的不受支持的 api，不是 JavaScript 的一部分，但由浏览器提供:Ajax, WebWorkers, WebStorage, Canvas 等。

### Modules 模块

不可能将脚本拆分为多个文件并导入模块。整个代码必须包含在同一个文件中，并且必须符合[入门](https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#getting-started)中概述的步骤。

### Hermes Unsupported Features Hermes 不支持的功能

Hermes 是 Origami 用来执行 JavaScript 的引擎。这里有一个[链接](https://github.com/facebook/hermes/blob/main/doc/Features.md)它不支持的功能。

但总的来说，Javascript 文件脚本是一个以逻辑为中心的实现，因此它不支持使用模块或外部库。

### Unsupported Origami Types 不支持的 Origami 类型

并不是所有的 Origami 类型都被支持。查看[支持的类型](https://origami.design/documentation/concepts/ScriptingAPI.html#types)的更多详细信息。不支持需要资源的整体类型；例如图像或视频。

### Maximum log messages 最大日志消息

控制台最多保存 50 条消息，之后将清除旧的消息。更好的方法是使用`console.watch`。它的性能更好，并缓解了控制台充斥着消息的问题。
