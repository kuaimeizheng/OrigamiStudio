"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[12854],{10157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var i=n(85893),a=n(11151);const c={title:"JavaScript Patch API",sidebar_position:10,last_update:{author:"\u84af\u7f8e\u653f"}},o="JavaScript Patch API",s={id:"documentation/Concepts/JavaScript Patch API",title:"JavaScript Patch API",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Concepts/JavaScript Patch API.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/JavaScript Patch API",permalink:"/en/docs/documentation/Concepts/JavaScript Patch API",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/JavaScript Patch API.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"Nov 28, 2024",sidebarPosition:10,frontMatter:{title:"JavaScript Patch API",sidebar_position:10,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Coordinates \u5750\u6807",permalink:"/en/docs/documentation/Concepts/Coordinates"},next:{title:"Loop \u5faa\u73af",permalink:"/en/docs/documentation/Concepts/Loop"}},r={},d=[{value:"Patch \u6a21\u5757",id:"patch-\u6a21\u5757",level:2},{value:"<code>new Patch()</code> <em>constructor</em>",id:"new-patch-constructor",level:3},{value:"<code>Patch.inputs</code> <em>array</em>",id:"patchinputs-array",level:3},{value:"<code>Patch.outputs</code> <em>array</em>",id:"patchoutputs-array",level:3},{value:"<code>Patch.loopAware</code> <em>boolean</em> (default: false)",id:"patchloopaware-boolean-default-false",level:3},{value:"<code>Patch.alwaysNeedsToEvaluate</code> <em>boolean</em> (default: false)",id:"patchalwaysneedstoevaluate-boolean-default-false",level:3},{value:"<code>Patch.evaluate()</code> <em>function</em>",id:"patchevaluate-function",level:3},{value:"PatchInput \u6a21\u5757\u8f93\u5165",id:"patchinput-\u6a21\u5757\u8f93\u5165",level:2},{value:"<code>new PatchInput(name, type, [defaultValue])</code> <em>constructor</em>",id:"new-patchinputname-type-defaultvalue-constructor",level:3},{value:"<code>PatchInput.name</code> <em>string</em>",id:"patchinputname-string",level:3},{value:"<code>PatchInput.type</code>",id:"patchinputtype",level:3},{value:"<code>PatchInput.value</code> <em>read-only</em>",id:"patchinputvalue-read-only",level:3},{value:"<code>PatchInput.values</code> <em>array, read-only</em>",id:"patchinputvalues-array-read-only",level:3},{value:"<code>PatchInput.defaultValue</code>",id:"patchinputdefaultvalue",level:3},{value:"<code>PatchInput.isDirty()</code> <em>function</em>",id:"patchinputisdirty-function",level:3},{value:"<code>PatchInput.readRising()</code> <em>function</em>",id:"patchinputreadrising-function",level:3},{value:"<code>PatchInput.readFalling()</code> <em>function</em>",id:"patchinputreadfalling-function",level:3},{value:"PatchOutput \u6a21\u5757\u8f93\u51fa",id:"patchoutput-\u6a21\u5757\u8f93\u51fa",level:2},{value:"<code>new PatchOutput(name, type, [defaultValue])</code> <em>constructor</em>",id:"new-patchoutputname-type-defaultvalue-constructor",level:3},{value:"<code>PatchOutput.name</code> <em>string</em>",id:"patchoutputname-string",level:3},{value:"<code>PatchOutput.type</code>",id:"patchoutputtype",level:3},{value:"<code>PatchOutput.value</code> <em>read-only</em>",id:"patchoutputvalue-read-only",level:3},{value:"<code>PatchOutput.values</code> <em>array, read-only</em>",id:"patchoutputvalues-array-read-only",level:3},{value:"<code>PatchOutput.defaultValue</code>",id:"patchoutputdefaultvalue",level:3},{value:"<code>PatchOutput.pulse()</code> <em>function</em>",id:"patchoutputpulse-function",level:3},{value:"Types \u7c7b\u578b",id:"types-\u7c7b\u578b",level:2},{value:"<code>NUMBER</code>",id:"number",level:3},{value:"<code>PROGRESS</code>",id:"progress",level:3},{value:"<code>POSITION</code>",id:"position",level:3},{value:"<code>SIZE</code>",id:"size",level:3},{value:"<code>ANCHOR</code>",id:"anchor",level:3},{value:"<code>POINT3D</code>",id:"point3d",level:3},{value:"<code>POINT4D</code>",id:"point4d",level:3},{value:"<code>COLOR</code>",id:"color",level:3},{value:"<code>BOOLEAN</code>",id:"boolean",level:3},{value:"<code>PULSE</code>",id:"pulse",level:3},{value:"<code>INTEGER</code>",id:"integer",level:3},{value:"<code>ENUM</code>",id:"enum",level:3},{value:"<code>STRING</code>",id:"string",level:3},{value:"<code>JSON</code>",id:"json",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"javascript-patch-api",children:"JavaScript Patch API"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"patch-\u6a21\u5757",children:"Patch \u6a21\u5757"}),"\n",(0,i.jsxs)(t.h3,{id:"new-patch-constructor",children:[(0,i.jsx)(t.code,{children:"new Patch()"})," ",(0,i.jsx)(t.em,{children:"constructor"})]}),"\n",(0,i.jsx)(t.p,{children:"Creates a new patch object. You should create exactly one of these objects, set its properties."}),"\n",(0,i.jsx)(t.p,{children:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6a21\u5757\u5bf9\u8c61\u3002\u60a8\u5e94\u8be5\u521b\u5efa\u8fd9\u4e9b\u5bf9\u8c61\u4e2d\u7684\u4e00\u4e2a\uff0c\u5e76\u8bbe\u7f6e\u5176\u5c5e\u6027\u3002"}),"\n",(0,i.jsxs)(t.h3,{id:"patchinputs-array",children:[(0,i.jsx)(t.code,{children:"Patch.inputs"})," ",(0,i.jsx)(t.em,{children:"array"})]}),"\n",(0,i.jsxs)(t.p,{children:["An array of ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchinput",children:"PatchInput"})," objects that define the input ports to the patch. This property may only be defined at the top-level; you may not update it later during patch execution."]}),"\n",(0,i.jsxs)(t.p,{children:["\u4e00\u4e2a",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchinput",children:"PatchInput"}),"\u5bf9\u8c61\u6570\u7ec4\uff0c\u5b9a\u4e49\u6a21\u5757\u7684\u8f93\u5165\u7aef\u53e3\u3002\u6b64\u5c5e\u6027\u53ea\u80fd\u5728\u9876\u5c42\u5b9a\u4e49;\u4f60\u4e0d\u80fd\u5728\u4ee5\u540e\u7684\u6a21\u5757\u6267\u884c\u8fc7\u7a0b\u4e2d\u66f4\u65b0\u5b83\u3002"]}),"\n",(0,i.jsxs)(t.h3,{id:"patchoutputs-array",children:[(0,i.jsx)(t.code,{children:"Patch.outputs"})," ",(0,i.jsx)(t.em,{children:"array"})]}),"\n",(0,i.jsxs)(t.p,{children:["An array of ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchoutput",children:"PatchOutput"})," objects that define the output ports to the patch. This property may only be defined at the top-level; you may not update it later during patch execution."]}),"\n",(0,i.jsxs)(t.p,{children:["\u4e00\u4e2a",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchoutput",children:"PatchOutput"}),"\u5bf9\u8c61\u6570\u7ec4\uff0c\u5b9a\u4e49\u6a21\u5757\u7684\u8f93\u51fa\u7aef\u53e3\u3002\u6b64\u5c5e\u6027\u53ea\u80fd\u5728\u9876\u5c42\u5b9a\u4e49;\u4f60\u4e0d\u80fd\u5728\u4ee5\u540e\u7684\u6a21\u5757\u6267\u884c\u8fc7\u7a0b\u4e2d\u66f4\u65b0\u5b83\u3002"]}),"\n",(0,i.jsxs)(t.h3,{id:"patchloopaware-boolean-default-false",children:[(0,i.jsx)(t.code,{children:"Patch.loopAware"})," ",(0,i.jsx)(t.em,{children:"boolean"})," (default: false)"]}),"\n",(0,i.jsxs)(t.p,{children:["Set this property to ",(0,i.jsx)(t.code,{children:"true"})," if this patch is capable of processing values in an Origami loop. Use ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchinputvalues-array-read-only",children:"PatchInput.values"})," array to access values from loops.\nIf you don\u2019t set this property to ",(0,i.jsx)(t.code,{children:"true"}),", then multiple copies of the patch\u2019s JavaScript environment will be created to process each value in a loop."]}),"\n",(0,i.jsxs)(t.p,{children:["\u5982\u679c\u6b64\u6a21\u5757\u80fd\u591f\u5904\u7406 Origami \u5faa\u73af\u4e2d\u7684\u503c\uff0c\u5219\u5c06\u6b64\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u201ctrue\u201d\u3002\u4f7f\u7528",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchinputvalues-array-read-only",children:"PatchInput.values"}),"\u6570\u7ec4\u4ece\u5faa\u73af\u4e2d\u8bbf\u95ee\u503c\u3002\n\u5982\u679c\u4f60\u4e0d\u5c06\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u201ctrue\u201d\uff0c\u90a3\u4e48\u5c06\u4f1a\u521b\u5efa\u591a\u4e2a\u6a21\u5757\u7684 JavaScript \u73af\u5883\u526f\u672c\u6765\u5faa\u73af\u5904\u7406\u6bcf\u4e2a\u503c\u3002"]}),"\n",(0,i.jsxs)(t.h3,{id:"patchalwaysneedstoevaluate-boolean-default-false",children:[(0,i.jsx)(t.code,{children:"Patch.alwaysNeedsToEvaluate"})," ",(0,i.jsx)(t.em,{children:"boolean"})," (default: false)"]}),"\n",(0,i.jsxs)(t.p,{children:["Set this property to ",(0,i.jsx)(t.code,{children:"true"})," if you need the the patch to be evaluated on every frame. In most cases this is not needed and will only affect performance negatively. Avoid setting this to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"\u5982\u679c\u4f60\u9700\u8981\u5728\u6bcf\u4e00\u5e27\u4e0a\u8ba1\u7b97\u6a21\u5757\uff0c\u8bf7\u5c06\u6b64\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u201ctrue\u201d\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u4e0d\u9700\u8981\u7684\uff0c\u53ea\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u8d1f\u9762\u5f71\u54cd\u3002\u907f\u514d\u5c06\u6b64\u8bbe\u7f6e\u4e3a\u201ctrue\u201d\u3002"}),"\n",(0,i.jsxs)(t.h3,{id:"patchevaluate-function",children:[(0,i.jsx)(t.code,{children:"Patch.evaluate()"})," ",(0,i.jsx)(t.em,{children:"function"})]}),"\n",(0,i.jsxs)(t.p,{children:["Define the patch logic in this function. It will be called when needed based on the Engine run loop or every single frame when ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchalwaysneedstoevaluate-boolean-default-false",children:"Patch.alwaysNeedsToEvaluate"})," is set to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\u5b9a\u4e49\u6a21\u5757\u903b\u8f91\u3002\u5f53",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchalwaysneedstoevaluate-boolean-default-false",children:"Patch.alwaysNeedsToEvaluate"}),"\u88ab\u8bbe\u7f6e\u4e3a' true '\u65f6\uff0c\u5b83\u5c06\u6839\u636e\u5f15\u64ce\u8fd0\u884c\u5faa\u73af\u6216\u6bcf\u4e00\u5e27\u88ab\u8c03\u7528\u3002"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"patchinput-\u6a21\u5757\u8f93\u5165",children:"PatchInput \u6a21\u5757\u8f93\u5165"}),"\n",(0,i.jsxs)(t.h3,{id:"new-patchinputname-type-defaultvalue-constructor",children:[(0,i.jsx)(t.code,{children:"new PatchInput(name, type, [defaultValue])"})," ",(0,i.jsx)(t.em,{children:"constructor"})]}),"\n",(0,i.jsxs)(t.p,{children:["Use this constructor to create a new input port for the patch. You must give the port a name (which may be the empty string) and a type (from the ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#types",children:"types"})," enum). You may also give the input a default value; if you don\u2019t supply one, the default default value for the type you selected will be used."]}),"\n",(0,i.jsxs)(t.p,{children:["\u4f7f\u7528\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u4e3a\u6a21\u5757\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8f93\u5165\u7aef\u53e3\u3002\u60a8\u5fc5\u987b\u7ed9\u7aef\u53e3\u4e00\u4e2a\u540d\u79f0(\u53ef\u80fd\u662f\u7a7a\u5b57\u7b26\u4e32)\u548c\u4e00\u4e2a\u7c7b\u578b(\u6765\u81ea",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#types",children:"types"})," enum)\u3002\u4f60\u4e5f\u53ef\u4ee5\u7ed9\u8f93\u5165\u4e00\u4e2a\u9ed8\u8ba4\u503c;\u5982\u679c\u4e0d\u63d0\u4f9b\uff0c\u5219\u5c06\u4f7f\u7528\u6240\u9009\u7c7b\u578b\u7684\u9ed8\u8ba4\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,i.jsxs)(t.h3,{id:"patchinputname-string",children:[(0,i.jsx)(t.code,{children:"PatchInput.name"})," ",(0,i.jsx)(t.em,{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"The name of the input port, which is displayed next to the port in the Patch Graph."}),"\n",(0,i.jsx)(t.p,{children:"\u8f93\u5165\u7aef\u53e3\u7684\u540d\u79f0\uff0c\u5728\u6a21\u5757\u56fe\u4e2d\u663e\u793a\u5728\u7aef\u53e3\u65c1\u8fb9\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"patchinputtype",children:(0,i.jsx)(t.code,{children:"PatchInput.type"})}),"\n",(0,i.jsxs)(t.p,{children:["The type of the input port. Must be one of the values from the ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#types",children:"types"})," enum."]}),"\n",(0,i.jsxs)(t.h3,{id:"patchinputvalue-read-only",children:[(0,i.jsx)(t.code,{children:"PatchInput.value"})," ",(0,i.jsx)(t.em,{children:"read-only"})]}),"\n",(0,i.jsx)(t.p,{children:"The current value being passed into the input port."}),"\n",(0,i.jsxs)(t.h3,{id:"patchinputvalues-array-read-only",children:[(0,i.jsx)(t.code,{children:"PatchInput.values"})," ",(0,i.jsx)(t.em,{children:"array, read-only"})]}),"\n",(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false",children:"patch.loopAware"})," property is set to ",(0,i.jsx)(t.code,{children:"true"})," and the input port is receiving a loop as input, then this property is an array of the values in the loop. Otherwise, this property is an array containing a single value equal to ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchinputvalue-read-only",children:"PatchInput.value"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"patchinputdefaultvalue",children:(0,i.jsx)(t.code,{children:"PatchInput.defaultValue"})}),"\n",(0,i.jsx)(t.p,{children:"The default value for the input port."}),"\n",(0,i.jsxs)(t.h3,{id:"patchinputisdirty-function",children:[(0,i.jsx)(t.code,{children:"PatchInput.isDirty()"})," ",(0,i.jsx)(t.em,{children:"function"})]}),"\n",(0,i.jsxs)(t.p,{children:["Returns ",(0,i.jsx)(t.code,{children:"true"})," if the input port\u2019s value has changed since the last time it was evaluated, or ",(0,i.jsx)(t.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsxs)(t.h3,{id:"patchinputreadrising-function",children:[(0,i.jsx)(t.code,{children:"PatchInput.readRising()"})," ",(0,i.jsx)(t.em,{children:"function"})]}),"\n",(0,i.jsxs)(t.p,{children:["Returns ",(0,i.jsx)(t.code,{children:"true"})," if the input port has just changed to a nonzero/\u201ctruthy\u201d value, or ",(0,i.jsx)(t.code,{children:"false"})," otherwise. Useful when dealing with Pulses (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/PulseSignal.html",children:"State & Pulses"}),")"]}),"\n",(0,i.jsxs)(t.h3,{id:"patchinputreadfalling-function",children:[(0,i.jsx)(t.code,{children:"PatchInput.readFalling()"})," ",(0,i.jsx)(t.em,{children:"function"})]}),"\n",(0,i.jsxs)(t.p,{children:["Returns ",(0,i.jsx)(t.code,{children:"true"})," if the input port has just changed to a zero/\u201cfalsey\u201d value, or ",(0,i.jsx)(t.code,{children:"false"})," otherwise. Useful when dealing with Pulses (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/PulseSignal.html",children:"State & Pulses"}),")"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"patchoutput-\u6a21\u5757\u8f93\u51fa",children:"PatchOutput \u6a21\u5757\u8f93\u51fa"}),"\n",(0,i.jsxs)(t.h3,{id:"new-patchoutputname-type-defaultvalue-constructor",children:[(0,i.jsx)(t.code,{children:"new PatchOutput(name, type, [defaultValue])"})," ",(0,i.jsx)(t.em,{children:"constructor"})]}),"\n",(0,i.jsxs)(t.p,{children:["Use this constructor to create a new output port for the patch. You must give the port a name (which may be the empty string) and a type (from the ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#types",children:"types"})," enum). You may also give the input a default value; if you don\u2019t supply one, the default default value for the type you selected will be used."]}),"\n",(0,i.jsxs)(t.p,{children:["\u4f7f\u7528\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u4e3a\u6a21\u5757\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8f93\u51fa\u7aef\u53e3\u3002\u60a8\u5fc5\u987b\u7ed9\u7aef\u53e3\u4e00\u4e2a\u540d\u79f0(\u53ef\u80fd\u662f\u7a7a\u5b57\u7b26\u4e32)\u548c\u4e00\u4e2a\u7c7b\u578b(\u6765\u81ea",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#types",children:"types"})," enum)\u3002\u4f60\u4e5f\u53ef\u4ee5\u7ed9\u8f93\u5165\u4e00\u4e2a\u9ed8\u8ba4\u503c;\u5982\u679c\u4e0d\u63d0\u4f9b\uff0c\u5219\u5c06\u4f7f\u7528\u6240\u9009\u7c7b\u578b\u7684\u9ed8\u8ba4\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,i.jsxs)(t.h3,{id:"patchoutputname-string",children:[(0,i.jsx)(t.code,{children:"PatchOutput.name"})," ",(0,i.jsx)(t.em,{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"The name of the output port, which is displayed next to the port in the Patch Graph."}),"\n",(0,i.jsx)(t.h3,{id:"patchoutputtype",children:(0,i.jsx)(t.code,{children:"PatchOutput.type"})}),"\n",(0,i.jsxs)(t.p,{children:["The type of the output port. Must be one of the values from the ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#types",children:"types"})," enum."]}),"\n",(0,i.jsxs)(t.h3,{id:"patchoutputvalue-read-only",children:[(0,i.jsx)(t.code,{children:"PatchOutput.value"})," ",(0,i.jsx)(t.em,{children:"read-only"})]}),"\n",(0,i.jsx)(t.p,{children:"The current value being passed into the output port."}),"\n",(0,i.jsxs)(t.h3,{id:"patchoutputvalues-array-read-only",children:[(0,i.jsx)(t.code,{children:"PatchOutput.values"})," ",(0,i.jsx)(t.em,{children:"array, read-only"})]}),"\n",(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false",children:"patch.loopAware"})," property is set to ",(0,i.jsx)(t.code,{children:"true"}),", you may set this property to output a loop of values from the port. The property must be an array, and the type of each element of the array must match the type of the port."]}),"\n",(0,i.jsx)(t.h3,{id:"patchoutputdefaultvalue",children:(0,i.jsx)(t.code,{children:"PatchOutput.defaultValue"})}),"\n",(0,i.jsx)(t.p,{children:"The default value for the output port."}),"\n",(0,i.jsxs)(t.h3,{id:"patchoutputpulse-function",children:[(0,i.jsx)(t.code,{children:"PatchOutput.pulse()"})," ",(0,i.jsx)(t.em,{children:"function"})]}),"\n",(0,i.jsxs)(t.p,{children:["If this ouput\u2019s type is ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#pulse",children:"PULSE"}),", you may call this function to send a pulse on this output port."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"types-\u7c7b\u578b",children:"Types \u7c7b\u578b"}),"\n",(0,i.jsxs)(t.p,{children:["JavaScript patch does not support all the available data types in Origami, for example Images, Sounds and Videos are not supported. Here\u2019s the list of types that should be used for ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchinput",children:"PatchInput"})," and ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchoutput",children:"PatchOutput"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["JavaScript \u6a21\u5757\u4e0d\u652f\u6301 Origami \u4e2d\u6240\u6709\u53ef\u7528\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4f8b\u5982\u56fe\u50cf\u3001\u58f0\u97f3\u548c\u89c6\u9891\u4e0d\u652f\u6301\u3002\u4e0b\u9762\u662f\u5e94\u8be5\u7528\u4e8e",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchinput",children:"PatchInput"}),"\u548c",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#patchoutput",children:"PatchOutput"}),"\u7684\u7c7b\u578b\u5217\u8868\u3002"]}),"\n",(0,i.jsx)(t.h3,{id:"number",children:(0,i.jsx)(t.code,{children:"NUMBER"})}),"\n",(0,i.jsx)(t.p,{children:"Default type for most Patches in Origami. It\u2019s a 64-bit floating value that can be used generically."}),"\n",(0,i.jsx)(t.h3,{id:"progress",children:(0,i.jsx)(t.code,{children:"PROGRESS"})}),"\n",(0,i.jsxs)(t.p,{children:["It\u2019s an alias of ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#number",children:"NUMBER"})," type. However can provide a semantic meaning that the intention for this number is to be normalized between 0-1 (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/patches/builtin.progress.html",children:"Progress"}),")"]}),"\n",(0,i.jsx)(t.h3,{id:"position",children:(0,i.jsx)(t.code,{children:"POSITION"})}),"\n",(0,i.jsxs)(t.p,{children:["A vector type with 2 floating value components ",(0,i.jsx)(t.code,{children:"x"})," and ",(0,i.jsx)(t.code,{children:"y"})," For example: ",(0,i.jsx)(t.code,{children:"console.log('point:',point.x, point.y)"})," (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/patches/builtin.point.html",children:"Point"}),")"]}),"\n",(0,i.jsx)(t.h3,{id:"size",children:(0,i.jsx)(t.code,{children:"SIZE"})}),"\n",(0,i.jsxs)(t.p,{children:["A vector type with 2 components like ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#position",children:"POSITION"}),". The difference is the UI in the patch graph will treat the port as Size, but on the JavaScript side it should access its components with ",(0,i.jsx)(t.code,{children:"x"})," representing the width and ",(0,i.jsx)(t.code,{children:"y"})," representing the height."]}),"\n",(0,i.jsx)(t.h3,{id:"anchor",children:(0,i.jsx)(t.code,{children:"ANCHOR"})}),"\n",(0,i.jsxs)(t.p,{children:["A vector type with 2 components like ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#position",children:"POSITION"}),". The difference is the UI in the patch graph will treat the port as Anchor, but on the JavaScript side it should access its components with ",(0,i.jsx)(t.code,{children:"x"})," and ",(0,i.jsx)(t.code,{children:"y"})," values are expected to be in the range from 0-1."]}),"\n",(0,i.jsx)(t.h3,{id:"point3d",children:(0,i.jsx)(t.code,{children:"POINT3D"})}),"\n",(0,i.jsxs)(t.p,{children:["A vector type with 3 floating value components ",(0,i.jsx)(t.code,{children:"x"}),", ",(0,i.jsx)(t.code,{children:"y"})," and ",(0,i.jsx)(t.code,{children:"z"}),". For example: ",(0,i.jsx)(t.code,{children:"console.log('point:',point.x, point.y, point.z)"})," (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/patches/builtin.point3d.html",children:"Point3D"}),")"]}),"\n",(0,i.jsx)(t.h3,{id:"point4d",children:(0,i.jsx)(t.code,{children:"POINT4D"})}),"\n",(0,i.jsxs)(t.p,{children:["A vector type with 4 floating value components ",(0,i.jsx)(t.code,{children:"x"}),", ",(0,i.jsx)(t.code,{children:"y"}),", ",(0,i.jsx)(t.code,{children:"z"})," and ",(0,i.jsx)(t.code,{children:"w"}),". For example: ",(0,i.jsx)(t.code,{children:"console.log('point:',point.x, point.y, point.z)"})," (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/patches/builtin.vec4.html",children:"Vec4"}),")"]}),"\n",(0,i.jsx)(t.h3,{id:"color",children:(0,i.jsx)(t.code,{children:"COLOR"})}),"\n",(0,i.jsxs)(t.p,{children:["A vector type with 4 components like ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#point4d",children:"POINT4D"}),". Those components need to be accessed with ",(0,i.jsx)(t.code,{children:"x"}),", ",(0,i.jsx)(t.code,{children:"y"}),", ",(0,i.jsx)(t.code,{children:"z"})," and ",(0,i.jsx)(t.code,{children:"w"})," Those components represent a color in the format of RGBA ",(0,i.jsx)(t.code,{children:"x"})," being red, ",(0,i.jsx)(t.code,{children:"y"})," being green, ",(0,i.jsx)(t.code,{children:"z"})," being blue and ",(0,i.jsx)(t.code,{children:"w"})," corresponds to the alpha channel. All values are normalized from 0-1 (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/patches/builtin.color.torgb.html",children:"Color to RGB"}),")"]}),"\n",(0,i.jsx)(t.h3,{id:"boolean",children:(0,i.jsx)(t.code,{children:"BOOLEAN"})}),"\n",(0,i.jsxs)(t.p,{children:["A type that can be ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})," (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/PulseSignal.html",children:"State & Pulses"}),")"]}),"\n",(0,i.jsx)(t.h3,{id:"pulse",children:(0,i.jsx)(t.code,{children:"PULSE"})}),"\n",(0,i.jsxs)(t.p,{children:["Similar to ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#boolean",children:"BOOLEAN"})," it can only hold a ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})," but it is a transient value that is not persisted over time (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/PulseSignal.html",children:"State & Pulses"}),")"]}),"\n",(0,i.jsx)(t.h3,{id:"integer",children:(0,i.jsx)(t.code,{children:"INTEGER"})}),"\n",(0,i.jsx)(t.p,{children:"A numeric value that is not a fraction."}),"\n",(0,i.jsx)(t.h3,{id:"enum",children:(0,i.jsx)(t.code,{children:"ENUM"})}),"\n",(0,i.jsxs)(t.p,{children:["The UI in the patch graph will display this as a list of values, but from the JavaScript perspective this is an ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/concepts/scriptingapi#integer",children:"INTEGER"})," where the value represents the index of the element in the list."]}),"\n",(0,i.jsx)(t.h3,{id:"string",children:(0,i.jsx)(t.code,{children:"STRING"})}),"\n",(0,i.jsx)(t.p,{children:"This type represents a Text"}),"\n",(0,i.jsx)(t.h3,{id:"json",children:(0,i.jsx)(t.code,{children:"JSON"})}),"\n",(0,i.jsxs)(t.p,{children:["This type represents a JSON Object (see ",(0,i.jsx)(t.a,{href:"https://origami.design/documentation/patches/builtin.structure.object.html",children:"JSON Object"}),")"]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(67294);const a={},c=i.createContext(a);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);