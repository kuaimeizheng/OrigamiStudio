---
title: Color 颜色
sidebar_position: 10
tags: [token]
---

# Color 颜色

---

将常用的颜色变量封装进模块里，可以方便的设置交互动画中不同的色值。

<!-- ![](http://ssy-design.oss-cn-shenzhen.aliyuncs.com/images/ixd/patches/color%20palette.png) -->

<div className="patch-container">
    <div className="patch processor">
        <h3>Color Palette</h3>
        <ul className="inputs">
            <li>Primary Color <span>Teal</span></li>
            <li>Weight <span>600</span></li>
        </ul>
        <ul className="outputs">
            <li><span></span>Color</li>
        </ul>
    </div>
</div>

#### Input 输入

##### Primary Color 主要颜色

可以选择的颜色类型列表。比如：绿色、蓝色、红色...

##### Weight 颜色权重

每种颜色都设置了几种不同的色重。

#### Output 输出

##### Color 颜色

输出后的颜色， 将此端口连接到所需要控制的图层颜色属性。
