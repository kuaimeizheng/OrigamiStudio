---
sidebar_position: 2
---

# Smooth Value 平滑值

For advanced use only — use the Pop Animation or Classic Animation patch instead.

Smooth a value as it changes.

高级模块，可用Pop Animation### 或 ### Classic Animation### 替代。

平滑改变中的值。

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ebec5eee-7319-46ba-8013-b401b663b50e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T151609Z&X-Amz-Expires=86400&X-Amz-Signature=794aef2ff7adefa937d8658a91a54ce2588349d9ae61f280f04ea252f3081441&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Value 值

A number to smooth.

平滑值。

### Hysterisis 滞后

A number from 0-1 that represents the rate at which to smooth the value, where the value in the next frame = (previous frame * hysterisis) + (current frame * (1 - hysterisis).

一个 0-1 的数字，表示平滑值的速率，其中下一帧中的值 = (前一帧 * 滞后) + (当前帧 * (1 - 滞后)。

### Reset 复位

A pulse that resets the value to the input value.

让动画跳回开始时。

### Progress 进度

Animated value

进度值

---

### Related Patches 相关模块

[Pop Animation 流行动画](./Pop%20Animation)

[Classic Animation 经典动画](./Classic%20Animation)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6e4af66-7fdf-4297-95cc-7cde2c2e1acd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T151620Z&X-Amz-Expires=86400&X-Amz-Signature=5214a777175c690e1ae71d294201d38fd3d3361d41157765bc6e126045a1317f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
