---
sidebar_position: 2
---

# Momentum Scrolling 动量滚动

For advanced use only — use the Scroll patch instead.

仅供高级用户使用-可以使用Scroll模块代替。

Simulate the momentum physics that powers the Scroll patch. Use in a feedback loop that integrates the velocity of an interaction.

模拟Scroll模块的动量物理的功能。在集成交互速度的反馈循环中使用。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dd806c8e-d986-4050-b020-af598cba7f32/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171015Z&X-Amz-Expires=86400&X-Amz-Signature=a3da5b279d873a21ce547a14ccd6e299e01619015af0dcb2337871e736af0bf1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Sample Value 采样值**

A boolean that is true when the patch is sampling the input value. Usually connected to an Interaction patch’s down output.

一个布尔值，当模块对输入值进行采样时为 true。通常连接到交互模块的 down 输出端口。

**Value 值**

A number that represents the value to add momentum physics to. Usually connected to an Interaction patch’s position X or Y.

一个数字，表示要向其添加动量物理的值。通常连接到交互模块的位置 X 或 Y。

**Scrolling Friction 滚动摩擦力**

A number between 1-100 that represents the friction that slows down the value when its velocity increases sharply and sampling stops (ex: a scroll flick).

一个介于 1-100 之间的数字，表示当其速度急剧增加且采样停止（例如：滚动轻移）时减慢该值的摩擦力。

**Rubber Band Tension 橡皮筋张力**

A number between 10-1000 that represents the speed the value returns to the boundaries after sampling stops if it exceeds the boundaries.

一个介于 10-1000 之间的数字，表示如果值超过边界，则采样停止后返回边界的速度。

**Rubber Band Friction 橡皮筋摩擦力**

A number between 10-1000 that represents the friction that slows down the value returning to the boundaries after sampling stops if it exceeds the boundaries.

一个介于 10-1000 之间的数字，表示在采样后减慢返回边界的值的摩擦，如果超出边界，则停止。

**Output 输出**

The value with momentum added. Feed back into the Value input and add velocity with a + patch.

增加动量的值。反馈到值输入中，并使用 + 模块添加速度。

------

### ***\*Related Patches 相关模块\****

[Scroll 滚动](https://www.notion.so/Scroll-2f1508bfbec742279786513c26602209)

[Drag 拖拽](https://www.notion.so/Drag-3a3c7a4a7cc140e0b845728f2cb2b68f)

[Pop Switch 流行开关](https://www.notion.so/Pop-Switch-e83d8b2e102c466db20fbe80716861c3)

[Interaction 交互](https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc)

[Touches 触摸](https://www.notion.so/Touches-2a30a276b98e4c11b8b23bda1cde914c)

[Trackpad 触控板](https://www.notion.so/Trackpad-b999de442b7342ed9a00aa3f9547ea65)

[**[+](https://origami.design/documentation/patches/builtin.math.add.html) 加**](https://www.notion.so/8f03e4d8996f49ad994e405ad7cb58d5)
