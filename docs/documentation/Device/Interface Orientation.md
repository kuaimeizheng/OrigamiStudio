---
title: Interface Orientation 界面方向
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Interface Orientation 界面方向

Define how the prototype’s interface reacts to rotation of the device. Different phones, laptops or tablets can have different set of supported interface orientations. Use the [Device Info](./Device%20Info.md) patch to get the physical orientation of a connected device in angles.

控制原型界面如何响应设备的旋转。不同的手机、笔记本电脑或平板电脑可以有不同的支持界面方向。使用 [Device Info](./Device%20Info.md) 可以从多个角度获取连接设备的物理方向。

![Image](./../../../static/img/docs/Device/interface-orientation.png)

### Start In 开始于

The interface orientation to be shown when the prototype starts or restarts. Can be Portrait, Landscape Reft, Landscape Left or Upside Down. If the current device doesn’t support this orientation, it will use its default orientation instead.

原型启动或重新启动时界面的显示方向。可以是纵向、向右横向、向左横向或倒置。如果当前设备不支持此方向，它将使用其默认方向。

### Portrait 纵向

A boolean indicating whether the interface will rotate when device is rotated to the portrait orientation.

一个布尔值，表示当设备旋转到纵向时，界面是否会旋转。

### Landscape Left 左横向

A boolean indicating whether the interface will rotate when device is rotated to the left landscape orientation.

一个布尔值，表示当设备向左横向旋转时，界面是否会旋转。

### Landscape Right 右横向

A boolean indicating whether the interface will rotate when device is rotated to the right landscape orientation.

一个布尔值，表示当设备向右横向旋转时，界面是否会旋转。

### Upside Down 颠倒

A boolean indicating whether the interface will rotate when device is rotated to the upside down orientation.

一个布尔值，表示当设备旋转方向颠倒时界面是否会旋转。

------

### Related Patches 相关模块

[Device Info 设备信息](./Device%20Info.md)
