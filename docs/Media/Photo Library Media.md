---
sidebar_position: 2
---

# Photo Library Media 照片库媒体

Access information about a Photo media asset.

访问有关照片媒体资产的信息。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77b4009a-d163-45de-a8e8-7a6108d47b72/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T175728Z&X-Amz-Expires=86400&X-Amz-Signature=46c01c141c1b1c54e6209176f2c9e0a6b056c0cc9ef85b672ecbd491c9779795&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Asset 资源### 

A Photo media asset coming from [Photo Library](https://www.notion.so/Photo-Library-9c33cd7f081843bb9f70530ba6425e87).

来自照片库的照片媒体资产。

### Image 图片### 

If the photo media asset is an image it returns the corresponding image, if it’s a video it returns a snapshot image of the video.

如果照片媒体资产是图像，则返回相应的图像，如果是视频，则返回视频的快照图像。

### Video 视频### 

The corresponding video if the photo media asset is video type or an empty video when the asset is an image.

如果照片媒体资产为视频类型，则为对应的视频；如果资产为图像，则为空视频。

### Natural Size 原始尺寸### 

The original size of the photo media asset.

照片媒体资产的原始大小。

### isPlayable 可播放### 

A boolean value representing if the photo media asset can be played. It returns true only for videos.

### isFavorite 可收藏### 

A boolean value representing if the photo media asset is a favorite.

一个布尔值，表示照片媒体资产是否可收藏。
