---
title: CASpringAnimation
sidebar_position: 10
last_update:
  author: 蒯美政
---

# CASpringAnimation

将类似弹簧的力应用于图层属性的动画。

[相关链接](https://developer.apple.com/documentation/quartzcore/caspringanimation)

---

## CASpringAnimation

<div className="patch-container">
    <div className="patch processor">
        <h3>CASpringAnimation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>damping<span>10</span></li>
            <li>initialVelocty<span>0</span></li>
            <li>mass<span>1</span></li>
            <li>settingDuration<span>0.4s</span></li>
            <li>stiffness<span>100</span></li>
        </ul>
        <ul className="outputs">
            <li>Value<span>0</span> </li>
        </ul>
    </div>
</div>

## 设计参数

| 参数            | 说明                                                                               |
| :-------------- | :------------------------------------------------------------------------------- |
| Number          | 一个数值，表示动画开始和结束。                                                   |
| damping         | 定义弹簧的运动应如何因摩擦力而受到阻尼。默认为 10。                              |
| initialVelocty  | 附着在弹簧上的物体的初始速度。默认为 0。                                         |
| mass            | 附着在弹簧末端的物体的质量。默认为 1。                                           |
| settingDuration | 考虑静止状态的弹簧系统所需的估计持续时间。                                       |
| stiffness       | 弹簧刚度系数。较高的值对应于较硬的弹簧，可为移动的物体产生较大的力。默认为 100。 |

## 相关参考

[Apple Core Animation](https://developer.apple.com/documentation/quartzcore/caspringanimation)
