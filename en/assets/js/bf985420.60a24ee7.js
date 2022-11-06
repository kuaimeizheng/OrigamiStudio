"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[12854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||p;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=a.length,o=new Array(p);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<p;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>r,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const p={title:"JavaScript Patch API",sidebar_position:10,last_update:{author:"\u84af\u7f8e\u653f"}},o="JavaScript Patch API",r={unversionedId:"documentation/Concepts/JavaScript Patch API",id:"documentation/Concepts/JavaScript Patch API",title:"JavaScript Patch API",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Concepts/JavaScript Patch API.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/JavaScript Patch API",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/JavaScript Patch API",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/JavaScript Patch API.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667733554,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:10,frontMatter:{title:"JavaScript Patch API",sidebar_position:10,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Coordinates \u5750\u6807",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates"},next:{title:"Loop \u5faa\u73af",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/Loop"}},l={},u=[{value:"Patch \u6a21\u5757",id:"patch-\u6a21\u5757",level:2},{value:"<code>new Patch()</code> <em>constructor</em>",id:"new-patch-constructor",level:3},{value:"<code>Patch.inputs</code> <em>array</em>",id:"patchinputs-array",level:3},{value:"<code>Patch.outputs</code> <em>array</em>",id:"patchoutputs-array",level:3},{value:"<code>Patch.loopAware</code> <em>boolean</em> (default: false)",id:"patchloopaware-boolean-default-false",level:3},{value:"<code>Patch.alwaysNeedsToEvaluate</code> <em>boolean</em> (default: false)",id:"patchalwaysneedstoevaluate-boolean-default-false",level:3},{value:"<code>Patch.evaluate()</code> <em>function</em>",id:"patchevaluate-function",level:3},{value:"PatchInput \u6a21\u5757\u8f93\u5165",id:"patchinput-\u6a21\u5757\u8f93\u5165",level:2},{value:"<code>new PatchInput(name, type, [defaultValue])</code> <em>constructor</em>",id:"new-patchinputname-type-defaultvalue-constructor",level:3},{value:"<code>PatchInput.name</code> <em>string</em>",id:"patchinputname-string",level:3},{value:"<code>PatchInput.type</code>",id:"patchinputtype",level:3},{value:"<code>PatchInput.value</code> <em>read-only</em>",id:"patchinputvalue-read-only",level:3},{value:"<code>PatchInput.values</code> <em>array, read-only</em>",id:"patchinputvalues-array-read-only",level:3},{value:"<code>PatchInput.defaultValue</code>",id:"patchinputdefaultvalue",level:3},{value:"<code>PatchInput.isDirty()</code> <em>function</em>",id:"patchinputisdirty-function",level:3},{value:"<code>PatchInput.readRising()</code> <em>function</em>",id:"patchinputreadrising-function",level:3},{value:"<code>PatchInput.readFalling()</code> <em>function</em>",id:"patchinputreadfalling-function",level:3},{value:"PatchOutput \u6a21\u5757\u8f93\u51fa",id:"patchoutput-\u6a21\u5757\u8f93\u51fa",level:2},{value:"<code>new PatchOutput(name, type, [defaultValue])</code> <em>constructor</em>",id:"new-patchoutputname-type-defaultvalue-constructor",level:3},{value:"<code>PatchOutput.name</code> <em>string</em>",id:"patchoutputname-string",level:3},{value:"<code>PatchOutput.type</code>",id:"patchoutputtype",level:3},{value:"<code>PatchOutput.value</code> <em>read-only</em>",id:"patchoutputvalue-read-only",level:3},{value:"<code>PatchOutput.values</code> <em>array, read-only</em>",id:"patchoutputvalues-array-read-only",level:3},{value:"<code>PatchOutput.defaultValue</code>",id:"patchoutputdefaultvalue",level:3},{value:"<code>PatchOutput.pulse()</code> <em>function</em>",id:"patchoutputpulse-function",level:3},{value:"Types \u7c7b\u578b",id:"types-\u7c7b\u578b",level:2},{value:"<code>NUMBER</code>",id:"number",level:3},{value:"<code>PROGRESS</code>",id:"progress",level:3},{value:"<code>POSITION</code>",id:"position",level:3},{value:"<code>SIZE</code>",id:"size",level:3},{value:"<code>ANCHOR</code>",id:"anchor",level:3},{value:"<code>POINT3D</code>",id:"point3d",level:3},{value:"<code>POINT4D</code>",id:"point4d",level:3},{value:"<code>COLOR</code>",id:"color",level:3},{value:"<code>BOOLEAN</code>",id:"boolean",level:3},{value:"<code>PULSE</code>",id:"pulse",level:3},{value:"<code>INTEGER</code>",id:"integer",level:3},{value:"<code>ENUM</code>",id:"enum",level:3},{value:"<code>STRING</code>",id:"string",level:3},{value:"<code>JSON</code>",id:"json",level:3}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"javascript-patch-api"},"JavaScript Patch API"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"patch-\u6a21\u5757"},"Patch \u6a21\u5757"),(0,i.kt)("h3",{id:"new-patch-constructor"},(0,i.kt)("inlineCode",{parentName:"h3"},"new Patch()")," ",(0,i.kt)("em",{parentName:"h3"},"constructor")),(0,i.kt)("p",null,"Creates a new patch object. You should create exactly one of these objects, set its properties."),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6a21\u5757\u5bf9\u8c61\u3002\u60a8\u5e94\u8be5\u521b\u5efa\u8fd9\u4e9b\u5bf9\u8c61\u4e2d\u7684\u4e00\u4e2a\uff0c\u5e76\u8bbe\u7f6e\u5176\u5c5e\u6027\u3002"),(0,i.kt)("h3",{id:"patchinputs-array"},(0,i.kt)("inlineCode",{parentName:"h3"},"Patch.inputs")," ",(0,i.kt)("em",{parentName:"h3"},"array")),(0,i.kt)("p",null,"An array of ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchinput"},"PatchInput")," objects that define the input ports to the patch. This property may only be defined at the top-level; you may not update it later during patch execution."),(0,i.kt)("p",null,"\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchinput"},"PatchInput"),"\u5bf9\u8c61\u6570\u7ec4\uff0c\u5b9a\u4e49\u6a21\u5757\u7684\u8f93\u5165\u7aef\u53e3\u3002\u6b64\u5c5e\u6027\u53ea\u80fd\u5728\u9876\u5c42\u5b9a\u4e49;\u4f60\u4e0d\u80fd\u5728\u4ee5\u540e\u7684\u6a21\u5757\u6267\u884c\u8fc7\u7a0b\u4e2d\u66f4\u65b0\u5b83\u3002"),(0,i.kt)("h3",{id:"patchoutputs-array"},(0,i.kt)("inlineCode",{parentName:"h3"},"Patch.outputs")," ",(0,i.kt)("em",{parentName:"h3"},"array")),(0,i.kt)("p",null,"An array of ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchoutput"},"PatchOutput")," objects that define the output ports to the patch. This property may only be defined at the top-level; you may not update it later during patch execution."),(0,i.kt)("p",null,"\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchoutput"},"PatchOutput"),"\u5bf9\u8c61\u6570\u7ec4\uff0c\u5b9a\u4e49\u6a21\u5757\u7684\u8f93\u51fa\u7aef\u53e3\u3002\u6b64\u5c5e\u6027\u53ea\u80fd\u5728\u9876\u5c42\u5b9a\u4e49;\u4f60\u4e0d\u80fd\u5728\u4ee5\u540e\u7684\u6a21\u5757\u6267\u884c\u8fc7\u7a0b\u4e2d\u66f4\u65b0\u5b83\u3002"),(0,i.kt)("h3",{id:"patchloopaware-boolean-default-false"},(0,i.kt)("inlineCode",{parentName:"h3"},"Patch.loopAware")," ",(0,i.kt)("em",{parentName:"h3"},"boolean")," (default: false)"),(0,i.kt)("p",null,"Set this property to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if this patch is capable of processing values in an Origami loop. Use ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchinputvalues-array-read-only"},"PatchInput.values")," array to access values from loops.\nIf you don\u2019t set this property to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", then multiple copies of the patch\u2019s JavaScript environment will be created to process each value in a loop."),(0,i.kt)("p",null,"\u5982\u679c\u6b64\u6a21\u5757\u80fd\u591f\u5904\u7406 Origami \u5faa\u73af\u4e2d\u7684\u503c\uff0c\u5219\u5c06\u6b64\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchinputvalues-array-read-only"},"PatchInput.values"),"\u6570\u7ec4\u4ece\u5faa\u73af\u4e2d\u8bbf\u95ee\u503c\u3002\n\u5982\u679c\u4f60\u4e0d\u5c06\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u90a3\u4e48\u5c06\u4f1a\u521b\u5efa\u591a\u4e2a\u6a21\u5757\u7684 JavaScript \u73af\u5883\u526f\u672c\u6765\u5faa\u73af\u5904\u7406\u6bcf\u4e2a\u503c\u3002"),(0,i.kt)("h3",{id:"patchalwaysneedstoevaluate-boolean-default-false"},(0,i.kt)("inlineCode",{parentName:"h3"},"Patch.alwaysNeedsToEvaluate")," ",(0,i.kt)("em",{parentName:"h3"},"boolean")," (default: false)"),(0,i.kt)("p",null,"Set this property to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if you need the the patch to be evaluated on every frame. In most cases this is not needed and will only affect performance negatively. Avoid setting this to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5728\u6bcf\u4e00\u5e27\u4e0a\u8ba1\u7b97\u6a21\u5757\uff0c\u8bf7\u5c06\u6b64\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u4e0d\u9700\u8981\u7684\uff0c\u53ea\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u8d1f\u9762\u5f71\u54cd\u3002\u907f\u514d\u5c06\u6b64\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,i.kt)("h3",{id:"patchevaluate-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"Patch.evaluate()")," ",(0,i.kt)("em",{parentName:"h3"},"function")),(0,i.kt)("p",null,"Define the patch logic in this function. It will be called when needed based on the Engine run loop or every single frame when ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchalwaysneedstoevaluate-boolean-default-false"},"Patch.alwaysNeedsToEvaluate")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\u5b9a\u4e49\u6a21\u5757\u903b\u8f91\u3002\u5f53",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchalwaysneedstoevaluate-boolean-default-false"},"Patch.alwaysNeedsToEvaluate"),"\u88ab\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u65f6\uff0c\u5b83\u5c06\u6839\u636e\u5f15\u64ce\u8fd0\u884c\u5faa\u73af\u6216\u6bcf\u4e00\u5e27\u88ab\u8c03\u7528\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"patchinput-\u6a21\u5757\u8f93\u5165"},"PatchInput \u6a21\u5757\u8f93\u5165"),(0,i.kt)("h3",{id:"new-patchinputname-type-defaultvalue-constructor"},(0,i.kt)("inlineCode",{parentName:"h3"},"new PatchInput(name, type, [defaultValue])")," ",(0,i.kt)("em",{parentName:"h3"},"constructor")),(0,i.kt)("p",null,"Use this constructor to create a new input port for the patch. You must give the port a name (which may be the empty string) and a type (from the ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#types"},"types")," enum). You may also give the input a default value; if you don\u2019t supply one, the default default value for the type you selected will be used."),(0,i.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u4e3a\u6a21\u5757\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8f93\u5165\u7aef\u53e3\u3002\u60a8\u5fc5\u987b\u7ed9\u7aef\u53e3\u4e00\u4e2a\u540d\u79f0(\u53ef\u80fd\u662f\u7a7a\u5b57\u7b26\u4e32)\u548c\u4e00\u4e2a\u7c7b\u578b(\u6765\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#types"},"types")," enum)\u3002\u4f60\u4e5f\u53ef\u4ee5\u7ed9\u8f93\u5165\u4e00\u4e2a\u9ed8\u8ba4\u503c;\u5982\u679c\u4e0d\u63d0\u4f9b\uff0c\u5219\u5c06\u4f7f\u7528\u6240\u9009\u7c7b\u578b\u7684\u9ed8\u8ba4\u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("h3",{id:"patchinputname-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchInput.name")," ",(0,i.kt)("em",{parentName:"h3"},"string")),(0,i.kt)("p",null,"The name of the input port, which is displayed next to the port in the Patch Graph."),(0,i.kt)("p",null,"\u8f93\u5165\u7aef\u53e3\u7684\u540d\u79f0\uff0c\u5728\u6a21\u5757\u56fe\u4e2d\u663e\u793a\u5728\u7aef\u53e3\u65c1\u8fb9\u3002"),(0,i.kt)("h3",{id:"patchinputtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchInput.type")),(0,i.kt)("p",null,"The type of the input port. Must be one of the values from the ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#types"},"types")," enum."),(0,i.kt)("p",null,"\u8f93\u5165\u7aef\u53e3\u7684\u7c7b\u578b\u3002\u5fc5\u987b\u662f",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#types"},"types"),"\u679a\u4e3e\u4e2d\u7684\u4e00\u4e2a\u503c\u3002"),(0,i.kt)("h3",{id:"patchinputvalue-read-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchInput.value")," ",(0,i.kt)("em",{parentName:"h3"},"read-only")),(0,i.kt)("p",null,"The current value being passed into the input port."),(0,i.kt)("p",null,"\u4f20\u5165\u8f93\u5165\u7aef\u53e3\u7684\u5f53\u524d\u503c\u3002"),(0,i.kt)("h3",{id:"patchinputvalues-array-read-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchInput.values")," ",(0,i.kt)("em",{parentName:"h3"},"array, read-only")),(0,i.kt)("p",null,"If the ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false"},"patch.loopAware")," property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and the input port is receiving a loop as input, then this property is an array of the values in the loop. Otherwise, this property is an array containing a single value equal to ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchinputvalue-read-only"},"PatchInput.value"),"."),(0,i.kt)("p",null,"\u5982\u679c",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false"},"patch.loopAware"),"\u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5e76\u4e14\u8f93\u5165\u7aef\u53e3\u63a5\u6536\u4e00\u4e2a\u5faa\u73af\u4f5c\u4e3a\u8f93\u5165\uff0c\u90a3\u4e48\u8be5\u5c5e\u6027\u662f\u5faa\u73af\u4e2d\u7684\u503c\u7684\u6570\u7ec4\u3002\u5426\u5219\uff0c\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u4e00\u4e2a\u7b49\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchinputvalue-read-only"},"PatchInput.value"),"\u7684\u503c\u3002"),(0,i.kt)("h3",{id:"patchinputdefaultvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchInput.defaultValue")),(0,i.kt)("p",null,"The default value for the input port."),(0,i.kt)("p",null,"\u8f93\u5165\u7aef\u53e3\u7684\u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("h3",{id:"patchinputisdirty-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchInput.isDirty()")," ",(0,i.kt)("em",{parentName:"h3"},"function")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the input port\u2019s value has changed since the last time it was evaluated, or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("p",null,"\u5982\u679c\u8f93\u5165\u7aef\u53e3\u7684\u503c\u81ea\u4e0a\u6b21\u8ba1\u7b97\u4ee5\u6765\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,i.kt)("h3",{id:"patchinputreadrising-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchInput.readRising()")," ",(0,i.kt)("em",{parentName:"h3"},"function")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the input port has just changed to a nonzero/\u201ctruthy\u201d value, or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise. Useful when dealing with Pulses (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/PulseSignal.html"},"State & Pulses"),")"),(0,i.kt)("p",null,"\u5982\u679c\u8f93\u5165\u7aef\u53e3\u521a\u521a\u66f4\u6539\u4e3a\u975e\u96f6/",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u503c\uff0c\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u5728\u5904\u7406\u8109\u51b2\u65f6\u5f88\u6709\u7528(\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/PulseSignal.html"},"State & Pulse"),")"),(0,i.kt)("h3",{id:"patchinputreadfalling-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchInput.readFalling()")," ",(0,i.kt)("em",{parentName:"h3"},"function")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the input port has just changed to a zero/\u201cfalsey\u201d value, or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise. Useful when dealing with Pulses (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/PulseSignal.html"},"State & Pulses"),")"),(0,i.kt)("p",null,'\u5982\u679c\u8f93\u5165\u7aef\u53e3\u521a\u521a\u66f4\u6539\u4e3a 0 / " falsey "\u503c\uff0c\u5219\u8fd4\u56de',(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u5728\u5904\u7406\u8109\u51b2\u65f6\u5f88\u6709\u7528(\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/PulseSignal.html"},"State & Pulse"),")"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"patchoutput-\u6a21\u5757\u8f93\u51fa"},"PatchOutput \u6a21\u5757\u8f93\u51fa"),(0,i.kt)("h3",{id:"new-patchoutputname-type-defaultvalue-constructor"},(0,i.kt)("inlineCode",{parentName:"h3"},"new PatchOutput(name, type, [defaultValue])")," ",(0,i.kt)("em",{parentName:"h3"},"constructor")),(0,i.kt)("p",null,"Use this constructor to create a new output port for the patch. You must give the port a name (which may be the empty string) and a type (from the ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#types"},"types")," enum). You may also give the input a default value; if you don\u2019t supply one, the default default value for the type you selected will be used."),(0,i.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u4e3a\u6a21\u5757\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8f93\u51fa\u7aef\u53e3\u3002\u60a8\u5fc5\u987b\u7ed9\u7aef\u53e3\u4e00\u4e2a\u540d\u79f0(\u53ef\u80fd\u662f\u7a7a\u5b57\u7b26\u4e32)\u548c\u4e00\u4e2a\u7c7b\u578b(\u6765\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#types"},"types")," enum)\u3002\u4f60\u4e5f\u53ef\u4ee5\u7ed9\u8f93\u5165\u4e00\u4e2a\u9ed8\u8ba4\u503c;\u5982\u679c\u4e0d\u63d0\u4f9b\uff0c\u5219\u5c06\u4f7f\u7528\u6240\u9009\u7c7b\u578b\u7684\u9ed8\u8ba4\u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("h3",{id:"patchoutputname-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchOutput.name")," ",(0,i.kt)("em",{parentName:"h3"},"string")),(0,i.kt)("p",null,"The name of the output port, which is displayed next to the port in the Patch Graph."),(0,i.kt)("p",null,"\u8f93\u51fa\u7aef\u53e3\u7684\u540d\u79f0\uff0c\u5728\u6a21\u5757\u56fe\u4e2d\u663e\u793a\u5728\u7aef\u53e3\u65c1\u8fb9\u3002"),(0,i.kt)("h3",{id:"patchoutputtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchOutput.type")),(0,i.kt)("p",null,"The type of the output port. Must be one of the values from the ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#types"},"types")," enum."),(0,i.kt)("p",null,"\u8f93\u51fa\u7aef\u53e3\u7684\u7c7b\u578b\u3002\u5fc5\u987b\u662f",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#types"},"types"),"\u679a\u4e3e\u4e2d\u7684\u4e00\u4e2a\u503c\u3002"),(0,i.kt)("h3",{id:"patchoutputvalue-read-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchOutput.value")," ",(0,i.kt)("em",{parentName:"h3"},"read-only")),(0,i.kt)("p",null,"The current value being passed into the output port."),(0,i.kt)("p",null,"\u4f20\u9012\u5230\u8f93\u51fa\u7aef\u53e3\u7684\u5f53\u524d\u503c\u3002"),(0,i.kt)("h3",{id:"patchoutputvalues-array-read-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchOutput.values")," ",(0,i.kt)("em",{parentName:"h3"},"array, read-only")),(0,i.kt)("p",null,"If the ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false"},"patch.loopAware")," property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", you may set this property to output a loop of values from the port. The property must be an array, and the type of each element of the array must match the type of the port."),(0,i.kt)("p",null,"\u5982\u679c",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchloopaware-boolean-default-false"},"patch.loopAware"),"\u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u60a8\u53ef\u4ee5\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u4ece\u7aef\u53e3\u8f93\u51fa\u4e00\u4e2a\u503c\u5faa\u73af\u3002\u8be5\u5c5e\u6027\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5e76\u4e14\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u7684\u7c7b\u578b\u5fc5\u987b\u4e0e\u7aef\u53e3\u7684\u7c7b\u578b\u5339\u914d\u3002"),(0,i.kt)("h3",{id:"patchoutputdefaultvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchOutput.defaultValue")),(0,i.kt)("p",null,"The default value for the output port."),(0,i.kt)("p",null,"\u8f93\u51fa\u7aef\u53e3\u7684\u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("h3",{id:"patchoutputpulse-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatchOutput.pulse()")," ",(0,i.kt)("em",{parentName:"h3"},"function")),(0,i.kt)("p",null,"If this ouput\u2019s type is ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#pulse"},"PULSE"),", you may call this function to send a pulse on this output port."),(0,i.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u8f93\u51fa\u7684\u7c7b\u578b\u662f",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#pulse"},"PULSE"),"\uff0c\u60a8\u53ef\u4ee5\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u5728\u8fd9\u4e2a\u8f93\u51fa\u7aef\u53e3\u4e0a\u53d1\u9001\u4e00\u4e2a\u8109\u51b2\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"types-\u7c7b\u578b"},"Types \u7c7b\u578b"),(0,i.kt)("p",null,"JavaScript patch does not support all the available data types in Origami, for example Images, Sounds and Videos are not supported. Here\u2019s the list of types that should be used for ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchinput"},"PatchInput")," and ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchoutput"},"PatchOutput"),"."),(0,i.kt)("p",null,"JavaScript \u6a21\u5757\u4e0d\u652f\u6301 Origami \u4e2d\u6240\u6709\u53ef\u7528\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4f8b\u5982\u56fe\u50cf\u3001\u58f0\u97f3\u548c\u89c6\u9891\u4e0d\u652f\u6301\u3002\u4e0b\u9762\u662f\u5e94\u8be5\u7528\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchinput"},"PatchInput"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#patchoutput"},"PatchOutput"),"\u7684\u7c7b\u578b\u5217\u8868\u3002"),(0,i.kt)("h3",{id:"number"},(0,i.kt)("inlineCode",{parentName:"h3"},"NUMBER")),(0,i.kt)("p",null,"Default type for most Patches in Origami. It\u2019s a 64-bit floating value that can be used generically."),(0,i.kt)("p",null,"Origami \u4e2d\u5927\u591a\u6570\u6a21\u5757\u7684\u9ed8\u8ba4\u7c7b\u578b\u3002\u5b83\u662f\u4e00\u4e2a\u53ef\u901a\u7528\u4f7f\u7528\u7684 64 \u4f4d\u6d6e\u52a8\u503c\u3002"),(0,i.kt)("h3",{id:"progress"},(0,i.kt)("inlineCode",{parentName:"h3"},"PROGRESS")),(0,i.kt)("p",null,"It\u2019s an alias of ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#number"},"NUMBER")," type. However can provide a semantic meaning that the intention for this number is to be normalized between 0-1 (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.progress.html"},"Progress"),")"),(0,i.kt)("p",null,"\u5b83\u662f",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#number"},"NUMBER"),"\u7c7b\u578b\u7684\u522b\u540d\u3002\u7136\u800c\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u8bed\u4e49\u610f\u4e49\uff0c\u8fd9\u4e2a\u6570\u5b57\u7684\u610f\u56fe\u662f\u5728 0-1 \u4e4b\u95f4\u89c4\u8303\u5316(\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.progress.html"},"Progress"),")\u3002"),(0,i.kt)("h3",{id:"position"},(0,i.kt)("inlineCode",{parentName:"h3"},"POSITION")),(0,i.kt)("p",null,"A vector type with 2 floating value components ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log('point:',point.x, point.y)")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.point.html"},"Point"),")"),(0,i.kt)("p",null,"\u5177\u6709\u4e24\u4e2a\u6d6e\u52a8\u503c\u7ec4\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"\u7684\u77e2\u91cf\u7c7b\u578b\u3002\u4f8b\u5982:",(0,i.kt)("inlineCode",{parentName:"p"},"console.log('point:',point.x, point.y)"),"(\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.point.html"},"Point"),")"),(0,i.kt)("h3",{id:"size"},(0,i.kt)("inlineCode",{parentName:"h3"},"SIZE")),(0,i.kt)("p",null,"A vector type with 2 components like ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#position"},"POSITION"),". The difference is the UI in the patch graph will treat the port as Size, but on the JavaScript side it should access its components with ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," representing the width and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," representing the height."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u7ec4\u4ef6\u7684\u77e2\u91cf\u7c7b\u578b\uff0c\u5982",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#position"},"POSITION"),"\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u6a21\u5757\u56fe\u4e2d\u7684 UI \u4f1a\u5c06\u7aef\u53e3\u89c6\u4e3a Size\uff0c\u4f46\u5728 JavaScript \u7aef\uff0c\u5b83\u5e94\u8be5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\u8868\u793a\u5bbd\u5ea6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"\u8868\u793a\u9ad8\u5ea6\u8bbf\u95ee\u7ec4\u4ef6\u3002"),(0,i.kt)("h3",{id:"anchor"},(0,i.kt)("inlineCode",{parentName:"h3"},"ANCHOR")),(0,i.kt)("p",null,"A vector type with 2 components like ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#position"},"POSITION"),". The difference is the UI in the patch graph will treat the port as Anchor, but on the JavaScript side it should access its components with ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," values are expected to be in the range from 0-1."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u7ec4\u4ef6\u7684\u77e2\u91cf\u7c7b\u578b\uff0c\u5982",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#position"},"POSITION"),"\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u6a21\u5757\u56fe\u4e2d\u7684 UI \u5c06\u628a\u7aef\u53e3\u89c6\u4e3a\u951a\u70b9\uff0c\u4f46\u5728 JavaScript \u7aef\uff0c\u5b83\u5e94\u8be5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"\u503c\u8bbf\u95ee\u7ec4\u4ef6\uff0c\u8fd9\u4e9b\u503c\u7684\u8303\u56f4\u9884\u8ba1\u5728 0-1 \u4e4b\u95f4\u3002"),(0,i.kt)("h3",{id:"point3d"},(0,i.kt)("inlineCode",{parentName:"h3"},"POINT3D")),(0,i.kt)("p",null,"A vector type with 3 floating value components ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),". For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log('point:',point.x, point.y, point.z)")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.point3d.html"},"Point3D"),")"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5177\u6709\u4e09\u4e2a\u6d6e\u52a8\u503c\u5206\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"z"),"\u7684\u77e2\u91cf\u7c7b\u578b\u3002\u4f8b\u5982:",(0,i.kt)("inlineCode",{parentName:"p"},"console.log('point:',point.x, point.y, point.z)"),"(\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.point3d.html"},"Point3D"),")"),(0,i.kt)("h3",{id:"point4d"},(0,i.kt)("inlineCode",{parentName:"h3"},"POINT4D")),(0,i.kt)("p",null,"A vector type with 4 floating value components ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),". For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log('point:',point.x, point.y, point.z)")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.vec4.html"},"Vec4"),")"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5177\u6709 4 \u4e2a\u6d6e\u52a8\u503c\u5206\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"w"),"\u7684\u77e2\u91cf\u7c7b\u578b\u3002\u4f8b\u5982:",(0,i.kt)("inlineCode",{parentName:"p"},"console.log('point:',point.x, point.y, point.z)"),"(\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.vec4.html"},"Vec4"),")"),(0,i.kt)("h3",{id:"color"},(0,i.kt)("inlineCode",{parentName:"h3"},"COLOR")),(0,i.kt)("p",null,"A vector type with 4 components like ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#point4d"},"POINT4D"),". Those components need to be accessed with ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"w")," Those components represent a color in the format of RGBA ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," being red, ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," being green, ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," being blue and ",(0,i.kt)("inlineCode",{parentName:"p"},"w")," corresponds to the alpha channel. All values are normalized from 0-1 (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.color.torgb.html"},"Color to RGB"),")"),(0,i.kt)("p",null,"\u5177\u6709 4 \u4e2a\u7ec4\u4ef6\u7684\u77e2\u91cf\u7c7b\u578b\uff0c\u5982",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#point4d"},"POINT4D"),"\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u9700\u8981\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"w"),"\u6765\u8bbf\u95ee\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u8868\u793a RGBA \u683c\u5f0f\u7684\u4e00\u79cd\u989c\u8272\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\u4e3a\u7ea2\u8272\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"\u4e3a\u7eff\u8272\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"z"),"\u4e3a\u84dd\u8272\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"w"),"\u5bf9\u5e94 alpha \u901a\u9053\u3002\u6240\u6709\u503c\u90fd\u4ece 0-1 \u6807\u51c6\u5316(\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.color.torgb.html"},"Color to RGB"),")"),(0,i.kt)("h3",{id:"boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"BOOLEAN")),(0,i.kt)("p",null,"A type that can be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/PulseSignal.html"},"State & Pulses"),")"),(0,i.kt)("p",null,"\u7c7b\u578b\u53ef\u4ee5\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"(\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/PulseSignal.html"},"State & Pulses"),")\u3002"),(0,i.kt)("h3",{id:"pulse"},(0,i.kt)("inlineCode",{parentName:"h3"},"PULSE")),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#boolean"},"BOOLEAN")," it can only hold a ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," but it is a transient value that is not persisted over time (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/PulseSignal.html"},"State & Pulses"),")"),(0,i.kt)("p",null,"\u7c7b\u4f3c\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#boolean"},"BOOLEAN"),"\uff0c\u5b83\u53ea\u80fd\u4fdd\u5b58",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4f46\u5b83\u662f\u4e00\u4e2a\u77ac\u65f6\u503c\uff0c\u4e0d\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u6301\u4e45(\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/PulseSignal.html"},"State & Pulse"),")\u3002"),(0,i.kt)("h3",{id:"integer"},(0,i.kt)("inlineCode",{parentName:"h3"},"INTEGER")),(0,i.kt)("p",null,"A numeric value that is not a fraction."),(0,i.kt)("p",null,"\u4e0d\u662f\u5206\u6570\u7684\u6570\u503c\u3002"),(0,i.kt)("h3",{id:"enum"},(0,i.kt)("inlineCode",{parentName:"h3"},"ENUM")),(0,i.kt)("p",null,"The UI in the patch graph will display this as a list of values, but from the JavaScript perspective this is an ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#integer"},"INTEGER")," where the value represents the index of the element in the list."),(0,i.kt)("p",null,"\u6a21\u5757\u56fe\u4e2d\u7684 UI \u5c06\u5176\u663e\u793a\u4e3a\u4e00\u4e2a\u503c\u7684\u5217\u8868\uff0c\u4f46\u4ece JavaScript \u7684\u89d2\u5ea6\u6765\u770b\uff0c\u8fd9\u662f\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingapi#integer"},"INTEGER"),"\uff0c\u5176\u4e2d\u503c\u8868\u793a\u5217\u8868\u4e2d\u5143\u7d20\u7684\u7d22\u5f15\u3002"),(0,i.kt)("h3",{id:"string"},(0,i.kt)("inlineCode",{parentName:"h3"},"STRING")),(0,i.kt)("p",null,"This type represents a Text"),(0,i.kt)("p",null,"\u8be5\u7c7b\u578b\u8868\u793a\u4e00\u4e2a\u6587\u672c\u3002"),(0,i.kt)("h3",{id:"json"},(0,i.kt)("inlineCode",{parentName:"h3"},"JSON")),(0,i.kt)("p",null,"This type represents a JSON Object (see ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.structure.object.html"},"JSON Object"),")"),(0,i.kt)("p",null,"\u8be5\u7c7b\u578b\u8868\u793a\u4e00\u4e2a JSON \u5bf9\u8c61(\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.structure.object.html"},"JSON Object"),")\u3002"))}s.isMDXComponent=!0}}]);