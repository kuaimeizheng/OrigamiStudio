---
title: Scrollaway 滚动距离
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Scrollaway 滚动距离

Calculate the progress off a scrollaway navigation element.

计算滚动导航元素的进度。

<div className="patch-container">
    <div className="patch processor">
        <h3>Scrollaway</h3>
        <ul className="inputs">
            <li>Scroll Position<span>0</span></li>
            <li>Scrollaway Offset<span>60</span></li>
            <li>Bottom Bound<span>-50</span></li>
            <li>Top Bound<span>500</span></li>
        </ul>
        <ul className="outputs">
            <li>Progress<span>0.5</span></li>
        </ul>
    </div>
</div>

### Scroll Position 滚动位置

The current scroll position from a Scroll patch.

Scroll 滚动 模块的当前滚动位置。

### Scrollaway Offset 滚动偏移

The offset the element should be scrolled away by.

元素滚动位移的偏移量。

### Bottom Bound 下边界

A number that represents the lowest bound of the Scroll (ex: -1500). Get this by scrolling the layer to the top and looking at the Scroll position. Used to limit the scrollaway effect within a certain range.

一个数值，表示滚动的的最低边界（例如：-1500）。通过滚动图层到顶部查看滚动位置来获取。用于将滚动效果限制在一定范围内。

### Top Bound 上边界

A number that represents the highest bound of the Scroll (ex: 1500). Get this by scrolling the layer to the bottom and looking at the Scroll position. Used to limit the scrollaway effect within a certain range.

一个数值，表示滚动的最高边界（例如：1500）。通过滚动图层到底部查看滚动位置来获取。用于将滚动效果限制在一定范围内。

### Progress 进度

A number from 0-1 that represents the progress of the scrollaway. Connect to Transition patches to convert it to the position, scale, opacity or any other property.

一个 0-1 的数值，表示滚动的进度，连接到 Transition 模块以将其转换为位置、比例、不透明度或其他属性。

---

### Related Patches 相关模块

[Transition 过渡](./../Utility/Transition.md)

[Scroll 滚动](./Scroll.md)
