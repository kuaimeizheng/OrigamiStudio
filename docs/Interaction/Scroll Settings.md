---
sidebar_position: 2
---

# Scrolling Settings 滚动设置

Customize a [Scroll](https://origami.design/documentation/patches/builtin.layer.scroll.html) patch’s behavior.

自定义 Scroll滚动 模块的行为。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cc75e49c-58ed-47d6-84b8-9adf6d7d3325/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171145Z&X-Amz-Expires=86400&X-Amz-Signature=6ecf27502a1e0189e3af5f6f9e410b7daee156e51792090fd95730695035fcd1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Content Size 内容大小**

The width and height of the layer to be scrolled. Defaults to the size of the layer selected in the accompanying Scroll patch.

滚动的图层的宽度和高度。默认大小是Scroll模块选择的图层的大小。

**Direction Locking 方向锁定**

A boolean that is true when scrolling is locked to the initial direction a user scrolls it per touch.

用户每次滚动时锁定到初始方向时。

**Page Size 页面大小**

The width and/or height of a page when the Scroll patch is set to Paging. The page will be centered in the bounds. Only needs to be defined in the axis that the Scroll patch is paging (ex: only page width is required for a Paging X Scroll). Ensure the layer being scrolled is divisible by the page size and padding.

当Scroll模块设置为Paging时页面的宽度、高度。页面居中。只需要在Scroll模块设置为Paging时定义轴（例：只需要分页x滚动所需的页面宽度）。确保图层可以整除页面大小和内边距。

**Page Padding 页面间距**

The padding between each page when the Scroll patch is set to Paging. Only needs to be defined in the axis that the Scroll patch is paging (ex: only padding width is required for a Paging X Scroll).

当Scroll模块设置为Paging时，每页之间的内边距。只需要在Scroll模块是Paging时定义轴（例：仅为分页x滚动所需的填充宽度）。

**Jump Style X 跳转到X轴样式**

The jump style (animated or instant) when jumping horizontally.

**Jump to X 跳转到X原始值**

A pulse that jumps the Scroll X position.

X轴复位。

**Jump Position X 跳转到X轴坐标**

The X position to jump to.

跳转到定义的X坐标值。

**Jump Style Y 跳转到Y轴样式**

The jump style (animated or instant) when jumping vertically.

**Jump to Y 跳转到Y原始值**

A pulse that jumps the Scroll Y position.

Y轴复位。

**Jump Position Y 跳转到Y轴坐标**

The Y position to jump to.

跳转到定义的Y坐标值。

**Deceleration Rate 减速的速度**

include Normal、Fast

**Output 输出**

The settings to pass to a Scroll patch.

连接到Scroll模块的Setting接口。

------

### ***\*Related Patches 相关模块\****

[Scroll 滚动](https://www.notion.so/Scroll-2f1508bfbec742279786513c26602209)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ffedcfd3-203c-4cbc-8e70-5fd5ff9d24f0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171152Z&X-Amz-Expires=86400&X-Amz-Signature=af5a072878be30e0ce88b2eddab5fd4bfff7c7a8fcd175510511c3a319a4e6be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
