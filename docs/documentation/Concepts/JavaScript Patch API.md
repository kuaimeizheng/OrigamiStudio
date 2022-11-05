---
title: JavaScript Patch API
sidebar_position: 10
last_update:
  author: 蒯美政
---

# JavaScript Patch API

---

## Patch 模块

### `new Patch()` _constructor_

创建一个新的模块对象。您应该创建这些对象中的一个，并设置其属性。

### `Patch.inputs` _array_

一个[PatchInput](https://origami.design/documentation/concepts/scriptingapi#patchinput)对象数组，定义模块的输入端口。此属性只能在顶层定义；你不能在以后的模块执行过程中更新它。

### `Patch.outputs` _array_

一个[PatchOutput](https://origami.design/documentation/concepts/scriptingapi#patchoutput)对象数组，定义模块的输出端口。此属性只能在顶层定义;你不能在以后的模块执行过程中更新它。

### `Patch.loopAware` _boolean_ (default: false)

如果此模块能够处理 Origami 循环中的值，则将此属性设置为`true`。使用[PatchInput.values](https://origami.design/documentation/concepts/scriptingapi#patchinputvalues-array-read-only)数组从循环中访问值。

如果你不将这个属性设置为`true`，那么将会创建多个模块的 JavaScript 环境副本来循环处理每个值。

### `Patch.alwaysNeedsToEvaluate` _boolean_ (default: false)

如果你需要在每一帧上计算模块，请将此属性设置为“true”。在大多数情况下，这是不需要的，只会对性能产生负面影响。避免将此设置为“true”。

### `Patch.evaluate()` _function_

在这个函数中定义模块逻辑。当[Patch.alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/scriptingapi#patchalwaysneedstoevaluate-boolean-default-false)被设置为`true`时，它将根据引擎运行循环或每一帧被调用。

---

## PatchInput 模块输入

### `new PatchInput(name, type, [defaultValue])` _constructor_

使用这个构造函数为模块创建一个新的输入端口。您必须给端口一个名称(可能是空字符串)和一个类型(来自[types](https://origami.design/documentation/concepts/scriptingapi#types) enum)。你也可以给输入一个默认值；如果不提供，则将使用所选类型的默认默认值。

### `PatchInput.name` _string_

输入端口的名称，在模块图中显示在端口旁边。

### `PatchInput.type`

输入端口的类型。必须是[types](https://origami.design/documentation/concepts/scriptingapi#types)枚举中的一个值。

### `PatchInput.value` _read-only_

传入输入端口的当前值。

### `PatchInput.values` _array, read-only_

如果[patch.loopAware](https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false)属性被设置为`true`，并且输入端口接收一个循环作为输入，那么该属性是循环中的值的数组。否则，该属性是一个数组，包含一个等于[PatchInput.value](https://origami.design/documentation/concepts/scriptingapi#patchinputvalue-read-only)的值。

### `PatchInput.defaultValue`

输入端口的默认值。

### `PatchInput.isDirty()` _function_

如果输入端口的值自上次计算以来发生了变化，则返回`true`，否则返回`false`。

### `PatchInput.readRising()` _function_

如果输入端口刚刚更改为非零/`true`值，则返回`true`，否则返回`false`。在处理脉冲时很有用(参见[State & Pulse](https://origami.design/documentation/concepts/PulseSignal.html))

### `PatchInput.readFalling()` _function_

如果输入端口刚刚更改为 0 / "falsey" 值，则返回`true`，否则返回`false`。在处理脉冲时很有用(参见[State & Pulse](https://origami.design/documentation/concepts/PulseSignal.html))

---

## PatchOutput 模块输出

### `new PatchOutput(name, type, [defaultValue])` _constructor_

使用这个构造函数为模块创建一个新的输出端口。您必须给端口一个名称(可能是空字符串)和一个类型(来自[types](https://origami.design/documentation/concepts/scriptingapi#types) enum)。你也可以给输入一个默认值;如果不提供，则将使用所选类型的默认默认值。

### `PatchOutput.name` _string_

输出端口的名称，在模块图中显示在端口旁边。

### `PatchOutput.type`

输出端口的类型。必须是[types](https://origami.design/documentation/concepts/scriptingapi#types)枚举中的一个值。

### `PatchOutput.value` _read-only_

传递到输出端口的当前值。

### `PatchOutput.values` _array, read-only_

如果[patch.loopAware](https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false)属性被设置为`true`，您可以将该属性设置为从端口输出一个值循环。该属性必须是一个数组，并且数组的每个元素的类型必须与端口的类型匹配。

### `PatchOutput.defaultValue`

输出端口的默认值。

### `PatchOutput.pulse()` _function_

如果这个输出的类型是[PULSE](https://origami.design/documentation/concepts/scriptingapi#pulse)，您可以调用这个函数在这个输出端口上发送一个脉冲。

---

## Types 类型

JavaScript 模块不支持 Origami 中所有可用的数据类型，例如图像、声音和视频不支持。下面是应该用于[PatchInput](https://origami.design/documentation/concepts/scriptingapi#patchinput)和[PatchOutput](https://origami.design/documentation/concepts/scriptingapi#patchoutput)的类型列表。

### `NUMBER`

Origami 中大多数模块的默认类型。它是一个可通用使用的 64 位浮动值。

### `PROGRESS`

它是[NUMBER](https://origami.design/documentation/concepts/scriptingapi#number)类型的别名。然而可以提供一个语义意义，这个数字的意图是在 0-1 之间规范化(参见[Progress](https://origami.design/documentation/patches/builtin.progress.html))。

### `POSITION`

具有两个浮动值组件`x`和`y`的矢量类型。例如:`console.log('point:',point.x, point.y)`(参见[Point](https://origami.design/documentation/patches/builtin.point.html))

### `SIZE`

一个包含两个组件的矢量类型，如[POSITION](https://origami.design/documentation/concepts/scriptingapi#position)。不同之处在于，模块图中的 UI 会将端口视为 Size，但在 JavaScript 端，它应该使用`x`表示宽度，`y`表示高度访问组件。

### `ANCHOR`

一个包含两个组件的矢量类型，如[POSITION](https://origami.design/documentation/concepts/scriptingapi#position)。不同之处在于，模块图中的 UI 将把端口视为锚点，但在 JavaScript 端，它应该使用`x`和`y`值访问组件，这些值的范围预计在 0-1 之间。

### `POINT3D`

一个具有三个浮动值分量`x`， `y`和`z`的矢量类型。例如:`console.log('point:',point.x, point.y, point.z)`(参见[Point3D](https://origami.design/documentation/patches/builtin.point3d.html))

### `POINT4D`

一个具有 4 个浮动值分量`x`， `y`， `z`和`w`的矢量类型。例如:`console.log('point:',point.x, point.y, point.z)`(参见[Vec4](https://origami.design/documentation/patches/builtin.vec4.html))

### `COLOR`

具有 4 个组件的矢量类型，如[POINT4D](https://origami.design/documentation/concepts/scriptingapi#point4d)。这些组件需要通过`x`，`y`， `z`和`w`来访问。这些组件表示 RGBA 格式的一种颜色，`x`为红色，`y`为绿色，`z`为蓝色，`w`对应 alpha 通道。所有值都从 0-1 标准化(参见[Color to RGB](https://origami.design/documentation/patches/builtin.color.torgb.html))

### `BOOLEAN`

类型可以是`true`或`false`(查看[State & Pulses](https://origami.design/documentation/concepts/PulseSignal.html))。

### `PULSE`

类似于[BOOLEAN](https://origami.design/documentation/concepts/scriptingapi#boolean)，它只能保存`true`或`false`，但它是一个瞬时值，不会随着时间的推移而持久(参见[State & Pulse](https://origami.design/documentation/concepts/PulseSignal.html))。

### `INTEGER`

不是分数的数值。

### `ENUM`

模块图中的 UI 将其显示为一个值的列表，但从 JavaScript 的角度来看，这是一个[INTEGER](https://origami.design/documentation/concepts/scriptingapi#integer)，其中值表示列表中元素的索引。

### `STRING`

该类型表示一个文本。

### `JSON`

该类型表示一个 JSON 对象(查看 [JSON Object](https://origami.design/documentation/patches/builtin.structure.object.html))。
