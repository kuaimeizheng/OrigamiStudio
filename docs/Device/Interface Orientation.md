---
sidebar_position: 2
---

# Interface Orientation 界面方向

Define how the prototype’s interface reacts to rotation of the device. Different phones, laptops or tablets can have different set of supported interface orientations. Use the [Device Info](./Device%20Info.md) patch to get the physical orientation of a connected device in angles.

控制原型界面如何响应设备的旋转。不同的手机、笔记本电脑或平板电脑可以有不同的支持界面方向。使用 [Device Info](./Device%20Info.md) 可以从多个角度获取连接设备的物理方向。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69aa4c61-d99c-49ee-a444-d3b7d4bbed1d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165835Z&X-Amz-Expires=86400&X-Amz-Signature=6e1ede1103717be56752e5683d6ad50475196ad0cf206290e18fbe5ba05bf1fa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Start In 开始于### 

The interface orientation to be shown when the prototype starts or restarts. Can be Portrait, Landscape Reft, Landscape Left or Upside Down. If the current device doesn’t support this orientation, it will use its default orientation instead.

原型启动或重新启动时界面的显示方向。可以是纵向、向右横向、向左横向或倒置。如果当前设备不支持此方向，它将使用其默认方向。

### Portrait 纵向### 

A boolean indicating whether the interface will rotate when device is rotated to the portrait orientation.

一个布尔值，表示当设备旋转到纵向时，界面是否会旋转。

### Landscape Left 左横向### 

A boolean indicating whether the interface will rotate when device is rotated to the left landscape orientation.

一个布尔值，表示当设备向左横向旋转时，界面是否会旋转。

### Landscape Right 右横向### 

A boolean indicating whether the interface will rotate when device is rotated to the right landscape orientation.

一个布尔值，表示当设备向右横向旋转时，界面是否会旋转。

### Upside Down 颠倒### 

A boolean indicating whether the interface will rotate when device is rotated to the upside down orientation.

一个布尔值，表示当设备旋转方向颠倒时界面是否会旋转。

------

### Related Patches 相关模块

[Device Info 设备信息](./Device%20Info.md)

历史版本

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5de2839d-9324-4a9d-acb6-06b5c2b508f5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165847Z&X-Amz-Expires=86400&X-Amz-Signature=bd35c0b349b8820ae6616aac111c4c968fcc6cefa378f331fd189bcf25d716bb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
