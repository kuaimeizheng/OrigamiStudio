---
title: Progress 进度
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Progress 进度

---

Convert a number from any range to progress (0 to 1). Useful with [Transition](https://origami.design/documentation/patches/builtin.transition.html) to convert an animating value to another range.

将任何范围内的数字转换为进度（0 到 1）。和 [Transition 过渡](./Transition.md) 一起使用可以将动画值转换为其它的范围（例如：100 ～ 125、20 ～ 30）。

<div className="patch-container">
    <div className="patch processor">
        <h3>Progress</h3>
        <ul className="inputs">
            <li>Value<span>0</span></li>
            <li>Start Value<span>0</span></li>
            <li>End Value<span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Progress<span>0</span></li>
        </ul>
    </div>
</div>

### Value 值

A number to convert.

要转换的值。

### Start Value 开始值

The start value of the range.

范围的开始值。

### End Value 结束值

The end value of the range.

范围的结束值。

### Progress 进度

A progress value.

See [Animation Basics](./../PatchEditor/Animations.md) for more information.

一个进度值。

了解更多信息请参考 Animation Basic。

---

### Related Patches 相关模块

[Transition 过渡](./Transition.md)

[Clip 裁剪](./Clip.md)
