---
title: Scripting Basics
sidebar_position: 1
last_update:
  author: 蒯美政
---

# Scripting Basics 脚本基础

------

The Patch Editor offers a robust and flexible [programming environment](https://origami.design/tutorials/getting-started/coming-from-code.html) in Origami. However there are times when traditional imperative programming can be a better solution.

模块编辑器在Origami中提供了一个健壮而灵活的[编程环境](https://origami.design/tutorials/getting-started/coming-from-code.html)。然而，有时传统的命令式编程可能是更好的解决方案。

Thanks to the new Javascript Patch, Origami can now directly run JavaScript ([ES6*](https://github.com/facebook/hermes/blob/main/doc/Features.md)) via its Hermes runtime.

多亏了新的Javascript模块，Origami现在可以通过Hermes运行时直接运行Javascript ([ES6*](https://github.com/facebook/hermes/blob/main/doc/Features.md))。

## Getting a script into Origami 在Origami中编写脚本

There are two ways to add a JavaScript Patch into Origami:

有两种方法添加JavaScript模块到Origami:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo" height="auto" draggable="true" style="box-sizing: border-box; margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; -webkit-font-smoothing: antialiased;"></video>

Drag and drop a valid .js file into the patch graph

将有效的.js文件拖放到模块图中

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo" height="auto" style="box-sizing: border-box; margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; -webkit-font-smoothing: antialiased;"></video>

Insert a JavaScript Patch via the Patch Picker.

通过模块选择器插入JavaScript模块。

The result will be a new custom patch in the patch editor that contains the inputs logic and outputs defined by the script.

## Getting started 快速开始

This basic example script, recreating a [splitter](https://origami.design/documentation/patches/builtin.splitter.html), illustrates the elements needed to create a working Javascript File patch.

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

1. Create the patch object. 创建模块对象
2. Define its inputs and outputs. 定义其输入和输出
3. Set the patch properties. (optional) 设置模块属性。(可选)
4. Add logic. 添加逻辑
   - Reading and writing values. 读写值
5. Return the patch object. 返回模块对象

**Create the patch object**.  创建模块对象

The first step is to create an object of the class [Patch](https://origami.design/documentation/concepts/ScriptingAPI.html#patch). This class is the interface provided to execute any JavaScript.

第一步是创建类[Patch](https://origami.design/documentation/concepts/ScriptingAPI.html#patch)的对象。这个类是用来执行任何JavaScript的接口。

```
var patch = new Patch();
```

**Define its inputs and outputs.**  定义其输入和输出

`inputs` is an array of [PatchInput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput) and similarly `outputs` is an array of [PatchOutput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput). Create a port with Name, Type and optionally a default value. The order of each port in the array is the one that will be shown when this is converted into a patch (see image below)

' inputs '是[PatchInput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput)的数组，同样' outputs '是[PatchOutput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput)的数组。创建一个带有Name、Type和可选默认值的端口。数组中每个端口的顺序将在转换为模块时显示(见下图)

A list of the types available in the Javascript File patch can be found here: [Types](https://origami.design/documentation/concepts/ScriptingAPI.html#types)

Javascript文件模块中可用的类型列表可以在这里找到:[types](https://origami.design/documentation/concepts/ScriptingAPI.html#types)

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


------



**Set the patch properties**. 设置模块属性

 There are a few properties that can change how a patch is evaluated. ([loopAware](https://origami.design/documentation/concepts/ScriptingAPI.html#patchloopaware-boolean-default-false), [alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/ScriptingAPI.html#patchalwaysneedstoevaluate-boolean-default-false)) This step is optional, as these properties already have a default value of false.

有几个属性可以改变评估模块的方式。这一步是可选的，因为这些属性已经有了默认值false。

```
patch.alwaysNeedsToEvaluate = false;  
patch.loopAware = false;
```



**Add logic**.  添加逻辑

Every patch object must provide an evaluate function. This function doesn’t take any arguments and doesn’t return any values; the expectation is to read from the input ports and write to the output ports instead.

每个模块对象必须提供一个evaluate函数。这个函数不接受任何参数，也不返回任何值;我们期望从输入端口读取数据，并向输出端口写入数据。

This evaluate function is the place to add the core functionality of the patch. The evaluate function will run any time at least one of the inputs changes. Unless the property[alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/ScriptingAPI.html#patchalwaysneedstoevaluate-boolean-default-false) is set to `true.` 

这个评估函数是添加模块核心功能的地方。只要至少一个输入发生变化，evaluate函数就会运行。除非属性[alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/ScriptingAPI.html#patchalwaysneedstoevaluate-boolean-default-false)被设置为' true '。

In that case the evaluate function will be called every frame. A great deal of effort has been put into making Origami run as efficiently as possible by using a highly optimized evaluation schedule, so for most cases this should be set to `false`.

在这种情况下，每一帧都会调用evaluate函数。为了使Origami尽可能高效地运行，我们已经投入了大量的精力，使用高度优化的评估时间表，所以在大多数情况下，这应该被设置为“false”。

```
patch.evaluate = function() {  
  // Add logic here...  
}
```



**Reading and writing values.** 读写值

In order to read the value of an input the script needs to reference the `inputs` array by index. For example: to read the value of the first input: `patch.inputs[0].value;`

为了读取输入的值，脚本需要通过索引引用“输入”数组。例如:读取第一个输入的值:' patch.inputs[0].value; '

Output values are set in a similar way, by assigning the value to the index of the `outputs` array. For example to write something on the first output: `patch.outputs[0].value = 10;`

输出值也以类似的方式设置，即将值赋给' outputs '数组的索引。例如，在第一个输出上写一些东西:' patch.outputs[0]。值= 10;”

For looped values use the `values` property (instead of just `value`). The `values` property makes it possible to read or write an Array of values to represent your looped values.

对于循环值，使用' values '属性(而不是仅仅使用' value ')。' values '属性可以读取或写入一个数组的值来表示循环的值。

see more details on [PatchInput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput) and [PatchOutput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput)

详情可查看[PatchInput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput) 和 [PatchOutput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput)。

**Return the object.**  返回对象

Finally we need to return the Patch object fully configured. Origami uses [IIFE](https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/) as a mechanism to load the Patch. That’s why returning the patch at the end is very important or Origami will throw an error.

最后，我们需要返回完全配置的Patch对象。Origami使用[IIFE](https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/)作为加载模块的机制。这就是为什么在最后返回模块是非常重要的，否则Origami将抛出一个错误。

```
return patch;
```

## Example 例子

Validating an email can become very complicated with patches, whereas Imperative programming can easily check for the characters needed for a valid email address.

使用模块验证电子邮件可能变得非常复杂，而命令式编程可以轻松检查有效电子邮件地址所需的字符。

Another advantage is that there are many more snippets of code in the internet that uses Imperative programming. For example a quick search for [how to validate an email with regular expressions](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)

另一个优点是在互联网上有更多的代码片段使用命令式编程。例如，快速搜索[如何用正则表达式验证电子邮件](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)

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


This script generates a single patch that easily checks if an input string has a valid email format.

## Debugging 调试

Currently there are no proper tools to debug a JavaScript Patch such as Breakpoints. However it is possible to output messages to the Origami’s JavaScript Console by using `console.log(...)` .

目前还没有合适的工具来调试JavaScript模块，比如断点。然而，通过使用' Console .log(…)'可以将消息输出到Origami的JavaScript控制台。

The JavaScript Console can be found in the View Menu under Hide/Show JavaScript Console.

JavaScript控制台可以在隐藏/显示JavaScript控制台的视图菜单中找到。

Once the console is open It will display the log messages from the last JavaScript patch selected.

一旦控制台打开，它将显示来自选定的最后一个JavaScript补丁的日志消息。

JavaScript Console messages will come directly from the patch’s code, or from warnings or errors in the Script.

JavaScript控制台消息将直接来自补丁的代码，或者来自脚本中的警告或错误。

For example take this code: `patch.outputs[0].value = [];`

例如，下面这段代码:`patch.outputs[0]。值=[];`

This will try to write an array to a single value. Thus the console will output the following warning: `WARNING: Could not convert a JavaScript value into an appropriate Origami type. Ignoring.`

这将尝试将一个数组写入单个值。因此控制台将输出以下警告:'警告:无法将JavaScript值转换为适当的Origami类型。Ignoring.”

Logging messages can accumulate quickly and Origami sets a max [limit](https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#maximum-log-messages) on them. This can make messages hard to track.

日志消息可以快速累积，Origami为它们设置了一个最大[限制](https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#maximum-log-messages)。这可能会使信息难以跟踪。

For this reason, Origami provides an additional method on `console` called `watch` . This works well for tracking specific variables through different evaluation cycles. For example:

因此，Origami在“console”上提供了一个额外的方法，称为“watch”。这对于通过不同的评估周期跟踪特定变量非常有效。例如:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo" height="auto" style="box-sizing: border-box; margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; -webkit-font-smoothing: antialiased;"></video>

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo" height="auto" style="box-sizing: border-box; margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; -webkit-font-smoothing: antialiased;"></video>

## Modifying a Script 修改脚本

Right clicking on any JavaScript patch will present the option to “*Open in default editor*“

![img](https://origami.design/public/images/documentation/scripting-editjsPatch.png)

Make sure you have a proper editor configured. It is very common that Chrome (or Safari) is the default app to open JavaScript files, but those are not editors. Check on [how to change the default app for any file type](https://www.imore.com/how-set-mac-app-default-when-opening-file).

Alternatively in the same contextual menu there’s the option to “*Open With*” Which lets you select from a list of possible apps that can edit a JavaScript file.

### Considerations when modifying a script. 修改脚本时的注意事项。



#### Origami must be opened at all times while editing a JavaScript Patch. Origami必须在编辑JavaScript模块时一直打开。

Modifying a script could involve also changing the structure of the Patch. For example adding inputs or outputs. Those changes need to be reflected in the patch graph because of that Origami needs to be open to be able to process those changes. Any changes made outside this workflow could be missed or cause malfunction on the prototype.

Be aware that once you close Origami. The JavaScript file you were editing is deleted. You should not try to reuse that file. Depending on the editor being used it could be more or less prominent the fact that is not safe to keep editing the file at that path. For example notice in VS Code it shows in the title the file has been deleted.

![img](https://origami.design/public/images/documentation/scripting-deletedFile.png)

#### Effectively modifying inputs & outputs . 有效修改输入和输出。

When modifying the inputs or outputs on a JavaScript Patch that already has connections. It is important to remember that it is safe to change the name or even the type of the Port and Origami will keep the connections. In general as long as the order of the ports stays the same, the connections can be preserved. Removing an input and then re-adding it would lose any previous connection.

Changing the order of two ports is effectively the same as renaming them. Since the access of the ports is always by index.

#### Duplicated JavaScript Patch. 复制JavaScript模块。

Duplicated JavaScript Patches point to the same file source. Therefore modifying the file would have effect in all those same patches. This only happens within the context of a same file. Copy/Paste a JavaScript Patch to a different file creates a completely new JavaScript file.

## Limitations 限制

### Host/Browser calls. 主机/浏览器调用。

It is very common to see JS code that uses calls like `alert(...)` or `document.getElementById(...)`, etc
These methods are specific to a browser [BOM](https://www.w3schools.com/js/js_window.asp) or to HTML [DOM](https://www.w3schools.com/js/js_htmldom.asp). And for that reason they aren’t part of the JavaScript language itself and therefore not supported in Origami.
Other similar unsupported APIs that aren’t part of JavaScript but provided by browsers are: Ajax, WebWorkers, WebStorage, Canvas, etc.

### Modules 模块

It is not possible to split your script in multiple files and import modules. The whole code must be contained within the same file and must comply with the steps outlined in [Getting Started](https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#getting-started).

### Hermes Unsupported Features Hermes不支持的功能

Hermes is the engine Origami uses to execute JavaScript. Here’s a [link](https://github.com/facebook/hermes/blob/main/doc/Features.md) of its unsupported features. But broadly, Javascript File scripting is a logic-focused implementation and as such it doesn’t support the use of modules or external libraries.

### Unsupported Origami Types 不支持的Origami类型

Not all Origami types are supported. See more details of the [supported types](https://origami.design/documentation/concepts/ScriptingAPI.html#types). Overall types that require a resource are not supported; Image or Video for example.

### Maximum log messages 最大日志消息

The console holds a maximum of 50 messages, after that it will clear the old ones. A better way is to use `console.watch` It is more performant and alleviates the problem of saturating the console with messages.
