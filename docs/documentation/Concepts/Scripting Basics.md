---
title: Scripting Basics
sidebar_position: 1
last_update:
  author: 蒯美政
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

1. Create the patch object.
2. Define its inputs and outputs.
3. Set the patch properties. (optional)
4. Add logic.
   - Reading and writing values.
5. Return the patch object.

**Create the patch object**.  创建模块对象

The first step is to create an object of the class [Patch](https://origami.design/documentation/concepts/ScriptingAPI.html#patch). This class is the interface provided to execute any JavaScript.

```
var patch = new Patch();
```

**Define its inputs and outputs.**  定义其输入和输出

`inputs` is an array of [PatchInput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput) and similarly `outputs` is an array of [PatchOutput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput). Create a port with Name, Type and optionally a default value. The order of each port in the array is the one that will be shown when this is converted into a patch (see image below)
A list of the types available in the Javascript File patch can be found here: [Types](https://origami.design/documentation/concepts/ScriptingAPI.html#types)

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

```
patch.alwaysNeedsToEvaluate = false;  
patch.loopAware = false;
```



**Add logic**.  添加逻辑

Every patch object must provide an evaluate function. This function doesn’t take any arguments and doesn’t return any values; the expectation is to read from the input ports and write to the output ports instead.
This evaluate function is the place to add the core functionality of the patch. The evaluate function will run any time at least one of the inputs changes. Unless the property
[alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/ScriptingAPI.html#patchalwaysneedstoevaluate-boolean-default-false) is set to `true.` In that case the evaluate function will be called every frame. A great deal of effort has been put into making Origami run as efficiently as possible by using a highly optimized evaluation schedule, so for most cases this should be set to `false`.

```
patch.evaluate = function() {  
  // Add logic here...  
}
```



**Reading and writing values.** 读写值

 In order to read the value of an input the script needs to reference the `inputs` array by index. For example: to read the value of the first input: `patch.inputs[0].value;`
Output values are set in a similar way, by assigning the value to the index of the `outputs` array. For example to write something on the first output: `patch.outputs[0].value = 10;`
For looped values use the `values` property (instead of just `value`). The `values` property makes it possible to read or write an Array of values to represent your looped values.
see more details on [PatchInput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput) and [PatchOutput](https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput)

**Return the object.**  返回对象

Finally we need to return the Patch object fully configured. Origami uses [IIFE](https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/) as a mechanism to load the Patch. That’s why returning the patch at the end is very important or Origami will throw an error.

```
return patch;
```

## Example 例子

Validating an email can become very complicated with patches, whereas Imperative programming can easily check for the characters needed for a valid email address.
Another advantage is that there are many more snippets of code in the internet that uses Imperative programming. For example a quick search for [how to validate an email with regular expressions](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)

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
The JavaScript Console can be found in the View Menu under Hide/Show JavaScript Console.
Once the console is open It will display the log messages from the last JavaScript patch selected.
JavaScript Console messages will come directly from the patch’s code, or from warnings or errors in the Script.
For example take this code: `patch.outputs[0].value = [];`
This will try to write an array to a single value. Thus the console will output the following warning: `WARNING: Could not convert a JavaScript value into an appropriate Origami type. Ignoring.`
Logging messages can accumulate quickly and Origami sets a max [limit](https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#maximum-log-messages) on them. This can make messages hard to track.
For this reason, Origami provides an additional method on `console` called `watch` . This works well for tracking specific variables through different evaluation cycles. For example:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo" height="auto" style="box-sizing: border-box; margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; -webkit-font-smoothing: antialiased;"></video>

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo" height="auto" style="box-sizing: border-box; margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; -webkit-font-smoothing: antialiased;"></video>

## Modifying a Script

Right clicking on any JavaScript patch will present the option to “*Open in default editor*“

![img](https://origami.design/public/images/documentation/scripting-editjsPatch.png)

Make sure you have a proper editor configured. It is very common that Chrome (or Safari) is the default app to open JavaScript files, but those are not editors. Check on [how to change the default app for any file type](https://www.imore.com/how-set-mac-app-default-when-opening-file).

Alternatively in the same contextual menu there’s the option to “*Open With*” Which lets you select from a list of possible apps that can edit a JavaScript file.

### Considerations when modifying a script.



#### Origami must be opened at all times while editing a JavaScript Patch.

Modifying a script could involve also changing the structure of the Patch. For example adding inputs or outputs. Those changes need to be reflected in the patch graph because of that Origami needs to be open to be able to process those changes. Any changes made outside this workflow could be missed or cause malfunction on the prototype.

Be aware that once you close Origami. The JavaScript file you were editing is deleted. You should not try to reuse that file. Depending on the editor being used it could be more or less prominent the fact that is not safe to keep editing the file at that path. For example notice in VS Code it shows in the title the file has been deleted.

![img](https://origami.design/public/images/documentation/scripting-deletedFile.png)

#### Effectively modifying inputs & outputs .

When modifying the inputs or outputs on a JavaScript Patch that already has connections. It is important to remember that it is safe to change the name or even the type of the Port and Origami will keep the connections. In general as long as the order of the ports stays the same, the connections can be preserved. Removing an input and then re-adding it would lose any previous connection.

Changing the order of two ports is effectively the same as renaming them. Since the access of the ports is always by index.

#### Duplicated JavaScript Patch.

Duplicated JavaScript Patches point to the same file source. Therefore modifying the file would have effect in all those same patches. This only happens within the context of a same file. Copy/Paste a JavaScript Patch to a different file creates a completely new JavaScript file.

## Limitations

### Host/Browser calls.

It is very common to see JS code that uses calls like `alert(...)` or `document.getElementById(...)`, etc
These methods are specific to a browser [BOM](https://www.w3schools.com/js/js_window.asp) or to HTML [DOM](https://www.w3schools.com/js/js_htmldom.asp). And for that reason they aren’t part of the JavaScript language itself and therefore not supported in Origami.
Other similar unsupported APIs that aren’t part of JavaScript but provided by browsers are: Ajax, WebWorkers, WebStorage, Canvas, etc.

### Modules

It is not possible to split your script in multiple files and import modules. The whole code must be contained within the same file and must comply with the steps outlined in [Getting Started](https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#getting-started).

### Hermes Unsupported Features

Hermes is the engine Origami uses to execute JavaScript. Here’s a [link](https://github.com/facebook/hermes/blob/main/doc/Features.md) of its unsupported features. But broadly, Javascript File scripting is a logic-focused implementation and as such it doesn’t support the use of modules or external libraries.

### Unsupported Origami Types

Not all Origami types are supported. See more details of the [supported types](https://origami.design/documentation/concepts/ScriptingAPI.html#types). Overall types that require a resource are not supported; Image or Video for example.

### Maximum log messages

The console holds a maximum of 50 messages, after that it will clear the old ones. A better way is to use `console.watch` It is more performant and alleviates the problem of saturating the console with messages.
