---
sidebar_position: 3
---

# States 状态

Every prototype has multiple states it can transition between. In Origami, Switch patches help keep track of which state you are in. They are like light switches and can be toggled with [interaction patches] .

每个原型都有多个可以转换的状态。 在 Origami 中，Switch开关 补丁可以帮助追踪模块所处的状态。它们就像电灯开关，可以通过交互模块进行切换。

------

# State patches 状态模块

### Switch ⇧S 卡关

The [Switch] patch is like a light switch: turning it on keeps it on, and turning it off keeps it off. They are helpful to build simple two-state interactions, e.g. showing and hiding comments in a popover.

Switch开关模块就像一个电灯开关：打开就保持打开状态，关闭就保持关闭状态。它有助于构建简单的只有两种状态的交互，例如在弹出窗口中显示和隐藏评论。

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9611dde1-5b8c-48ee-a187-2e250c5fba16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162439Z&X-Amz-Expires=86400&X-Amz-Signature=bcf145c6ce12ac771872a6227a1a3f681319f9eca1479034ad82a90ea54ba7df&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Multiple Switch patches can combined with Logic patches ([Or](https://origami.design/documentation/patches/builtin.logic.or.html), [And](https://origami.design/documentation/patches/builtin.logic.and.html), [Not](https://origami.design/documentation/patches/builtin.logic.not.html)) to build on top of each other, e.g. opening a composer with different attachment options which the user can toggle.

多个开关模块可以与逻辑模块（或、和、非）组合在一起，相互构建，例如，打开一个具有不同附件选项的装置，用户可以切换这些选项。

### Option Switch 选项开关

[Option Switch]patches are useful for mutually exclusive states that cannot coexist, e.g. a tab bar. Option Switches are commonly used with [Option Pickers] to pass different values depending the state. For example, if you wanted to change a navigation bar title between 3 states:

选项开关模块适用于不能共存的互斥状态，例如标签栏。选项开关通常与选项选择器一起使用，以根据状态传递不同的值。例如，如果要在3种状态之间更改导航栏标题：

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f5529284-08dd-4101-b66b-265a9527cc07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162452Z&X-Amz-Expires=86400&X-Amz-Signature=95767a71a1e76329ca8cbc15e014bc2fdab9b0bfb2a01cb5b11af7d4ed0d8231&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Counter 计数器

[Counter] patches are useful for mutually exclusive states that cannot coexist, and increment in a fixed order e.g. an onboarding flow.

计数器模块适用于不能共存的互斥状态，并且以固定的顺序递增，例如，入职流程。

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1516a62-6fc6-49bf-ba33-dda7e8eaad32/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162455Z&X-Amz-Expires=86400&X-Amz-Signature=9908a3461693bcff7938809558446d481184ed0f71b174ed6306d3135db7ebaa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Index numbers represent states 索引序号表示状态

Both Switch and Option Switch patches output a number for the state that is active. Switch patches output a 0 (off) or a 1 (on), and Option Switch patches output a number starting from 0 for the first state, to 1 for the 2nd, and so on:

Switch开关 和 Option Switch 选项开关 模块都会输出激活状态的数字。开关模块输出 0（关闭）或 1（打开），选项开关模块输出一个数字，第一个状态从0开始，第二个状态从1开始，依此类推：

- Index 0 → Initial state / Off State  索引 0 → 初始状态/关闭状态
- Index 1 → 2nd state / On State  索引 1 → 第二状态/打开状态
- Index 2 → 3rd state  索引 2 → 第三状态
- Index 3 → 4th state  索引 3 → 第四状态
- ...

------

# Summary 总结

- Manage state with Switch, Option Switch, or Counter
- States are represented with integers, starting from 0
- 使用开关、选项开关或计数器模块管理状态
- 状态用整数表示，从 0 开始
