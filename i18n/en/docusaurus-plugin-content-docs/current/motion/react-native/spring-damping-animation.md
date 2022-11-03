---
title: Spring Damping Animation
sidebar_position: 40
last_update:
  author: 蒯美政
---

# Spring Damping Animation

---

## Spring Damping Animation

<div className="patch-container">
    <div className="patch processor">
        <h3>Spring Damping Animation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>Duration<span>0.4s</span></li>
            <li>Damping<span>10</span></li>
            <li>Stiffness<span>100</span></li>
            <li>Mass<span>1</span></li>
            <li>Velocity<span>0</span></li>
        </ul>
        <ul className="outputs">
            <li>Value<span>0</span> </li>
        </ul>
    </div>
</div>

### 设计参数

| 参数      | 值                                                                   |
| :-------- | :------------------------------------------------------------------- |
| Number    | 一个数值，表示动画开始和结束                                         |
| Duration  | 动画的持续时间                                                       |
| Damping   | 施加于弹簧运动的阻尼力。该值用于计算阻尼比。                         |
| Stiffness | 弹簧刚度系数。较高的值对应于较硬的弹簧，可为移动的物体产生较大的力。 |
| Mass      | 动画对象的质量，默认为 1                                             |
| Velocity  | 动画的速度                                                           |
