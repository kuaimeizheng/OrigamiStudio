---
sidebar_position: 2
---

# Equals 等于

Check if two numbers are equal, or approximately equal within a tolerance. Useful for bouncy values that don’t settle on round integers.

检查两个数字是否相等，或者在公差范围内近似相等。适用于不是固定整数的弹性值。

![Image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cb6246c1-e805-4b71-bab8-dd43f00612ec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172020Z&X-Amz-Expires=86400&X-Amz-Signature=8b2c4159338b00a431dfecc0fc0de6bc577981b532490190dbc4e61f8c9200ca&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### First Value 第一个值

The base number.

基数值。

### Second Value 第二个值

The number to compare to the base.

和基数值比较的值，

### Tolerance 容差

A number that represents the wiggle room between the first and second values where. For example, a tolerance of .1 means that 2.1 is equal to 2. Useful for bouncy/smoothed values.

一个数值，表示基数值和第二个值之间允许相差的范围。

例：公差为0.1，表示 2.1 或 1.9 等于 2。适用于弹性／平滑值。

### Output 输出

A boolean that is true if the first and second values are equal within the tolerance.

一个布尔值，表示基数值和第二个值在容差值內时为真。

------

### Related Patches 相关模块

[And 和](./And.md)

[Or 或](./Or.md)

[Not 非](./Not.md)

[Equals Exactly 完全等于](./Equals%20Exactly.md)

[Greater Than 大于](./Greater%20Than.md)

[Greater Than or Equal 大于等于](./Greater%20Than%20or%20Equal.md)

[Less Than 小于](./Less%20Than.md)

[Less Than or Equal 小于等于](./Less%20Than%20or%20Equal.md)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/acb68c9b-b9fa-449a-8dcf-77723da01686/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172028Z&X-Amz-Expires=86400&X-Amz-Signature=36780d6bfb2c5f9263572c9070fb44829db8f1146283390ccdec1b71ec575aa1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
