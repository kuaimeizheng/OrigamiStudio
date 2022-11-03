---
title: CAKeyframeAnimation
sidebar_position: 20
last_update:
  author: 蒯美政
---

# CAKeyframeAnimation

提供图层状态之间动画转换的对象。

[相关链接](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation)

---

## CAKeyframeAnimation

<div className="patch-container">
    <div className="patch processor">
        <h3>CAKeyframeAnimation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>-<span>提供关键帧值/Providing keyframe values</span></li>
            <li>values<span>[...]</span></li>
            <li>path<span></span></li>
            <li>-<span>关键帧计时/Keyframe timing</span></li>
            <li>keyTimes<span>[...]</span></li>
            <li>timingFuntions<span>[...]</span></li>
            <li>calculationMode<span>linear</span></li>
            <li>-<span>旋转模式属性/Rotation Mode Attribute</span></li>
            <li>rotationMode<span>nil</span></li>
            <li>-<span>贝塞尔模式属性/Cubic Mode Attributes</span></li>
            <li>tensionValues<span>[...]</span></li>
            <li>continuityValues<span>[...]</span></li>
            <li>biasValues<span>[...]</span></li>
        </ul>
        <ul className="outputs">
            <li>Value<span>0</span> </li>
        </ul>
    </div>
</div>

## 设计参数

#### Number

一个数值，表示动画开始和结束。

### 提供关键帧值

#### values

指定用于动画的关键帧值的对象数组。

#### path

要遵循的基于点的属性的路径。

### 关键帧计时

#### keyTimes

一个可选的NSNumber对象数组，用于定义应用给定关键帧段的时间。

#### timingFunctions

一个可选的对象数组，用于定义每个关键帧段的步调。CAMediaTimingFunction

#### calculationMode

指定接收器如何计算中间关键帧值，默认为 Linear。

[相关链接](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412500-calculationmode)


### 旋转模式属性

#### rotationMode 

确定沿路径设置动画的对象是否旋转以匹配路径切线。

[相关链接](https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412454-rotationmode)


### 贝塞尔模式属性

#### tensionValues

NSNumber定义曲线紧密度的对象数组。

#### continuityValues

NSNumber定义时序曲线拐角清晰度的对象数组。

#### biasValues

NSNumber定义曲线相对于控制点的位置的对象数组。