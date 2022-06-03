---
sidebar_position: 2
---

# Audio Metering 音频测量

Measure the peak volume, current volume, and frequency data (sound wave) of an audio source (Microphone, Audio Layer or Video Layer).

测量音频源（麦克风、音频层或视频层）的峰值音量、当前音量和频率数据（声波）。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fd6d2fcb-853a-4d91-9e88-895748b3cf1d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T175615Z&X-Amz-Expires=86400&X-Amz-Signature=0859720576688ab6188c8d30634173ba3bbcfe6da9f1c08fc49bcce124384a32&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Input 输入

Metering output from an audio source such as a Microphone patch, Audio Layer, or Video Layer.

### Resolution 解析度

The number of loops to return from the Waveform output.

从波形输出返回的循环数。

### Format 格式化

An enum of the output type to return, either as a percentage from 0 to 1 or as decibels (-160 (silence) to 0).

要返回的输出类型的枚举，可以是从 0 到 1 的百分比，也可以是分贝（-160（静音）到 0）。

### Peak Volume 峰值音量

A number of the highest point over time (roughly every 0.5s or so) output as a percent or in decibels.

随着时间的推移(大约每0.5秒左右)，一个百分比或分贝的数字输出。

### Volume 音量

A number of the current volume as a percent or in decibels.

当前音量的百分数或分贝数。

### Waveform Data 波形数据

A loop of low, mid, and high ranges of the audio output as a percent or in decibels.

以百分比或分贝为单位的音频输出的低、中、高范围的循环。
