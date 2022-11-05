---
title: Javascript
sidebar_position: 5
last_update:
  author: 蒯美政
---

# Javascript

内容待完善。

---

## 文件示例

```javascript
//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: F4CCF1AC-6840-43C1-9C65-08B64040ABE0
//==============================================================================


// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Input", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("Output", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function() {
  patch.outputs[0].value = patch.inputs[0].value;
}

return patch;

```
