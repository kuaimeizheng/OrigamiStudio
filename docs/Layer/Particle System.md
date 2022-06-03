---
sidebar_position: 2
---

# Particle System 粒子系统

A particle emitter. Configure the specific birthrate, velocity, angle and color change over their lifetime. Add an image to replace the standard circular particle.

粒子发射器。设置其生命周期内的特定出生率、速度、角度和颜色变化。添加图像以替换默认的圆形粒子。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/57ccc77d-febc-44d7-b6d3-c6dab5a2b2e8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185430Z&X-Amz-Expires=86400&X-Amz-Signature=4fbcd38889464af878d3519d2dfabc41cf8e182f2df0159905b4dcec4469cf53&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Enable 启用

A boolean that is true when the layer is displayed.

勾选启用图层。

### Opacity 不透明度

The opacity of the layer.

图层的不透明度。

### Position 位置

The position to display the layer. Use [Point 3D](https://www.notion.so/Point-3D-6d2c3b3df3f74659ae0d647876ce3aa9) to set Z position.

显示图层的位置。使用 Point 3D 设置 Z 位置。

### Scale 比例

The scale of a particle.

粒子的比例

### Color 颜色

The color of a particle when it is generated.

粒子生成后的颜色。

### Lifetime 寿命### 

The duration a particle lasts, in seconds.

单个粒子生存的时间，正数，以秒为单位。

寿命：值越大生存时间越长

![4055792-4f59736d715796d4.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/224ff8c2-e109-4d02-bfc5-80a834975775/4055792-4f59736d715796d4.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185449Z&X-Amz-Expires=86400&X-Amz-Signature=268038f6aa1425f3ea2ff30daa2ceb84be6e035e263ca1636cbaf72b7c31479d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%224055792-4f59736d715796d4.gif%22&x-id=GetObject)

### Birthrate 出生率### 

The number of particles generated.

出生率：值越大数量越多

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2d93a3a-e0ec-40cf-98aa-60f419cdec7b/Untitled.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185503Z&X-Amz-Expires=86400&X-Amz-Signature=938621e51363585421953b67521e5b11724692583b459408101cdf7d41db8f98&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.gif%22&x-id=GetObject)

生成的粒子数量。

### Color Change 颜色变化### 

The color of a particle when it disappears.

粒子消失时的颜色。（示例图中颜色浅的那边）

### Velocity 速度

The base speed of a particle as it flies out.

粒子出生时的速度。

速度：值越大速度越快，对角度的执行越明显

![4055792-122b9f571f57b784.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6a67d140-4edf-4ec3-b87b-e8b099f90209/4055792-122b9f571f57b784.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185518Z&X-Amz-Expires=86400&X-Amz-Signature=7d932d2ca640d53c461e28f52a7a2210b038f08cdabbbf52905a1de444371734&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%224055792-122b9f571f57b784.gif%22&x-id=GetObject)

### Velocity Variance 随机速度范围### 

A number that represents the range of randomized speeds of a particle.

表示粒子的随机速度范围的值。

### Angle 角度

The base angle of a particle as it flies out.

粒子出生时的方向。

角度：对应旋转属性的Z轴方向，0～360度为从三点钟方向开始顺时针旋转一周

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b67990a-dd91-4ffc-bdac-087e5c8f6f39/Untitled.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185529Z&X-Amz-Expires=86400&X-Amz-Signature=c7e4f7d0b25b8843fc9238847671120f10a4c434e1a06599f7b781c43ea71216&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.gif%22&x-id=GetObject)

### Angle Range 随机角度范围### 

A number that represents the range of randomized angles of a particle.

表示粒子的随机化角度范围的数字。（以角度中设置的值为中轴，左右两侧对称分布）

随机角度范围：0～360之间的数，数字控制范围，不区分正负值

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/afe07d5e-fe1a-45ae-8cd3-12537678efa3/Untitled.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185540Z&X-Amz-Expires=86400&X-Amz-Signature=98213a4c390babaa4619efc64e16bb410279fd82e4c2c07c229496bedc6f65d7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.gif%22&x-id=GetObject)

### Acceleration 加速度

A vector that represents the acceleration of particles in each axis.

控制粒子消亡的角度和速度。

加速度：XYZ轴的正负值控制方向，数字的大小控制速度快慢

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cdd765c9-edd3-427b-937f-ea260fa34ac9/Untitled.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185550Z&X-Amz-Expires=86400&X-Amz-Signature=e4fdbf245be72dca263718969d3fbc94d29c1fcd09604ce382bb862f7f29dd24&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.gif%22&x-id=GetObject)

补充：

“速度+角度”控制出生的速度和角度，“加速度”控制消亡的速度和角度，三个属性相互影响。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a4730a8a-8a0d-4027-b23c-6bd940ced516/Untitled.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185559Z&X-Amz-Expires=86400&X-Amz-Signature=0169c447e47ba75e59292ac1dcdfb974eaff733ec43bde5029e96babc71df671&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.gif%22&x-id=GetObject)

### Delta 大小增量

A number that represents the range of randomized sizes of a particle.

表示粒子随机大小范围的数字。

大小增量：0为不放大不缩小，负数为缩小，正数为放大

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d0f32cb0-fbc1-4a9a-9399-af3b7329bdcf/Untitled.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185607Z&X-Amz-Expires=86400&X-Amz-Signature=7aaef0395b2690c293050a751141a947093eb0d9ce72da37722d648b32676948&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.gif%22&x-id=GetObject)

### Image 图像### 

An image that replaces the default circle as the particle.

将默认圆粒子替换为图像。

图片的 Color 无法改变，Color Change 只能调整透明度；双击Image 的值添加图片；选中 Image 的值按 Del 删除图片。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db4a0aa8-83b5-4790-940e-7f9ff95cefa7/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T185618Z&X-Amz-Expires=86400&X-Amz-Signature=f44b81d3b1407a9b52b04a1c7f8b3b424919eadf5cf849d5677c13014bcd8066&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22&x-id=GetObject)

------

### Related Patches 相关模块

[Image 图片](https://www.notion.so/Image-826d9097aca041e8a8aa1a102e87b9d8)
