---
title: Smooth Value 平滑值
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Smooth Value 平滑值

For advanced use only — use the Pop Animation or Classic Animation patch instead.

Smooth a value as it changes.

高级模块，可用Pop Animation或Classic Animation替代。

平滑改变中的值。

<div className="patch-container">
    <div className="patch processor">
        <h3>Smooth Value</h3>
        <ul className="inputs">
            <li>Value<span>0</span></li>
            <li>Hysterisis<span>0.4</span></li>
            <li>Reset <span className="patch-pulse-preview"><span className="dot"></span></span></li>
        </ul>
        <ul className="outputs">
            <li>Progress<span>0</span></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Value 值

A number to smooth.

平滑值。

#### Hysterisis 滞后

A number from 0-1 that represents the rate at which to smooth the value, where the value in the next frame = (previous frame * hysterisis) + (current frame * (1 - hysterisis).

一个 0-1 的数字，表示平滑值的速率，其中下一帧中的值 = (前一帧 * 滞后) + (当前帧 * (1 - 滞后)。

### Reset 复位

A pulse that resets the value to the input value.

让动画跳回开始时。

</div>
<div className="outputs">

### Output 输出

#### Progress 进度

Animated value

进度值

</div>
</div>

---

### Related Patches 相关模块

[Pop Animation 流行动画](./Pop%20Animation.md)

[Classic Animation 经典动画](./Classic%20Animation.md)

