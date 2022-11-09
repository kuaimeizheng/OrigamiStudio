---
title: Scrolling Settings 滚动设置
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Scrolling Settings 滚动设置

Customize a [Scroll](./Scroll.md) patch’s behavior.

自定义 [Scroll 滚动](./Scroll.md) 模块的行为。

<div className="patch-container">
    <div className="patch processor">
        <h3>Scrolling Settings</h3>
        <ul className="inputs">
            <li>Content Size<small>W<span>0</span>H<span>0</span></small></li>
            <li>Direction Locking<span className="patch-pulse-preview"><span className="dot"></span></span></li> 
            <li>Page Size<small>W<span>0</span>H<span>0</span></small></li>
            <li>Page Padding<small>W<span>0</span>H<span>0</span></small></li>
            <li>Jump Style X<span>Instant</span></li>
            <li>Jump to X<span className="patch-pulse-preview"><span className="dot"></span></span></li> 
            <li>Jump Position X<span>Instant</span></li>
            <li>Jump Style Y<span>Instant</span></li>
            <li>Jump to Y<span className="patch-pulse-preview"><span className="dot"></span></span></li>
            <li>Jump Position Y<span>0</span></li> 
            <li>Deceleration Rate<span>Normal</span></li>
        </ul>
        <ul className="outputs">
            <li><span></span></li>
        </ul>
    </div>
</div>

### Content Size 内容大小

The width and height of the layer to be scrolled. Defaults to the size of the layer selected in the accompanying Scroll patch.

滚动的图层的宽度和高度。默认大小是 Scroll 模块选择的图层的大小。

### Direction Locking 方向锁定

A boolean that is true when scrolling is locked to the initial direction a user scrolls it per touch.

用户每次滚动时锁定到初始方向时。

### Page Size 页面大小

The width and/or height of a page when the Scroll patch is set to Paging. The page will be centered in the bounds. Only needs to be defined in the axis that the Scroll patch is paging (ex: only page width is required for a Paging X Scroll). Ensure the layer being scrolled is divisible by the page size and padding.

当 Scroll 模块设置为 Paging 时页面的宽度、高度。页面居中。只需要在 Scroll 模块设置为 Paging 时定义轴（例：只需要分页 x 滚动所需的页面宽度）。确保图层可以整除页面大小和内边距。

### Page Padding 页面间距

The padding between each page when the Scroll patch is set to Paging. Only needs to be defined in the axis that the Scroll patch is paging (ex: only padding width is required for a Paging X Scroll).

当 Scroll 模块设置为 Paging 时，每页之间的内边距。只需要在 Scroll 模块是 Paging 时定义轴（例：仅为分页 x 滚动所需的填充宽度）。

### Jump Style X 跳转到 X 轴样式

The jump style (animated or instant) when jumping horizontally.

### Jump to X 跳转到 X 原始值

A pulse that jumps the Scroll X position.

X 轴复位。

### Jump Position X 跳转到 X 轴坐标

The X position to jump to.

跳转到定义的 X 坐标值。

### Jump Style Y 跳转到 Y 轴样式

The jump style (animated or instant) when jumping vertically.

### Jump to Y 跳转到 Y 原始值

A pulse that jumps the Scroll Y position.

Y 轴复位。

### Jump Position Y 跳转到 Y 轴坐标

The Y position to jump to.

跳转到定义的 Y 坐标值。

### Deceleration Rate 减速的速度

include Normal、Fast

### Output 输出

The settings to pass to a Scroll patch.

连接到 Scroll 模块的 Setting 接口。

---

### Related Patches 相关模块

[Scroll 滚动](./Scroll.md)
