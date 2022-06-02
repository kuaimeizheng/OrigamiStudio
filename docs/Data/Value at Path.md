---
sidebar_position: 2
---

# Value at Path 路径值

Get a value from a JSON object at a specified path. A path is a text value in dot notation that contains:

从指定路径的 JSON 对象中获取值。路径是点表示法的文本值，包含：

- Number(s) to select a value at an array index. For example, “books.0” will select the first book in an array of books.
- Number(s) 在数组索引处选择一个值。例如，“books.0”将选择书籍数组中的第一本书。
- Text string(s) to select a value for a key. For example, “books.0.title” will select the title of the first in array of books.
- 用于为键选择值的文本字符串。例如，“books.0.title”将选择书籍数组中第一个的标题。
- Asterisk(s) (*) to select an array of child values. For example, “books.*.title” will select an array of titles of all books.
- 星号 (*)用于选择子值数组。例如，”books*.*.title”将选择所有书籍的标题数组。

Starting the path with two dots will get a recursive search for the following values, for example “..title” will get all the values for the key “title”, no matter how deep in the JSON object they are.

以两个点开始的路径将递归搜索以下值，例如“..title”将获取键“title”的所有值，无论它们在 JSON 对象中有多深。

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2b49e44b-5e43-47eb-98e9-aeb0f100e1a1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165025Z&X-Amz-Expires=86400&X-Amz-Signature=bbfb50c6a110f37e7408792d306f37f5131201e340bd1af05246d7e9932a5d14&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Object 对象**

The JSON object or array to get the value from.

要从中获取值的 JSON 对象或数组。

**Path 路径**

A text string of the path in dot notation.

一个文本字符串，表示以点标记符号表示的路径。

比如：

”.0.name”，输出为 ”菠萝”，

”.1.name”，输出为 ”海枣”，

”.name”，输出为 ”菠萝、海枣”。

其中 Object 接收到的数组为：

```jsx
{
"name" : "菠萝",
"score" : 0.99999404000000003
},
{
"name" : "海枣",
"score" : 1.4050611e-06
}
```

**Value 值**

The value at the path.

路径上的值。

------

### ***\*Related Patches 相关模块\****

[Value for Key 关键值](https://www.notion.so/Value-for-Key-5e3c5536dbcf4c0b8a73f1d9fd20a380)

[Value at Index 索引值](https://www.notion.so/Value-at-Index-e23667c4b77b44b882f3936b67309eac)
