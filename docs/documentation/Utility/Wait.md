---
title: Wait 等待
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Wait 等待

---

Start a timer that waits the input duration before outputting a pulse.

启动等待指定时间的计时器

（设置延迟动画的计时器，在要延迟的脉冲上加上一个 Wait 模块，就能让这个脉冲延迟设定的时间到达下一个模块）

<div className="patch-container">
    <div className="patch processor">
        <h3>Wait</h3>
        <ul className="inputs">
            <li>Start<span className="patch-pulse-preview"><span className="dot"></span></span></li>
            <li>Duration<span>1s</span></li>
        </ul>
        <ul className="outputs">
            <li><span className="checkbox-off"></span></li>
        </ul>
    </div>
</div>

### Start 开始

A pulse that starts the timer.

启动定时器的脉冲。

### Duration 持续时间

The time to wait.

要等待的时间。

### Output 输出

A boolean that is true when the wait is finished

等待时间结束后发出脉冲。一般连接到事件类模块。

---

### Related Patches 相关模块

[When Prototype Starts 当原型启动时](./When%20Prototype%20Starts.md)
