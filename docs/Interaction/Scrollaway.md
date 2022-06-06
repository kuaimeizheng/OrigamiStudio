---
sidebar_position: 2
---

# Scrollaway 滚动距离

Calculate the progress off a scrollaway navigation element.

计算滚动导航元素的进度。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b47c217-5437-4614-be9c-f1142973dc88/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171249Z&X-Amz-Expires=86400&X-Amz-Signature=ee6b82b410e1327a73382988003abb715586c406a0b148dafe9dc1b18c99e480&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

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

------

### Related Patches 相关模块

[Transition 过渡](./../Utility/Transition.md)

[Scroll 滚动](./Scroll.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5addc78b-baae-4f23-b686-526df6b04d33/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171257Z&X-Amz-Expires=86400&X-Amz-Signature=c8c2a73c45a3cc72e496140375fbe5f27a9fd2251e88b98ee8f96d0bfbb24f30&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
