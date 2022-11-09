---
sidebar_position: 5
---

# Photo Library Media 照片库媒体

Access information about a Photo media asset.

访问有关照片媒体资产的信息。

![Image](./../../../static/img/docs/Media/photo-library-media.png)

### Asset 资源

A Photo media asset coming from [Photo Library](./Photo%20Library.md).

来自照片库的照片媒体资产。

### Image 图片

If the photo media asset is an image it returns the corresponding image, if it’s a video it returns a snapshot image of the video.

如果照片媒体资产是图像，则返回相应的图像，如果是视频，则返回视频的快照图像。

### Video 视频

The corresponding video if the photo media asset is video type or an empty video when the asset is an image.

如果照片媒体资产为视频类型，则为对应的视频；如果资产为图像，则为空视频。

### Natural Size 原始尺寸

The original size of the photo media asset.

照片媒体资产的原始大小。

### isPlayable 可播放

A boolean value representing if the photo media asset can be played. It returns true only for videos.

### isFavorite 可收藏

A boolean value representing if the photo media asset is a favorite.

一个布尔值，表示照片媒体资产是否可收藏。
