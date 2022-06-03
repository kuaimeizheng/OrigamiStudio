---
sidebar_position: 1
---

# Coordinates 坐标

Origami Studio use pt/dp coordinates instead of pixels. Specify position or size in pt/dp, and Origami will handle rendering layers at the appropriate density. For instance an iPhone 7 is 375x667 in points, but 750x1334 in pixels.

Origami Studio使用pt / dp单位为坐标，不是像素。 用pt / dp指定位置和大小 (板栗：设计图的1倍值，Sketch里的内置的设备的尺寸) ，Origami将以合适的密度显示图层。 例如，iPhone 7的点数为375x667 (例如：设计的1倍图) ，但像素为750x1334 (例如：设计的2倍图) 。

(例如：图层属性窗口中有两种坐标，一种是锚点Anchor### 坐标，用于对象的定位和对齐方式；另一种的图层的中心点Pivot### 坐标，像Ps中旋转时会有一个中心点，旋转时以那个点为圆心)

By default, the origin (x: 0, y: 0) is in the center of the device screen. On the X axis, coordinates increase as you move right, and decrease as you move left. On the Y axis, coordinates increase as you move down, and decrease as you move up.

默认情况下，坐标原点（x：0，y：0）在屏幕的中心。 X轴坐标，原点向右为正数，向左为负数。Y轴坐标，原点向下为正数，向上为负数。

For illustration, below is a Layer Group of height 400 pixels and width 300 pixels:

例如，下面是一个图层在屏幕中的坐标，图层高400宽300：

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4c125cc-85c0-4bfe-9f34-ababe71a1166/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040429Z&X-Amz-Expires=86400&X-Amz-Signature=f7c629411116b8c33f318fbc20be418815c30e45d909f3ba81b33dbd0be45baa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Anchor Point 坐标锚点

Anchor points change the origin of the coordinate system for that patch. Anchor points can be defined in the Patch Editor with a Point patch, where X and Y are any decimal 0-1.

更改锚点会改变模块的坐标原点位置。 锚点可以通过### [Point]### 模块控制，X和Y的值可以是0～1之间的任何数。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d8e39339-7904-43d7-8a72-3088adfb15ee/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040439Z&X-Amz-Expires=86400&X-Amz-Signature=28a2d96284af6f2eb8a62ea47eda85809d653e83536197357f7d4c2cae134799&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Here’s an example of a Text Layer positioned from the “Top Left” Anchor Point:

下面是一个锚点在左上角的示意图：

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8731ab8c-a6c2-42fc-a92a-c803e4c89d8a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040446Z&X-Amz-Expires=86400&X-Amz-Signature=cd37051c4814f0c20d1d49cff06ed5de8398d5e4ef7c2e5825bad4abab1a9da6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

From the bottom right:

锚点在右下角的文字图层：

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4d2cea4-c40f-4742-a46e-558f9a0e6e53/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040454Z&X-Amz-Expires=86400&X-Amz-Signature=42227de6ed847d7f617de4356813fd77fe0a98f033618eb2f2214ce01621c65d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

If you want to inset it by 40 pixels, give it an X Position of -40 and a Y Position of -40.

如果你想把图层向左上方移动40像素，X和Y的值都要输入-40。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/56882006-a8cb-4d11-9db8-4a89e646c84e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040502Z&X-Amz-Expires=86400&X-Amz-Signature=58cf1559f6b5abd6a1abf904b8631a7b6987067a5886ad6d6835fcb25649891d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Pivot 图层中心点

The pivot port changes the point about which a layer scales and rotates, and can be controlled separately from anchor points. Pivots can be defined in the Patch Editor with a Point patch, where X and Y are any decimal 0-1.

### Pivot 的### 端口是图层缩放和旋转的中心点，这个中心点可以和锚点分开控制。中心点可以通过[Point]模块控制，X和Y的值可以是0～1之间的任何数。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e74e97d5-2b1b-415a-8c39-cd2269f0ead7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040513Z&X-Amz-Expires=86400&X-Amz-Signature=b9c20d13c5ec8f77cf638b719d4eaa9f5ab490df35cee7f066d2d7e277b82453&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Center (.5, .5)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1050850-1284-46e5-8063-2d68624c493d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040521Z&X-Amz-Expires=86400&X-Amz-Signature=5148564b3b6f41a30f2467e1e6b0fcb9ec282ffb8ba9276334e36d5334e11138&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Top Left (0, 0)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4e081faa-388a-4a78-8956-c8e3fcbe1a8c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220603T040531Z&X-Amz-Expires=86400&X-Amz-Signature=90f00eb16c72331829527e55dd68120fb3b51cda2fde69c718231ad130f87f7f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Center Right (1, .5)
