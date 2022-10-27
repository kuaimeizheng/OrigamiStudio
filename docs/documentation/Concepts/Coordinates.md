---
title: Coordinates 坐标
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Coordinates 坐标

Origami Studio use pt/dp coordinates instead of pixels. Specify position or size in pt/dp, and Origami will handle rendering layers at the appropriate density. For instance an iPhone 7 is 375x667 in points, but 750x1334 in pixels.

Origami Studio 使用 pt / dp 单位为坐标，不是像素。

用 pt / dp 指定位置和大小 (例如：设计图的 1 倍值，Sketch 里的内置的设备的尺寸) ，Origami 将以合适的密度显示图层。

例如，iPhone 7 的点数为 375x667 (例如：设计的 1 倍图) ，但像素为 750x1334 (例如：设计的 2 倍图) 。

(例如：图层属性窗口中有两种坐标，一种是锚点 Anchor 坐标，用于对象的定位和对齐方式；另一种的图层的中心点 Pivot 坐标，像 Ps 中旋转时会有一个中心点，旋转时以那个点为圆心)

By default, the origin (x: 0, y: 0) is in the center of the device screen. On the X axis, coordinates increase as you move right, and decrease as you move left. On the Y axis, coordinates increase as you move down, and decrease as you move up.

默认情况下，坐标原点（x：0，y：0）在屏幕的中心。 X 轴坐标，原点向右为正数，向左为负数。Y 轴坐标，原点向下为正数，向上为负数。

For illustration, below is a Layer Group of height 400 pixels and width 300 pixels:

例如，下面是一个图层在屏幕中的坐标，图层高 400 宽 300：

<div class="coord-example">
 <div class="dot dot-center dot-center-y dot-center-x"></div>
 <div class="label dot-center dot-center-y dot-center-x">0, 0</div>

 <div class="dot dot-top-right dot-top dot-right"></div>
 <div class="label dot-top-right dot-top dot-right">150, -200</div>

 <div class="dot dot-bottom-left dot-bottom dot-left"></div>
 <div class="label dot-bottom-left dot-bottom dot-left">-150, 200</div>

</div>

# Anchor Point 坐标锚点

Anchor points change the origin of the coordinate system for that patch. Anchor points can be defined in the Patch Editor with a Point patch, where X and Y are any decimal 0-1.

更改锚点会改变模块的坐标原点位置。 锚点可以通过 Point 模块控制，X 和 Y 的值可以是 0 ～ 1 之间的任何数字。

<div class="coord-example">
 <div class="dot dot-top-left dot-top dot-left"></div>
 <div class="label dot-top-left dot-top dot-left">Top Left (0, 0)</div>

 <div class="dot dot-top-center dot-top dot-center-x"></div>
 <div class="label dot-top-center dot-top dot-center-x">Top Center (.5, 0)</div>

 <div class="dot dot-top-right dot-top dot-right"></div>
 <div class="label dot-top-right dot-top dot-right">Top Right (1, 0)</div>

 <div class="dot dot-center-left dot-center-y dot-left"></div>
 <div class="label dot-center-left dot-center-y dot-left">Center Left (0, .5)</div>

 <div class="dot dot-center dot-center-y dot-center-x"></div>
 <div class="label dot-center dot-center-y dot-center-x">Center (.5, .5)</div>

 <div class="dot dot-center-right dot-center-y dot-right"></div>
 <div class="label dot-center-right dot-center-y dot-right">Center Right (1, .5)</div>

 <div class="dot dot-bottom-left dot-bottom dot-left"></div>
 <div class="label dot-bottom-left dot-bottom dot-left">Bottom Left (0, 1)</div>

 <div class="dot dot-bottom-center dot-bottom dot-center-x"></div>
 <div class="label dot-bottom-center dot-bottom dot-center-x">Bottom Center (.5, 1)</div>

 <div class="dot dot-bottom-right dot-bottom dot-right"></div>
 <div class="label dot-bottom-right dot-bottom dot-right">Bottom Right (1, 1)</div>
</div>

Here’s an example of a Text Layer positioned from the “Top Left” Anchor Point:

下面是一个锚点在左上角的示意图：

<div class="coord-example">
 <div class="dot dot-top-left dot-top dot-left"></div>
 <div class="box dot-top-left dot-top dot-left">Button Text</div>
</div>

From the bottom right:

锚点在右下角的文字图层：

<div class="coord-example">
 <div class="dot dot-bottom-right dot-bottom dot-right"></div>
 <div class="box dot-bottom-right dot-bottom dot-right">Button Text</div>
</div>

If you want to inset it by 40 pixels, give it an X Position of -40 and a Y Position of -40.

如果你想把图层向左上方移动 40 像素，X 和 Y 的值都要输入-40。

<div class="coord-example">
 <div class="dot dot-bottom-right dot-bottom dot-right"></div>
 <div class="box inset-40 dot-bottom-right dot-bottom dot-right">Button Text</div>
 <div class="label dot-bottom-right dot-bottom dot-right">-40, -40</div>
</div>

# Pivot 图层中心点

The pivot port changes the point about which a layer scales and rotates, and can be controlled separately from anchor points. Pivots can be defined in the Patch Editor with a Point patch, where X and Y are any decimal 0-1.

Pivot 端口是图层缩放和旋转的中心点，这个中心点可以和锚点分开控制。中心点可以通过[Point](./../Utility/Point.md)模块控制，X 和 Y 的值可以是 0 ～ 1 之间的任何数。

<div class="pivot-example-box" layout="row top-justify">
 <div class="pivot-example pivot-center ">
  <div class="item">A</div>
  <div class="label">Center (.5, .5)</div>
 </div>
 <div class="pivot-example pivot-top-left ">
  <div class="item">B</div>
  <div class="label">Top Left (0, 0)</div>
 </div>
 <div class="pivot-example pivot-center-right ">
  <div class="item">C</div>
  <div class="label">Center Right (1, .5)</div>
 </div>
</div>
