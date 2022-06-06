---
sidebar_position: 2
---

# Sound Player 声音播放器

Play any sound or music file.

播放任意声音或音乐文件。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/21d916a1-e434-4f9e-9209-b2066d74e2a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170310Z&X-Amz-Expires=86400&X-Amz-Signature=46fa0bd325141a193759d7cf217cef3ea1f06040bf52a5db616197d719d6eb71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Sound 声音

The sound to play. Drag a sound file into the patch editor and connect it to the Sound Player.

播放的声音。将声音文件拖动到模块编辑器中，并将其连接到这端口。

### Play 播放

A boolean that is true when the sound is playing.

声音播放时布尔值为真。

### Reset 重置

A pulse that resets the sound being played.

重置声音播放。

### Loop 循环

A boolean that is true when the sound is looped continuously.

当声音为循环模式时布尔值为真。

### Settings 设置

The settings from [Sound Player Settings](./Sound%20Player%20Setting.md).

从 Sound Player Setting 连接过来的设置。

### Current Time 当前时间

This shows how far into the sound the player is at.

显示播放器所处的进度离结束还有多久。

### Duration 持续时间

This is the total time of the sound file.

声音文件的总时间

### Metering 计量

Connect this to the [Audio Metering](./../Media/Audio%20Metering.md) patch to make visualizations based on the playing sound.

将其连接到 Audio Metering 模块，以根据播放的声音进行可视化。

------

### Related Patches 相关模块

[Microphone 话筒](./Microphone.md)

[Sound Kit 音效包](./Sound%20Kit.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2d0710cb-2421-4870-8a88-c2e39e4a9cf7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170318Z&X-Amz-Expires=86400&X-Amz-Signature=3358ec04cba12c016a8a38ddfb6bcc7addd91f4f7e1109fc709f9ea070acef8d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
