---
title: Math Expressions 数学表达式
sidebar_position: 20
last_update:
  author: 蒯美政
---

# Math Expressions 数学表达式

---

数学表达式是一个强大的工具，可以创建更复杂的逻辑原型。

您可以插入单个 [Math Expression](./../Math/Math%20Expression.md) 模块，输入要计算的表达式，并连接其输入和输出，而不是为每个计算操作添加模块并将它们连接在一起。下面是一个简单的例子:

![Image](./../../../static/img/docs/Concepts/math-expressions-1.png)

---

当从模块选择器插入 Math Expression 模块时，开始是没有输入或输出的。在出现的窗口中输入表达式后，模块将会更新以包含所输入表达式的输入和输出。

![](https://origami.design/public/images/docs/mathExpression-editor.png)

要编辑 Math expression 模块中使用的表达式，右键单击模块，在菜单中选择 “patch Info” (或按下 ⌘I)。

编辑完成后，按回车键保存更新。注意，更改模块的标题不会影响表达式。

表达式可以包含任何数学运算(+，-，\*，/，%，### )或 [JavaScript Math library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)中的函数。

任何在 JavaScript 中有效的表达式都可以使用，但输入和输出只能是数字。如果您在编辑器中输入无效的表达式，它将不会被保存，并以红色高亮显示。

## Example Math Expressions 数学表达式示例

使用下面的表达式模块计算两点之间的距离。请注意，我们如何在表达式的开头包含“distance =”来命名模块的输出。

```
distance = Math.sqrt((x2-x1) 2 + (y2-y1) 2)
```

![Image](./../../../static/img/docs/Concepts/math-expressions-3.png)

通过编写用分号分隔的多个表达式，创建一个带有多个输出的模块:

```
quotient 商数 = a/b; remainder 余数 = a % b
```

![Image](./../../../static/img/docs/Concepts/math-expressions-4.png)
