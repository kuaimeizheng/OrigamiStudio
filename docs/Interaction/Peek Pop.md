---
sidebar_position: 2
---

# Peek Pop 轻压重压

Allows you to build prototypes using Apple’s Peek/Pop 3D Touch feature from iOS 9. This patch takes in a touch force and exposes peek progress, pop progress and whether or not the current content should be peeking or popped.

允许你使用 iOS 9的苹果 Peek/Pop 3D Touch 功能来构建原型。这个模块在触摸力度和轻压力度，重压力度以及是否允许当前的内容可以被轻压或重压。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19a9918f-9d5e-4a6b-9bb0-0285f9804e8c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171340Z&X-Amz-Expires=86400&X-Amz-Signature=aa894315e380553cba4b8bc8ecce388c6d02f088741147d762eb0617fe57746d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Enable Pop 启用轻压**

一个布尔值，当接收到交互模块启用时为真。

**Force 压力**

一个数字，表示接收到的触摸的压力值。

**Reset 重置**

一个布尔值，表示是否重置交互。

**Peek Force 轻压力度**

一个数字，表示达到轻压所需的力度。

**Pop Force 重压力度**

一个数字，表示达到重压所需的力度。

**Peek Progress 轻压进度**

一个从0到1的数字动画，表示当前轻压的力度。

**Popped Progress 重压进度**

一个从0到1的数字动画，表示当前重压的力度。

**Peeking 是否轻压**

一个布尔值，表示当前是否被轻压。

**Popped 是否重压**

一个布尔值，表示当前是否被重压。

------

### Related Patches 相关模块

[Interaction 交互](https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc)

------

### **Sample  示例**

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5b9c5b4a-7f9e-4621-bb9d-26b9e9f75051/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171347Z&X-Amz-Expires=86400&X-Amz-Signature=12a7a19385e55c935745c4298bd6f23ae2e8bef2c5839d594d66121acfc3b2be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

如图：

当检测到按下时， Enable Pop 输入端口为真，Force 输入端口显示当前压力值的数字，当压力值从 0 到 3 时，Peek Progress 输出端口做从 0 到 1 的动画，并输出为 1，当前压力值从 3 到 6.65 时，Popped Progress 输出端口从 0 到 1 的动画，并输出为 1，当压力值达到 3 和 6.65 时，Peeking 和Popped 端口输出为真。
