---
title: Easing Animation
sidebar_position: 10
last_update:
  author: 蒯美政
---

# Easing Animation

基于 Origami 封装的动画模块，方便设计师快速的通过 Easing 预设设置动画参数，减少设计学习成本，提高和开发的协同和沟通效率。

---

### Easing Animation

设计师可以根据产品所使用的框架，快速的切换并选择预设好的动画参数。

<div className="patch-container">
    <div className="patch processor">
        <h3>Easing Animation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>Frame<span>React Native</span></li>
            <li>Curve<span>Linear</span></li>
            <li>Duration<span>0.4s</span></li>
            <li>Bezier Value<span>(0,0,1,1)</span></li>
            {/* <li>X1<span>0</span></li>
            <li>Y1<span>0</span></li>
            <li>X2<span>1</span></li>
            <li>Y2<span>1</span></li> */}
        </ul>
        <ul className="outputs">
            <li>0</li>
        </ul>
    </div>
</div>

#### 设计参数

| 参数         | 值<div style={{width: '320px'}}/>                            |
| :----------- | :----------------------------------------------------------- |
| Number       | 一个数值，表示动画的开始和关闭                               |
| Frame        | 动画应用的场景：React Native、Taro、微信小程序、iOS、Android |
| Curve        | 如表格中的基本预设和高级预设                                 |
| Duration     | 持续时间，xx 秒                                              |
| Bezier Value | 选择 Curve 类型后，会显示相应 Curve 的贝塞尔数值。           |
