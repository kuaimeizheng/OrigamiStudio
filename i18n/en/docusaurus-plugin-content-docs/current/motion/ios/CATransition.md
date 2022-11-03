---
title: CATransition
sidebar_position: 50
last_update:
  author: 蒯美政
---

# CATransition

提供图层状态之间动画转换的对象。

[相关链接](https://developer.apple.com/documentation/quartzcore/catransition)

---

## CATransition

<div className="patch-container">
    <div className="patch processor">
        <h3>CATransition</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>startProgress<span>0</span></li>
            <li>endProgress<span>1</span></li>
            <li>type<span>fade</span></li>
            <li>subtype<span>nil</span></li>
            <li>filter<span>100</span></li>
        </ul>
        <ul className="outputs">
            <li>Value<span>0</span> </li>
        </ul>
    </div>
</div>

## 设计参数

| 参数          | 说明                                                                                                                                                                                         |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Number        | 一个数值，表示动画开始和结束。                                                                                                                                                               |
| startProgress | 一个 0-1 的数值。                                                                                                                                                                            |
| endProgress   | 一个 0-1 的数值。                                                                                                                                                                            |
| type          | 预定于的转换类型，默认为 fade。 [Common Transition Type](https://developer.apple.com/documentation/quartzcore/catransition/common_transition_types)                                          |
| subtype       | 指定一个可选子类型，指示预定义的基于运动的过渡的方向，默认为 nil。[Common Transition Subtypes](https://developer.apple.com/documentation/quartzcore/catransition/common_transition_subtypes) |
| filter        | 提供过渡的可选核心图像过滤器对象，默认为 nil。                                                                                                                                               |
