---
sidebar_position: 2
---

# Spring Animation 弹性动画

Creates a animation based on a physically modeled spring. This also allows for interruptible animations by controlling the velocity of the spring.

基于物理建模的弹簧创建动画。这也允许通过控制弹簧的速度来进行可中断的动画。

![](./../../static/img/docs/Animation/spring-animation.png)

### Number 数值

The number to animate to.

表示动画开始的数值。

### Mass 质量

The mass of the object being animated.

动画对象的质量。

### Tension 张力

How much tension the spring has.

弹簧有多大的张力。

### Friction 摩擦力

How much friction should be applied to the spring.

应该对弹簧施加多少摩擦力

### Gesture Active 手势激活

If a gesture is active, the spring will animate immediately to its destination value. When this switches from On to Off, the spring will sample the Gesture Velocity and use it for the animation. This allows for throwing an object and allowing for the spring to continue naturally from the throw point. Typically this is the value from the Down port on an [Interaction] or [Gesture]patch.

如果手势处于活动状态，则弹簧将立即开始动画到到其目标值。 当它从 On 切换到 Off 时，弹簧将对手势速度进行采样并将其用于动画。 这允许抛出一个物体，并允许弹簧从抛出点自然地继续。 通常，是交互或手势模块的 Down 端口的值连接到这里。

### Gesture Velocity 手势速度

The current velocity of the gesture being applied to the spring. When Gesture Active goes from On to Off, this value is sampled for the spring animation. See Gesture Active for more information.

应用于弹簧的手势的当前速度。当“手势激活”从“开”变为“关”时，将对弹簧动画的该值进行采样。有关更多信息，请参见手势激活。

### Output 输出

The current value of the animation.

动画的当前值。

---

### Related Patches 相关模块

[Spring Converter 弹性转换器](./Spring%20Converter.md)

[Pop Animation 流行动画](./Pop%20Animation.md)

[Gesture 手势](./../Interaction/Gesture.md)

