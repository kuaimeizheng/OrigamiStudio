---
sidebar_position: 2
---

# Classic Animation 经典动画

Animate a number (ex: position, opacity, scale) using a standard animation curve whenever the number is changed.

每当数字改变时，使用标准动画曲线对数值 (例如:位置，不透明度，比例) 进行动画处理。

See [Animation Basics] for more information.

有关详细信息，请参考 [动画基础](./../Patch%20Editor/Animations.md)。

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3dac0a9f-76e2-467d-b233-8c22bc7f89c2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T151035Z&X-Amz-Expires=86400&X-Amz-Signature=bd57eea89d2330c58aa53fbb5709bc776459cf48f61ad1896c35e969feb9c4f4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Number 数值

The number to animate to.

当接收到数值时，动画开始

### Duration 持续时间

The length of the animation, in seconds

动画的持续时间，以秒为单位

### Curve 曲线

The easing curve to animate with.

动画的缓动曲线

The options are:

选项包括：

1. Linear 线性，匀速
2. Quadratic In, Out, In & Out 二次方缓入
3. Quadratic Out 二次缓出
4. Quadratic In-Out 二次缓入缓出
5. Cubic In, Out, In & Out 三次缓入
6. Cubic Out 三次缓出
7. Cubic In-Out 三次缓入缓出
8. Exponential In, Out, In & Out 指数缓入
9. Exponential Out 指数缓出
10. Exponential In-Out 指数缓入缓出
11. Sinusoidal In, Out, In & Out 正弦缓入
12. Sinusoidal Out 正弦缓出
13. Sinusoidal In-Out 正弦缓入缓出

曲线动画参考：

![曲线 In ：慢 ➔ 快](https://upload-images.jianshu.io/upload_images/4055792-fa685c0913c4d066.gif?imageMogr2/auto-orient/strip|imageView2/2/w/560/format/webp)

曲线 In ：慢 ➔ 快

![曲线 Out ：快 ➔ 慢](https://upload-images.jianshu.io/upload_images/4055792-79e434cb948a8458.gif?imageMogr2/auto-orient/strip|imageView2/2/w/560/format/webp)

曲线 Out ：快 ➔ 慢

![曲线 In & Out ：慢 ➔ 快 ➔ 慢](https://upload-images.jianshu.io/upload_images/4055792-cfd0105a21169d5d.gif?imageMogr2/auto-orient/strip|imageView2/2/w/560/format/webp)

曲线 In & Out ：慢 ➔ 快 ➔ 慢

### Progress

A number that is tweened with an easing curve as it moves toward the Number input.

一个数字，当它向数值输入移动时，使用缓和曲线进行补间，

Typically a progress value. See [Animation Basics]for more information.

通常是一个进度值，更多信息请参考 [动画基础](./../Patch%20Editor/Animations.md)。

---

### Related Patches 相关模块

[Pop Animation 流行动画](./Pop%20Animation.md)

[Repeating Animation 重复动画](./Repeating%20Animation.md)

[Transition 过渡](./../Utility/Transition.md)

历史版本

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3882800-16f2-4c05-96b4-bc0ca194b84d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T151116Z&X-Amz-Expires=86400&X-Amz-Signature=5f91100aa0d363c0871f29dcaf83d1f3693a1bf590e037050ef27d655c7bcb66&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
