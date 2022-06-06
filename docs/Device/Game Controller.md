---
sidebar_position: 2
---

# Game Controller 游戏控制器

Control your prototype using any [MFI-compatible](https://developer.apple.com/programs/mfi/) Game Controller. Supports the Game Pad and Extended Game Pad profiles. Micro Game Pad profile is not available on macOS.

使用任何兼容 MFI 的游戏控制器控制您的原型。支持 Game Pad 和 Extended Game Pad 配置文件。 Micro Game Pad 配置文件在 macOS 上不可用。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/30689e11-a284-435c-8e3b-7959acd75370/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165650Z&X-Amz-Expires=86400&X-Amz-Signature=adca4261ff2e0187320b9fa68c0fb7d43a2728793c0c24b5ce0bee2ffc084a84&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Connected 连接

A boolean that is true when a controller is paired and connected.

一个布尔值，表示当控制器配对并连接时为真。

### A

A boolean that is true when the bottom face button is pressed.

一个布尔值，表示当按下 A 按钮时为真。

### b

A boolean that is true when the right face button is pressed.

一个布尔值，表示当按下 B 按钮时为真。

### X

A boolean that is true when the left face button is pressed.

一个布尔值，表示当按下 X 按钮时为真。

### Y

A boolean that is true when the top face button is pressed.

一个布尔值，表示当按下 Y 按钮时为真。

### L1

A boolean that is true when the left shoulder button is pressed.

一个布尔值，表示当按下 L1 按钮时为真。

### R1

A boolean that is true when the right shoulder button is pressed.

一个布尔值，表示当按下 R1 按钮时为真。

### L2

A boolean that is true when the left trigger button is pressed. Only supported on controllers with the Extended Game Pad profile.

一个布尔值，表示当按下 L2 按钮时为真。仅在具有扩展游戏手柄配置文件的控制器上受支持。

### R2

A boolean that is true when the right trigger button is pressed. Only supported on controllers with the Extended Game Pad profile.

一个布尔值，表示当按下 R2 按钮时为真。仅在具有扩展游戏手柄配置文件的控制器上受支持。

### D-pad

A point value between -1 ,-1 (bottom left) and 1,1 (top right) that represents the position of the directional pad.

一个介于 -1 ,-1（左下）和 1,1（右上）之间的点值，表示方向键的位置。

### Left Thumbstick 左拇指杆

A point value between -1 ,-1 (bottom left) and 1,1 (top right) that represents the position of the left joystick.

一个介于 -1 ,-1（左下）和 1,1（右上）之间的点值，表示左操纵杆的位置。

### Right Thumbstick  右拇指杆

A point value between -1 ,-1 (bottom left) and 1,1 (top right) that represents the position of the right joystick.

介于 -1 ,-1（左下）和 1,1（右上）之间的点值，表示右操纵杆的位置。
