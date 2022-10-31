---
title: Spring Animation
sidebar_position: 20
last_update:
  author: 蒯美政
---

# Spring Animation

可以设置动画元素的 `质量 Mass`、`张力 Tension`、`摩擦力 Friction`等参数，模拟自然、物理的效果。

---

## Spring Animation

<div className="patch-container">
    <div className="patch processor">
        <h3>Spring Animation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>Preset<span>Default</span></li>
            <li>Tension<span>170</span></li>
            <li>Friction<span>26</span></li>
            <li>Mass<span>1</span></li>
            <li>Gesture Active <span className="checkbox-off"></span></li>
            <li>Gesture Velocity<span>0</span></li>
        </ul>
        <ul className="outputs">
            <li><span>0</span></li>
        </ul>
    </div>
</div>

### 设计参数

| 参数             | 值                                 |
| :--------------- | :--------------------------------- |
| Number           | 一个数值，表示动画开始和结束       |
| Preset           | 预设的动画参数类型，默认为 Default |
| Tension          | 弹簧有多大的张力，默认为 130       |
| Friction         | 对弹簧施加多少摩擦力，默认为 18    |
| Mass             | 动画对象的质量，默认为 1           |
| Gesture Active   | 手势激活，默认为假                 |
| Gesture Velocity | 手势速度，默认为 0                 |

### 参数预设

快捷的调用和设置动画参数，提升设计效率和标准。

| 预设<div style={{width: '120px'}}/> | 含义<div style={{width: '120px'}}/> | 值                                         |
| ----------------------------------- | ----------------------------------- | ------------------------------------------ |
| config.default                      | 默认                                | `{ mass: 1, tension: 170, friction: 26 }`  |
| config.gentle                       | 柔和                                | `{ mass: 1, tension: 120, friction: 14 }`  |
| config.wobbly                       | 摆动                                | `{ mass: 1, tension: 180, friction: 12 }`  |
| config.stiff                        | 生硬                                | `{ mass: 1, tension: 210, friction: 20 }`  |
| config.slow                         | 缓慢                                | `{ mass: 1, tension: 280, friction: 60 }`  |
| config.molasses                     | 粘性                                | `{ mass: 1, tension: 280, friction: 120 }` |

## Spring Bounciness Animation

<div className="patch-container">
    <div className="patch processor">
        <h3>Spring Bounciness Animation</h3>
        <ul className="inputs">
            <li>Number<span>0</span></li>
            <li>Bounciness<span>5</span></li>
            <li>Speed<span>10</span></li>
        </ul>
        <ul className="outputs">
            <li>Progress<span>0</span></li>
        </ul>
    </div>
</div>

### 设计参数

| 参数       | 值                           |
| :--------- | :--------------------------- |
| Number     | 一个数值，表示动画开始和结束 |
| Bounciness | 弹力，默认为 5               |
| Speed      | 速度，默认为 10              |

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
