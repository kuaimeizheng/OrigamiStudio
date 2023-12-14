---
title: Lottie Animation
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Lottie Animation

A Layer that can play Lottie animations. Use directly a dotLottie file or load your animation as a JSON through JSON to Lottie Patch.


### Enable 启用

A boolean that is true when the layer is displayed.

勾选启用图层。

### Position 位置

The position to display the layer. Use [Point 3D](./../Utility/Point%203D.md) to set Z position.

显示图层的位置。使用 Point 3D 设置 Z 位置。

### Size

The size of the layer.

### Anchor

The anchor point to position the layer relative to. See Coordinates for more information.

### Lottie Animation

A Lottie Animation to play.

### Fill Style

The animation content sizing behavior: fit, fill or stretch.

### Opacity

The opacity of the layer.

### Play

A boolean that is true when the animation is playing.

### Rate

A number that represents the speed multiplier to play the animation. 0 pauses the animation. 2 plays it at twice the speed. Negative numbers play it backwards.

### Loop

A boolean that is true when the animation will loop to the beginning at the end.

### Scrub

A boolean that is true when the animation will jump to the time specified in Scrub Time.

### Scrub Time

The time to jump the animation to when Scrub is on.

### Scale 比例

The scale of the layer.

### Rotation

The rotation of the layer. Use Point 3D to set X or Y rotations.

### Pivot

The pivot to rotate and scale the layer about. See Coordinates for more information.

### Current Time

The elapsed time of the animation, in seconds.

### Duration

The length of the animation, in seconds.

### Natural Size

The original size of the animation.

------

### Related Patches 相关模块

[JSON to Lottie](./../Utility/JSON%20to%20Lottie.md)
