---
sidebar_position: 2
---

# Sound Player 声音播放器

Play any sound or music file.

播放任意声音或音乐文件。

![Image](./../../static/img/docs/Device/sound-player.png)

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
