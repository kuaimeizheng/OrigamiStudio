---
sidebar_position: 2
---

# Loop Filter 循环筛选

This is a very powerful patch that can do a lot of things! It can filter items out of a loop, but it can also repeat items in a loop. It can even be used to create a new loop with a single value repeated X times.

这是一个非常强大的模块，有很多功能！它可以从循环中过滤项目，但也可以在循环中重复项目。它甚至可以用来创建一个重复 X 次值的新循环。

The idea is that you pass in two loops. The values loop is what you want to modify — you either want to remove items or repeat items in this loop. The second loop you pass in tells us how many times each value should appear (or if it should be removed by repeating 0 times).

你需要使用两个循环。 values值 循环是您要修改的内容——在此循环中删除项目或者重复项目。传入的第二个循环设置每个值应该出现多少次（或者是否通过重复 0 次来删除它）。

Example A: Filter to a subset of a loop.

示例 A：筛选到循环的子集。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2b81ccc1-54b8-4605-8df1-7af1b46132f3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172916Z&X-Amz-Expires=86400&X-Amz-Signature=c12861778c4cf9c7f7b74c222b660fbccddfc4f59fa6da1d7d228366d09e9222&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Example B: Make a new loop by repeating a single value X times.

示例 B：通过将单个值重复 X 次来创建一个新循环。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/01be880f-d168-42c6-8708-55d688b49d67/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172926Z&X-Amz-Expires=86400&X-Amz-Signature=5b3c0c4ecfa5ca3537058a5875a04fe05ae10b7cb8c51c6663503dcd389a6b7f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Example C: Repeat and filter values by using a loop of numbers.

示例 C：使用数字循环重复和过滤值。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fe15e1d5-5829-48a4-83b8-cd2353b47986/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172935Z&X-Amz-Expires=86400&X-Amz-Signature=3affbc2622dbe05d7f35af33a5c94b2ea31556cbc1df7dceccca354b4dd44cc9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Right-click the patch to change the expected type of the Input loop.

右键单击模块以更改输入循环的预期类型。

Use Loop Builder to make a boolean or number loop.

使用 Loop Builder 创建一个布尔值或数字循环。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ece207c0-76ae-4478-ba9a-e2799faaa79d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172946Z&X-Amz-Expires=86400&X-Amz-Signature=b496a13206942b0534fe9b1d833d1ac20e841c10a827e063103ca0377b6a42e4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Input 输入

A loop of values.

包含值的循环。

### Include 包含### 

A loop of booleans (to include or not include), or a loop of numbers (to decide how many times a value is repeated).

一个布尔循环（包括或不包括），或一个数字循环（决定一个值重复多少次）。

### Loop 循环### 

The result loop, with values either filtered or repeated

结果循环，值已被过滤或重复。

### Index 索引### 

A loop of indices for the result loop

结果循环的索引循环

### 支持的类型

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c81df63d-45fa-4b22-9d3e-49a293f5c1cb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172956Z&X-Amz-Expires=86400&X-Amz-Signature=c7d06b8b283e7efeb0fb5461ecdaa09a042786258ce19581d9aebfa57f4075b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

------

### Related Patches 相关模块

[Loop 循环](https://www.notion.so/Loop-6cc974bf77e84e7aaf7836927011540b)

[Loop Builder 循环生成器](https://www.notion.so/Loop-Builder-64d346e189494fa9b48050aac8eb8eff)

[Loop Select 循环选择](https://www.notion.so/Loop-Select-bb035c1f66a9408da5d038084f713378)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/91ca4083-f65d-4d4f-9476-113330085dd2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173004Z&X-Amz-Expires=86400&X-Amz-Signature=c308b0657ec182c6947bfc241745b4b5eff850e03c2415249fc79b39809f372c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
