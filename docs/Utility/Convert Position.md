---
sidebar_position: 2
---

# Convert Position 转换点

Use this to align layers that have different parent layers. This can be helpful to align overlays with content in scrollviews, for example.

使用这个可以对齐具有不同父级的图层。例如，这可以将叠加元素与滚动视图中的内容对齐。

If you want to have layer B follow layer A, add layer A as the “From parent” and use the position 0,0. Then put the parent of layer B into To Parent. Connect the output of this patch to layer B.

如果您想让 B 图层跟随 A 图层，请将 A 图层添加为 “From Parent” 并使用位置 0,0。然后将图层 B 的父级放入 To Parent。将此模块的输出连接到 B 图层。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e418892b-a888-4ff9-bf9a-4e5ff5e6cf19/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T180908Z&X-Amz-Expires=86400&X-Amz-Signature=9fd766a7b19bdb8aa0dacc797af87c16ad95c07006f99b09a60934270789d796&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### From Parent 从父级

The layer you would like to get the position of.

您想要获得位置的图层。

### Input 输入

Optionally, pass in a position within the layer parent layer. 0,0 works well.

可选，在图层的父级中传递一个位置。 建议0,0。

### Anchor 锚点

Use this to determine whether you are converting the top left, middle, bottom right, etc

使用此选项来确定您是否正在转换左上、中间、右下等等

### To Parent 到父级

The parent layer you would like to get your converted position in context of

要在其上下文中获取转换位置的父层

### To Anchor 到锚点

The converted position will use this anchor relative to the parent.

转换后的位置将使用这个相对于父级的锚点。

### Output 输出

The converted X / Y position. (Use a Point Unpack patch to get each individual coordinate value)

转换后的 X / Y 位置。 （使用 Point Unpack 模块获取每个单独的坐标值）

### Error 错误

A boolean if there was an error getting the converted position coordinates. Typically this is caused by one of the layers being disabled.

如果获取转换后的位置坐标时出错，则为布尔值。通常这是由其中一层被禁用引起的。

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fb2b0ff7-3414-4bee-9990-ad3585a79cb8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T180916Z&X-Amz-Expires=86400&X-Amz-Signature=f9a1fa0b0927e8d2c8b0c80de1ac37891e6200885ed896b62ad3c259559d5f5c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
