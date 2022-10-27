---
title: JavaScript Patch API
sidebar_position: 5
last_update:
  author: 蒯美政
---

# JavaScript Patch API

## Patch 模块

### `new Patch()` _constructor_

Creates a new patch object. You should create exactly one of these objects, set its properties.

创建一个新的模块对象。您应该创建这些对象中的一个，并设置其属性。

### `Patch.inputs` _array_

An array of [PatchInput](https://origami.design/documentation/concepts/scriptingapi#patchinput) objects that define the input ports to the patch. This property may only be defined at the top-level; you may not update it later during patch execution.

一个[PatchInput](https://origami.design/documentation/concepts/scriptingapi#patchinput)对象数组，定义模块的输入端口。此属性只能在顶层定义;你不能在以后的模块执行过程中更新它。

### `Patch.outputs` _array_

An array of [PatchOutput](https://origami.design/documentation/concepts/scriptingapi#patchoutput) objects that define the output ports to the patch. This property may only be defined at the top-level; you may not update it later during patch execution.

一个[PatchOutput](https://origami.design/documentation/concepts/scriptingapi#patchoutput)对象数组，定义模块的输出端口。此属性只能在顶层定义;你不能在以后的模块执行过程中更新它。

### `Patch.loopAware` _boolean_ (default: false)

Set this property to `true` if this patch is capable of processing values in an Origami loop. Use [PatchInput.values](https://origami.design/documentation/concepts/scriptingapi#patchinputvalues-array-read-only) array to access values from loops.
If you don’t set this property to `true`, then multiple copies of the patch’s JavaScript environment will be created to process each value in a loop.

如果此模块能够处理 Origami 循环中的值，则将此属性设置为“true”。使用[PatchInput.values](https://origami.design/documentation/concepts/scriptingapi#patchinputvalues-array-read-only)数组从循环中访问值。
如果你不将这个属性设置为“true”，那么将会创建多个模块的 JavaScript 环境副本来循环处理每个值。

### `Patch.alwaysNeedsToEvaluate` _boolean_ (default: false)

Set this property to `true` if you need the the patch to be evaluated on every frame. In most cases this is not needed and will only affect performance negatively. Avoid setting this to `true`.

如果你需要在每一帧上计算模块，请将此属性设置为“true”。在大多数情况下，这是不需要的，只会对性能产生负面影响。避免将此设置为“true”。

### `Patch.evaluate()` _function_

Define the patch logic in this function. It will be called when needed based on the Engine run loop or every single frame when [Patch.alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/scriptingapi#patchalwaysneedstoevaluate-boolean-default-false) is set to `true`.

在这个函数中定义模块逻辑。当[Patch.alwaysNeedsToEvaluate](https://origami.design/documentation/concepts/scriptingapi#patchalwaysneedstoevaluate-boolean-default-false)被设置为' true '时，它将根据引擎运行循环或每一帧被调用。

---

## PatchInput 模块输入

### `new PatchInput(name, type, [defaultValue])` _constructor_

Use this constructor to create a new input port for the patch. You must give the port a name (which may be the empty string) and a type (from the [types](https://origami.design/documentation/concepts/scriptingapi#types) enum). You may also give the input a default value; if you don’t supply one, the default default value for the type you selected will be used.

使用这个构造函数为模块创建一个新的输入端口。您必须给端口一个名称(可能是空字符串)和一个类型(来自[types](https://origami.design/documentation/concepts/scriptingapi#types) enum)。你也可以给输入一个默认值;如果不提供，则将使用所选类型的默认默认值。

### `PatchInput.name` _string_

The name of the input port, which is displayed next to the port in the Patch Graph.

输入端口的名称，在模块图中显示在端口旁边。

### `PatchInput.type`

The type of the input port. Must be one of the values from the [types](https://origami.design/documentation/concepts/scriptingapi#types) enum.

### `PatchInput.value` _read-only_

The current value being passed into the input port.

### `PatchInput.values` _array, read-only_

If the [patch.loopAware](https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false) property is set to `true` and the input port is receiving a loop as input, then this property is an array of the values in the loop. Otherwise, this property is an array containing a single value equal to [PatchInput.value](https://origami.design/documentation/concepts/scriptingapi#patchinputvalue-read-only).

### `PatchInput.defaultValue`

The default value for the input port.

### `PatchInput.isDirty()` _function_

Returns `true` if the input port’s value has changed since the last time it was evaluated, or `false` otherwise.

### `PatchInput.readRising()` _function_

Returns `true` if the input port has just changed to a nonzero/“truthy” value, or `false` otherwise. Useful when dealing with Pulses (see [State & Pulses](https://origami.design/documentation/concepts/PulseSignal.html))

### `PatchInput.readFalling()` _function_

Returns `true` if the input port has just changed to a zero/“falsey” value, or `false` otherwise. Useful when dealing with Pulses (see [State & Pulses](https://origami.design/documentation/concepts/PulseSignal.html))

---

## PatchOutput 模块输出

### `new PatchOutput(name, type, [defaultValue])` _constructor_

Use this constructor to create a new output port for the patch. You must give the port a name (which may be the empty string) and a type (from the [types](https://origami.design/documentation/concepts/scriptingapi#types) enum). You may also give the input a default value; if you don’t supply one, the default default value for the type you selected will be used.

使用这个构造函数为模块创建一个新的输出端口。您必须给端口一个名称(可能是空字符串)和一个类型(来自[types](https://origami.design/documentation/concepts/scriptingapi#types) enum)。你也可以给输入一个默认值;如果不提供，则将使用所选类型的默认默认值。

### `PatchOutput.name` _string_

The name of the output port, which is displayed next to the port in the Patch Graph.

### `PatchOutput.type`

The type of the output port. Must be one of the values from the [types](https://origami.design/documentation/concepts/scriptingapi#types) enum.

### `PatchOutput.value` _read-only_

The current value being passed into the output port.

### `PatchOutput.values` _array, read-only_

If the [patch.loopAware](https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false) property is set to `true`, you may set this property to output a loop of values from the port. The property must be an array, and the type of each element of the array must match the type of the port.

### `PatchOutput.defaultValue`

The default value for the output port.

### `PatchOutput.pulse()` _function_

If this ouput’s type is [PULSE](https://origami.design/documentation/concepts/scriptingapi#pulse), you may call this function to send a pulse on this output port.

---

## Types 类型

JavaScript patch does not support all the available data types in Origami, for example Images, Sounds and Videos are not supported. Here’s the list of types that should be used for [PatchInput](https://origami.design/documentation/concepts/scriptingapi#patchinput) and [PatchOutput](https://origami.design/documentation/concepts/scriptingapi#patchoutput).

JavaScript 模块不支持 Origami 中所有可用的数据类型，例如图像、声音和视频不支持。下面是应该用于[PatchInput](https://origami.design/documentation/concepts/scriptingapi#patchinput)和[PatchOutput](https://origami.design/documentation/concepts/scriptingapi#patchoutput)的类型列表。

### `NUMBER`

Default type for most Patches in Origami. It’s a 64-bit floating value that can be used generically.

### `PROGRESS`

It’s an alias of [NUMBER](https://origami.design/documentation/concepts/scriptingapi#number) type. However can provide a semantic meaning that the intention for this number is to be normalized between 0-1 (see [Progress](https://origami.design/documentation/patches/builtin.progress.html))

### `POSITION`

A vector type with 2 floating value components `x` and `y` For example: `console.log('point:',point.x, point.y)` (see [Point](https://origami.design/documentation/patches/builtin.point.html))

### `SIZE`

A vector type with 2 components like [POSITION](https://origami.design/documentation/concepts/scriptingapi#position). The difference is the UI in the patch graph will treat the port as Size, but on the JavaScript side it should access its components with `x` representing the width and `y` representing the height.

### `ANCHOR`

A vector type with 2 components like [POSITION](https://origami.design/documentation/concepts/scriptingapi#position). The difference is the UI in the patch graph will treat the port as Anchor, but on the JavaScript side it should access its components with `x` and `y` values are expected to be in the range from 0-1.

### `POINT3D`

A vector type with 3 floating value components `x`, `y` and `z`. For example: `console.log('point:',point.x, point.y, point.z)` (see [Point3D](https://origami.design/documentation/patches/builtin.point3d.html))

### `POINT4D`

A vector type with 4 floating value components `x`, `y`, `z` and `w`. For example: `console.log('point:',point.x, point.y, point.z)` (see [Vec4](https://origami.design/documentation/patches/builtin.vec4.html))

### `COLOR`

A vector type with 4 components like [POINT4D](https://origami.design/documentation/concepts/scriptingapi#point4d). Those components need to be accessed with `x`, `y`, `z` and `w` Those components represent a color in the format of RGBA `x` being red, `y` being green, `z` being blue and `w` corresponds to the alpha channel. All values are normalized from 0-1 (see [Color to RGB](https://origami.design/documentation/patches/builtin.color.torgb.html))

### `BOOLEAN`

A type that can be `true` or `false` (see [State & Pulses](https://origami.design/documentation/concepts/PulseSignal.html))

### `PULSE`

Similar to [BOOLEAN](https://origami.design/documentation/concepts/scriptingapi#boolean) it can only hold a `true` or `false` but it is a transient value that is not persisted over time (see [State & Pulses](https://origami.design/documentation/concepts/PulseSignal.html))

### `INTEGER`

A numeric value that is not a fraction.

### `ENUM`

The UI in the patch graph will display this as a list of values, but from the JavaScript perspective this is an [INTEGER](https://origami.design/documentation/concepts/scriptingapi#integer) where the value represents the index of the element in the list.

### `STRING`

This type represents a Text

### `JSON`

This type represents a JSON Object (see [JSON Object](https://origami.design/documentation/patches/builtin.structure.object.html))
