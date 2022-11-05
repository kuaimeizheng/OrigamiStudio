"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[97706],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var i=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},p=Object.keys(t);for(i=0;i<p.length;i++)a=p[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(i=0;i<p.length;i++)a=p[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=i.createContext({}),s=function(t){var e=i.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=s(t.components);return i.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(a),d=n,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||p;return a?i.createElement(g,r(r({ref:e},c),{},{components:a})):i.createElement(g,r({ref:e},c))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,r=new Array(p);r[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,r[1]=l;for(var s=2;s<p;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28701:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var i=a(87462),n=(a(67294),a(3905));const p={title:"Scripting Basics \u811a\u672c\u57fa\u7840",sidebar_position:25,last_update:{author:"\u84af\u7f8e\u653f"}},r="Scripting Basics \u811a\u672c\u57fa\u7840",l={unversionedId:"documentation/Concepts/Scripting Basics",id:"documentation/Concepts/Scripting Basics",title:"Scripting Basics \u811a\u672c\u57fa\u7840",description:"---",source:"@site/docs/documentation/Concepts/Scripting Basics.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/Scripting Basics",permalink:"/OrigamiStudio/docs/documentation/Concepts/Scripting Basics",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/Scripting Basics.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:25,frontMatter:{title:"Scripting Basics \u811a\u672c\u57fa\u7840",sidebar_position:25,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f",permalink:"/OrigamiStudio/docs/documentation/Concepts/Math Expressions"},next:{title:"States & Pulses \u72b6\u6001 & \u8109\u51b2",permalink:"/OrigamiStudio/docs/documentation/Concepts/States & Pulses"}},o={},s=[{value:"Getting a script into Origami \u5728 Origami \u4e2d\u7f16\u5199\u811a\u672c",id:"getting-a-script-into-origami-\u5728-origami-\u4e2d\u7f16\u5199\u811a\u672c",level:2},{value:"Getting started \u5feb\u901f\u5f00\u59cb",id:"getting-started-\u5feb\u901f\u5f00\u59cb",level:2},{value:"Breaking down the necessary pieces of a script: \u5206\u89e3\u6b65\u9aa4\u7684\u5fc5\u8981\u90e8\u5206:",id:"breaking-down-the-necessary-pieces-of-a-script-\u5206\u89e3\u6b65\u9aa4\u7684\u5fc5\u8981\u90e8\u5206",level:3},{value:"Create the patch object. \u521b\u5efa\u6a21\u5757\u5bf9\u8c61",id:"create-the-patch-object-\u521b\u5efa\u6a21\u5757\u5bf9\u8c61",level:4},{value:"Define its inputs and outputs. \u5b9a\u4e49\u5176\u8f93\u5165\u548c\u8f93\u51fa",id:"define-its-inputs-and-outputs-\u5b9a\u4e49\u5176\u8f93\u5165\u548c\u8f93\u51fa",level:4},{value:"Set the patch properties. \u8bbe\u7f6e\u6a21\u5757\u5c5e\u6027",id:"set-the-patch-properties-\u8bbe\u7f6e\u6a21\u5757\u5c5e\u6027",level:4},{value:"Add logic. \u6dfb\u52a0\u903b\u8f91",id:"add-logic-\u6dfb\u52a0\u903b\u8f91",level:4},{value:"Reading and writing values. \u8bfb\u5199\u503c",id:"reading-and-writing-values-\u8bfb\u5199\u503c",level:4},{value:"Return the object. \u8fd4\u56de\u5bf9\u8c61",id:"return-the-object-\u8fd4\u56de\u5bf9\u8c61",level:4},{value:"Example \u4f8b\u5b50",id:"example-\u4f8b\u5b50",level:2},{value:"Debugging \u8c03\u8bd5",id:"debugging-\u8c03\u8bd5",level:2},{value:"Modifying a Script \u4fee\u6539\u811a\u672c",id:"modifying-a-script-\u4fee\u6539\u811a\u672c",level:2},{value:"Considerations when modifying a script. \u4fee\u6539\u811a\u672c\u65f6\u7684\u6ce8\u610f\u4e8b\u9879\u3002",id:"considerations-when-modifying-a-script-\u4fee\u6539\u811a\u672c\u65f6\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"Origami must be opened at all times while editing a JavaScript Patch. Origami \u5fc5\u987b\u5728\u7f16\u8f91 JavaScript \u6a21\u5757\u65f6\u4e00\u76f4\u6253\u5f00\u3002",id:"origami-must-be-opened-at-all-times-while-editing-a-javascript-patch-origami-\u5fc5\u987b\u5728\u7f16\u8f91-javascript-\u6a21\u5757\u65f6\u4e00\u76f4\u6253\u5f00",level:4},{value:"Effectively modifying inputs &amp; outputs. \u6709\u6548\u4fee\u6539\u8f93\u5165\u548c\u8f93\u51fa\u3002",id:"effectively-modifying-inputs--outputs-\u6709\u6548\u4fee\u6539\u8f93\u5165\u548c\u8f93\u51fa",level:4},{value:"Duplicated JavaScript Patch. \u590d\u5236 JavaScript \u6a21\u5757\u3002",id:"duplicated-javascript-patch-\u590d\u5236-javascript-\u6a21\u5757",level:4},{value:"Limitations \u9650\u5236",id:"limitations-\u9650\u5236",level:2},{value:"Host/Browser calls. \u4e3b\u673a/\u6d4f\u89c8\u5668\u8c03\u7528\u3002",id:"hostbrowser-calls-\u4e3b\u673a\u6d4f\u89c8\u5668\u8c03\u7528",level:3},{value:"Modules \u6a21\u5757",id:"modules-\u6a21\u5757",level:3},{value:"Hermes Unsupported Features Hermes \u4e0d\u652f\u6301\u7684\u529f\u80fd",id:"hermes-unsupported-features-hermes-\u4e0d\u652f\u6301\u7684\u529f\u80fd",level:3},{value:"Unsupported Origami Types \u4e0d\u652f\u6301\u7684 Origami \u7c7b\u578b",id:"unsupported-origami-types-\u4e0d\u652f\u6301\u7684-origami-\u7c7b\u578b",level:3},{value:"Maximum log messages \u6700\u5927\u65e5\u5fd7\u6d88\u606f",id:"maximum-log-messages-\u6700\u5927\u65e5\u5fd7\u6d88\u606f",level:3}],c={toc:s};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scripting-basics-\u811a\u672c\u57fa\u7840"},"Scripting Basics \u811a\u672c\u57fa\u7840"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\u6a21\u5757\u7f16\u8f91\u5668\u5728 Origami \u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f3a\u5927\u7075\u6d3b\u7684",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/tutorials/getting-started/coming-from-code.html"},"\u7f16\u7a0b\u73af\u5883"),"\u3002\u7136\u800c\uff0c\u6709\u65f6\u4f20\u7edf\u7684\u547d\u4ee4\u5f0f\u7f16\u7a0b\u53ef\u80fd\u662f\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("p",null,"\u591a\u4e8f\u4e86\u65b0\u7684 Javascript \u6a21\u5757\uff0cOrigami \u73b0\u5728\u53ef\u4ee5\u901a\u8fc7 Hermes \u8fd0\u884c\u65f6\u76f4\u63a5\u8fd0\u884c Javascript (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/hermes/blob/main/doc/Features.md"},"ES6","*"),")\u3002"),(0,n.kt)("h2",{id:"getting-a-script-into-origami-\u5728-origami-\u4e2d\u7f16\u5199\u811a\u672c"},"Getting a script into Origami \u5728 Origami \u4e2d\u7f16\u5199\u811a\u672c"),(0,n.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u6dfb\u52a0 JavaScript \u6a21\u5757\u5230 Origami:"),(0,n.kt)("video",{src:"https://origami.design/public/images/videos/scripting-droppingJSPatch.mov\n",height:"500",width:"100%",autoplay:"",muted:"",loop:"loop",align:"left"}),(0,n.kt)("p",null,"\u5c06\u6709\u6548\u7684.js \u6587\u4ef6\u62d6\u653e\u5230\u6a21\u5757\u56fe\u4e2d"),(0,n.kt)("video",{src:"https://origami.design/public/images/videos/scripting-addJs.mov\n",height:"500",width:"100%",autoplay:"",muted:"",loop:"loop"}),(0,n.kt)("p",null,"\u901a\u8fc7\u6a21\u5757\u9009\u62e9\u5668\u63d2\u5165 JavaScript \u6a21\u5757\u3002"),(0,n.kt)("h2",{id:"getting-started-\u5feb\u901f\u5f00\u59cb"},"Getting started \u5feb\u901f\u5f00\u59cb"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u91cd\u65b0\u521b\u5efa",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.splitter.html"},"splitter"),"\u7684\u57fa\u672c\u793a\u4f8b\u811a\u672c\uff0c\u6f14\u793a\u4e86\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u7684Javascript\u6587\u4ef6\u6a21\u5757\u6240\u9700\u7684\u5143\u7d20\u3002"),(0,n.kt)("p",null,"\u7ed3\u679c\u5c06\u5728\u6a21\u5757\u7f16\u8f91\u5668\u4e2d\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u6a21\u5757\uff0c\u5176\u4e2d\u5305\u542b\u811a\u672c\u5b9a\u4e49\u7684\u8f93\u5165\u903b\u8f91\u548c\u8f93\u51fa\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'var patch = new Patch();\n\npatch.inputs = [\n  new PatchInput("Input", types.NUMBER, 0),\n];\n\npatch.outputs = [\n  new PatchOutput("Output", types.NUMBER),\n];\n\npatch.alwaysNeedsToEvaluate = false;\npatch.loopAware = false;\n\npatch.evaluate = function() {\n  patch.outputs[0].value = patch.inputs[0].value;\n}\n\nreturn patch;\n')),(0,n.kt)("h3",{id:"breaking-down-the-necessary-pieces-of-a-script-\u5206\u89e3\u6b65\u9aa4\u7684\u5fc5\u8981\u90e8\u5206"},"Breaking down the necessary pieces of a script: \u5206\u89e3\u6b65\u9aa4\u7684\u5fc5\u8981\u90e8\u5206:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6a21\u5757\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5176\u8f93\u5165\u548c\u8f93\u51fa"),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u6a21\u5757\u5c5e\u6027\u3002(\u53ef\u9009)"),(0,n.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u903b\u8f91",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u503c"))),(0,n.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u6a21\u5757\u5bf9\u8c61")),(0,n.kt)("h4",{id:"create-the-patch-object-\u521b\u5efa\u6a21\u5757\u5bf9\u8c61"},"Create the patch object. \u521b\u5efa\u6a21\u5757\u5bf9\u8c61"),(0,n.kt)("p",null,"\u7b2c\u4e00\u6b65\u662f\u521b\u5efa\u7c7b",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#patch"},"Patch"),"\u7684\u5bf9\u8c61\u3002\u8fd9\u4e2a\u7c7b\u662f\u7528\u6765\u6267\u884c\u4efb\u4f55 JavaScript \u7684\u63a5\u53e3\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"var patch = new Patch();\n")),(0,n.kt)("h4",{id:"define-its-inputs-and-outputs-\u5b9a\u4e49\u5176\u8f93\u5165\u548c\u8f93\u51fa"},"Define its inputs and outputs. \u5b9a\u4e49\u5176\u8f93\u5165\u548c\u8f93\u51fa"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"inputs"),"\u662f",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput"},"PatchInput"),"\u7684\u6570\u7ec4\uff0c\u540c\u6837",(0,n.kt)("inlineCode",{parentName:"p"},"outputs"),"\u662f",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput"},"PatchOutput"),"\u7684\u6570\u7ec4\u3002\u521b\u5efa\u4e00\u4e2a\u5e26\u6709 Name\u3001Type \u548c\u53ef\u9009\u9ed8\u8ba4\u503c\u7684\u7aef\u53e3\u3002\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u7aef\u53e3\u7684\u987a\u5e8f\u5c06\u5728\u8f6c\u6362\u4e3a\u6a21\u5757\u65f6\u663e\u793a(\u89c1\u4e0b\u56fe)"),(0,n.kt)("p",null,"Javascript \u6587\u4ef6\u6a21\u5757\u4e2d\u53ef\u7528\u7684\u7c7b\u578b\u5217\u8868\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230:",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#types"},"types")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'patch.inputs = [\n  new PatchInput("Input", types.NUMBER, 0),\n];\n\npatch.outputs = [\n new PatchOutput("Output", types.NUMBER),\n];\n')),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Javscript Patch"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Input ",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Output ",(0,n.kt)("span",null,"0"))))),(0,n.kt)("h4",{id:"set-the-patch-properties-\u8bbe\u7f6e\u6a21\u5757\u5c5e\u6027"},"Set the patch properties. \u8bbe\u7f6e\u6a21\u5757\u5c5e\u6027"),(0,n.kt)("p",null,"\u6709\u51e0\u4e2a\u5c5e\u6027\u53ef\u4ee5\u6539\u53d8\u8bc4\u4f30\u6a21\u5757\u7684\u65b9\u5f0f\u3002(",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#patchloopaware-boolean-default-false"},"loopAware"),", ",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#patchalwaysneedstoevaluate-boolean-default-false"},"alwaysNeedsToEvaluate"),")\u8fd9\u4e00\u6b65\u662f\u53ef\u9009\u7684\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5c5e\u6027\u5df2\u7ecf\u6709\u4e86\u9ed8\u8ba4\u503c false\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"patch.alwaysNeedsToEvaluate = false;\npatch.loopAware = false;\n")),(0,n.kt)("h4",{id:"add-logic-\u6dfb\u52a0\u903b\u8f91"},"Add logic. \u6dfb\u52a0\u903b\u8f91"),(0,n.kt)("p",null,"\u6bcf\u4e2a\u6a21\u5757\u5bf9\u8c61\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a evaluate \u51fd\u6570\u3002\u8fd9\u4e2a\u51fd\u6570\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c2\u6570\uff0c\u4e5f\u4e0d\u8fd4\u56de\u4efb\u4f55\u503c\uff1b\u6211\u4eec\u671f\u671b\u4ece\u8f93\u5165\u7aef\u53e3\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u5411\u8f93\u51fa\u7aef\u53e3\u5199\u5165\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u8bc4\u4f30\u51fd\u6570\u662f\u6dfb\u52a0\u6a21\u5757\u6838\u5fc3\u529f\u80fd\u7684\u5730\u65b9\u3002\u53ea\u8981\u81f3\u5c11\u4e00\u4e2a\u8f93\u5165\u53d1\u751f\u53d8\u5316\uff0cevaluate \u51fd\u6570\u5c31\u4f1a\u8fd0\u884c\u3002\u9664\u975e\u5c5e\u6027",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#patchalwaysneedstoevaluate-boolean-default-false"},"alwaysNeedsToEvaluate"),"\u88ab\u8bbe\u7f6e\u4e3a' true '\u3002"),(0,n.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e00\u5e27\u90fd\u4f1a\u8c03\u7528 evaluate \u51fd\u6570\u3002\u4e3a\u4e86\u4f7f Origami \u5c3d\u53ef\u80fd\u9ad8\u6548\u5730\u8fd0\u884c\uff0c\u6211\u4eec\u5df2\u7ecf\u6295\u5165\u4e86\u5927\u91cf\u7684\u7cbe\u529b\uff0c\u4f7f\u7528\u9ad8\u5ea6\u4f18\u5316\u7684\u8bc4\u4f30\u65f6\u95f4\u8868\uff0c\u6240\u4ee5\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5e94\u8be5\u88ab\u8bbe\u7f6e\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"patch.evaluate = function() {\n  // Add logic here...\n}\n")),(0,n.kt)("h4",{id:"reading-and-writing-values-\u8bfb\u5199\u503c"},"Reading and writing values. \u8bfb\u5199\u503c"),(0,n.kt)("p",null,"\u4e3a\u4e86\u8bfb\u53d6\u8f93\u5165\u7684\u503c\uff0c\u811a\u672c\u9700\u8981\u901a\u8fc7\u7d22\u5f15\u5f15\u7528\u201c\u8f93\u5165\u201d\u6570\u7ec4\u3002\u4f8b\u5982:\u8bfb\u53d6\u7b2c\u4e00\u4e2a\u8f93\u5165\u7684\u503c\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"patch.inputs[0].value; ")),(0,n.kt)("p",null,"\u8f93\u51fa\u503c\u4e5f\u4ee5\u7c7b\u4f3c\u7684\u65b9\u5f0f\u8bbe\u7f6e\uff0c\u5373\u5c06\u503c\u8d4b\u7ed9' outputs '\u6570\u7ec4\u7684\u7d22\u5f15\u3002\u4f8b\u5982\uff0c\u5728\u7b2c\u4e00\u4e2a\u8f93\u51fa\u4e0a\u5199\u4e00\u4e9b\u4e1c\u897f\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"patch.outputs[0]\u3002\u503c= 10;")),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5faa\u73af\u503c\uff0c\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"values"),"\u5c5e\u6027(instead of just ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),")\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"values"),"\u5c5e\u6027\u53ef\u4ee5\u8bfb\u53d6\u6216\u5199\u5165\u4e00\u4e2a\u6570\u7ec4\u7684\u503c\u6765\u8868\u793a\u5faa\u73af\u7684\u503c\u3002"),(0,n.kt)("p",null,"\u8be6\u60c5\u53ef\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#patchinput"},"PatchInput")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#patchoutput"},"PatchOutput"),"\u3002"),(0,n.kt)("h4",{id:"return-the-object-\u8fd4\u56de\u5bf9\u8c61"},"Return the object. \u8fd4\u56de\u5bf9\u8c61"),(0,n.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u9700\u8981\u8fd4\u56de\u5b8c\u5168\u914d\u7f6e\u7684 Patch \u5bf9\u8c61\u3002Origami \u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/"},"IIFE"),"\u4f5c\u4e3a\u52a0\u8f7d\u6a21\u5757\u7684\u673a\u5236\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u5728\u6700\u540e\u8fd4\u56de\u6a21\u5757\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u5426\u5219 Origami \u5c06\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"return patch;\n")),(0,n.kt)("h2",{id:"example-\u4f8b\u5b50"},"Example \u4f8b\u5b50"),(0,n.kt)("p",null,"\u4f7f\u7528\u6a21\u5757\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u53ef\u80fd\u53d8\u5f97\u975e\u5e38\u590d\u6742\uff0c\u800c\u547d\u4ee4\u5f0f\u7f16\u7a0b\u53ef\u4ee5\u8f7b\u677e\u68c0\u67e5\u6709\u6548\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6240\u9700\u7684\u5b57\u7b26\u3002"),(0,n.kt)("p",null,"\u53e6\u4e00\u4e2a\u4f18\u70b9\u662f\u5728\u7f51\u4e0a\u6709\u66f4\u591a\u7684\u547d\u4ee4\u5f0f\u7f16\u7a0b\u7684\u4ee3\u7801\u7247\u6bb5\u3002\u4f8b\u5982\uff0c\u5feb\u901f\u641c\u7d22",(0,n.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address"},"\u5982\u4f55\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"var patch = new Patch();\n\npatch.inputs = [\n  new PatchInput(\"Email\", types.STRING, \"\"),\n];\n\npatch.outputs = [\n  new PatchOutput(\"Valid\", types.BOOLEAN, false),\n];\n\npatch.evaluate = function() {\n  const regexp =\n  new RegExp(\\[\"\\[a-zA-Z0-9.!#$%&'*+\\\\/=?^_`{|}~-\\]\",\n               '+@\\[a-zA-Z0-9\\](?:\\[a-zA-Z0-9-\\]{0,61}\\[a-zA-Z0-9\\])',\n               '?(?:\\\\.\\[a-zA-Z0-9\\](?:\\[a-zA-Z0-9-\\]{0,61}',\n               '\\[a-zA-Z0-9\\])?)*$'\\].join(''));\n  patch.outputs\\[0\\].value = regexp.test(patch.inputs\\[0\\].value);\n}\n\nreturn patch;\n")),(0,n.kt)("p",null,"\u8fd9\u4e2a\u811a\u672c\u751f\u6210\u4e00\u4e2a\u6a21\u5757\uff0c\u53ef\u4ee5\u8f7b\u677e\u68c0\u67e5\u8f93\u5165\u5b57\u7b26\u4e32\u662f\u5426\u5177\u6709\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u683c\u5f0f\u3002"),(0,n.kt)("h2",{id:"debugging-\u8c03\u8bd5"},"Debugging \u8c03\u8bd5"),(0,n.kt)("p",null,"\u76ee\u524d\u8fd8\u6ca1\u6709\u5408\u9002\u7684\u5de5\u5177\u6765\u8c03\u8bd5 JavaScript \u6a21\u5757\uff0c\u6bd4\u5982\u65ad\u70b9\u3002\u7136\u800c\uff0c\u901a\u8fc7\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"Console .log(\u2026)"),"\u53ef\u4ee5\u5c06\u6d88\u606f\u8f93\u51fa\u5230 Origami \u7684 JavaScript \u63a7\u5236\u53f0\u3002"),(0,n.kt)("p",null,"JavaScript \u63a7\u5236\u53f0\u53ef\u4ee5\u5728\u9690\u85cf/\u663e\u793a JavaScript \u63a7\u5236\u53f0\u7684\u89c6\u56fe\u83dc\u5355\u4e2d\u627e\u5230\u3002"),(0,n.kt)("p",null,"\u4e00\u65e6\u63a7\u5236\u53f0\u6253\u5f00\uff0c\u5b83\u5c06\u663e\u793a\u6765\u81ea\u9009\u5b9a\u7684\u6700\u540e\u4e00\u4e2a JavaScript \u6a21\u5757\u7684\u65e5\u5fd7\u6d88\u606f\u3002"),(0,n.kt)("p",null,"JavaScript \u63a7\u5236\u53f0\u6d88\u606f\u5c06\u76f4\u63a5\u6765\u81ea\u6a21\u5757\u7684\u4ee3\u7801\uff0c\u6216\u8005\u6765\u81ea\u811a\u672c\u4e2d\u7684\u8b66\u544a\u6216\u9519\u8bef\u3002"),(0,n.kt)("p",null,"For example take this code: ",(0,n.kt)("inlineCode",{parentName:"p"},"patch.outputs[0].value = [];")),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801:",(0,n.kt)("inlineCode",{parentName:"p"},"patch.outputs[0]\u3002\u503c=[];")),(0,n.kt)("p",null,"\u8fd9\u5c06\u5c1d\u8bd5\u5c06\u4e00\u4e2a\u6570\u7ec4\u5199\u5165\u5355\u4e2a\u503c\u3002\u56e0\u6b64\u63a7\u5236\u53f0\u5c06\u8f93\u51fa\u4ee5\u4e0b\u8b66\u544a:",(0,n.kt)("inlineCode",{parentName:"p"},"\u8b66\u544a:\u65e0\u6cd5\u5c06JavaScript\u503c\u8f6c\u6362\u4e3a\u9002\u5f53\u7684Origami\u7c7b\u578b\u3002\u5ffd\u7565.")),(0,n.kt)("p",null,"\u65e5\u5fd7\u6d88\u606f\u53ef\u4ee5\u5feb\u901f\u7d2f\u79ef\uff0cOrigami \u4e3a\u5b83\u4eec\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u6700\u5927",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#maximum-log-messages"},"\u9650\u5236"),"\u3002\u8fd9\u53ef\u80fd\u4f1a\u4f7f\u4fe1\u606f\u96be\u4ee5\u8ddf\u8e2a\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0cOrigami \u5728",(0,n.kt)("inlineCode",{parentName:"p"},"console"),"\u4e0a\u63d0\u4f9b\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u65b9\u6cd5\uff0c\u79f0\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"watch"),"\u3002\u8fd9\u5bf9\u4e8e\u901a\u8fc7\u4e0d\u540c\u7684\u8bc4\u4f30\u5468\u671f\u8ddf\u8e2a\u7279\u5b9a\u53d8\u91cf\u975e\u5e38\u6709\u6548\u3002\u4f8b\u5982:"),(0,n.kt)("video",{src:"https://origami.design/public/images/videos/scripting-console-log.mov",height:"500",width:"100%",autoplay:"",muted:"",loop:"loop"}),(0,n.kt)("video",{src:"https://origami.design/public/images/videos/scripting-console-watch.mov",height:"500",width:"100%",autoplay:"",muted:"",loop:"loop"}),(0,n.kt)("h2",{id:"modifying-a-script-\u4fee\u6539\u811a\u672c"},"Modifying a Script \u4fee\u6539\u811a\u672c"),(0,n.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4efb\u4f55 JavaScript \u6a21\u5757\u90fd\u4f1a\u51fa\u73b0 \u201c",(0,n.kt)("em",{parentName:"p"},"\u5728\u9ed8\u8ba4\u7f16\u8f91\u5668\u4e2d\u6253\u5f00"),"\u201d \u9009\u9879\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/scripting-editjsPatch.png",alt:"img"})),(0,n.kt)("p",null,"\u786e\u4fdd\u914d\u7f6e\u4e86\u6b63\u786e\u7684\u7f16\u8f91\u5668\u3002Chrome(\u6216 Safari)\u901a\u5e38\u662f\u6253\u5f00 JavaScript \u6587\u4ef6\u7684\u9ed8\u8ba4\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f46\u5b83\u4eec\u4e0d\u662f\u7f16\u8f91\u5668\u3002\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"https://www.imore.com/how-set-mac-app-default-when-opening-file"},"\u5982\u4f55\u4e3a\u4efb\u4f55\u6587\u4ef6\u7c7b\u578b\u66f4\u6539\u9ed8\u8ba4\u5e94\u7528\u7a0b\u5e8f"),"\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u5728\u76f8\u540c\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u8fd8\u6709\u4e00\u4e2a\u9009\u9879 \u201c",(0,n.kt)("em",{parentName:"p"},"Open With"),"\u201d \uff0c\u5b83\u53ef\u4ee5\u8ba9\u4f60\u4ece\u53ef\u4ee5\u7f16\u8f91 JavaScript \u6587\u4ef6\u7684\u5e94\u7528\u7a0b\u5e8f\u5217\u8868\u4e2d\u8fdb\u884c\u9009\u62e9\u3002"),(0,n.kt)("h3",{id:"considerations-when-modifying-a-script-\u4fee\u6539\u811a\u672c\u65f6\u7684\u6ce8\u610f\u4e8b\u9879"},"Considerations when modifying a script. \u4fee\u6539\u811a\u672c\u65f6\u7684\u6ce8\u610f\u4e8b\u9879\u3002"),(0,n.kt)("h4",{id:"origami-must-be-opened-at-all-times-while-editing-a-javascript-patch-origami-\u5fc5\u987b\u5728\u7f16\u8f91-javascript-\u6a21\u5757\u65f6\u4e00\u76f4\u6253\u5f00"},"Origami must be opened at all times while editing a JavaScript Patch. Origami \u5fc5\u987b\u5728\u7f16\u8f91 JavaScript \u6a21\u5757\u65f6\u4e00\u76f4\u6253\u5f00\u3002"),(0,n.kt)("p",null,"\u4fee\u6539\u811a\u672c\u8fd8\u53ef\u80fd\u6d89\u53ca\u4fee\u6539\u6a21\u5757\u7684\u7ed3\u6784\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u589e\u52a0\u8f93\u5165\u6216\u8f93\u51fa\u3002\u8fd9\u4e9b\u53d8\u5316\u9700\u8981\u53cd\u6620\u5728\u6a21\u5757\u56fe\u4e2d\uff0c\u56e0\u4e3a Origami \u9700\u8981\u662f\u5f00\u653e\u7684\uff0c\u4ee5\u4fbf\u80fd\u591f\u5904\u7406\u8fd9\u4e9b\u53d8\u5316\u3002\u5728\u6b64\u5de5\u4f5c\u6d41\u4e4b\u5916\u6240\u505a\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u53ef\u80fd\u88ab\u9057\u6f0f\u6216\u5bfc\u81f4\u539f\u578b\u51fa\u73b0\u6545\u969c\u3002"),(0,n.kt)("p",null,"\u6ce8\u610f\uff0c\u4e00\u65e6\u4f60\u5173\u95ed Origami\u3002\u60a8\u6b63\u5728\u7f16\u8f91\u7684 JavaScript \u6587\u4ef6\u88ab\u5220\u9664\u3002"),(0,n.kt)("p",null,"\u60a8\u4e0d\u5e94\u8be5\u5c1d\u8bd5\u91cd\u7528\u8be5\u6587\u4ef6\u3002\u6839\u636e\u6240\u4f7f\u7528\u7684\u7f16\u8f91\u5668\uff0c\u5728\u8be5\u8def\u5f84\u4e0a\u7ee7\u7eed\u7f16\u8f91\u6587\u4ef6\u662f\u4e0d\u5b89\u5168\u7684\u8fd9\u4e00\u4e8b\u5b9e\u53ef\u80fd\u6216\u591a\u6216\u5c11\u4f1a\u5f88\u7a81\u51fa\u3002\u4f8b\u5982\uff0c\u5728 VS Code \u4e2d\uff0c\u5b83\u5728\u6807\u9898\u4e2d\u663e\u793a\u6587\u4ef6\u5df2\u88ab\u5220\u9664\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/scripting-deletedFile.png",alt:"img"})),(0,n.kt)("h4",{id:"effectively-modifying-inputs--outputs-\u6709\u6548\u4fee\u6539\u8f93\u5165\u548c\u8f93\u51fa"},"Effectively modifying inputs & outputs. \u6709\u6548\u4fee\u6539\u8f93\u5165\u548c\u8f93\u51fa\u3002"),(0,n.kt)("p",null,"\u5f53\u4fee\u6539\u5df2\u8fde\u63a5\u7684 JavaScript \u6a21\u5757\u4e0a\u7684\u8f93\u5165\u6216\u8f93\u51fa\u65f6\u3002\u91cd\u8981\u7684\u662f\u8981\u8bb0\u4f4f\uff0c\u66f4\u6539\u7aef\u53e3\u7684\u540d\u79f0\u751a\u81f3\u7c7b\u578b\u662f\u5b89\u5168\u7684\uff0cOrigami \u5c06\u4fdd\u6301\u8fde\u63a5\u3002"),(0,n.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u53ea\u8981\u7aef\u53e3\u7684\u987a\u5e8f\u4fdd\u6301\u4e0d\u53d8\uff0c\u5c31\u53ef\u4ee5\u4fdd\u6301\u8fde\u63a5\u3002\u5220\u9664\u4e00\u4e2a\u8f93\u5165\u7136\u540e\u91cd\u65b0\u6dfb\u52a0\u5b83\u4f1a\u4e22\u5931\u4e4b\u524d\u7684\u4efb\u4f55\u8fde\u63a5\u3002"),(0,n.kt)("p",null,"\u6539\u53d8\u4e24\u4e2a\u7aef\u53e3\u7684\u987a\u5e8f\u5b9e\u9645\u4e0a\u4e0e\u91cd\u547d\u540d\u5b83\u4eec\u76f8\u540c\u3002\u56e0\u4e3a\u8bbf\u95ee\u7aef\u53e3\u603b\u662f\u901a\u8fc7\u7d22\u5f15\u3002"),(0,n.kt)("h4",{id:"duplicated-javascript-patch-\u590d\u5236-javascript-\u6a21\u5757"},"Duplicated JavaScript Patch. \u590d\u5236 JavaScript \u6a21\u5757\u3002"),(0,n.kt)("p",null,"\u91cd\u590d\u7684 JavaScript \u6a21\u5757\u6307\u5411\u76f8\u540c\u7684\u6587\u4ef6\u6e90\u3002\u56e0\u6b64\uff0c\u4fee\u6539\u8be5\u6587\u4ef6\u5c06\u5728\u6240\u6709\u8fd9\u4e9b\u76f8\u540c\u7684\u6a21\u5757\u4e2d\u751f\u6548\u3002"),(0,n.kt)("p",null,"\u8fd9\u53ea\u53d1\u751f\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u7684\u4e0a\u4e0b\u6587\u4e2d\u3002\u590d\u5236/\u7c98\u8d34\u4e00\u4e2a JavaScript \u6a21\u5757\u5230\u53e6\u4e00\u4e2a\u6587\u4ef6\u5c06\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684 JavaScript \u6587\u4ef6\u3002"),(0,n.kt)("h2",{id:"limitations-\u9650\u5236"},"Limitations \u9650\u5236"),(0,n.kt)("h3",{id:"hostbrowser-calls-\u4e3b\u673a\u6d4f\u89c8\u5668\u8c03\u7528"},"Host/Browser calls. \u4e3b\u673a/\u6d4f\u89c8\u5668\u8c03\u7528\u3002"),(0,n.kt)("p",null,"\u7ecf\u5e38\u4f1a\u770b\u5230 JS \u4ee3\u7801\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"alert(\u2026)"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"document.getElementById(\u2026)"),"\u7b49\u8c03\u7528"),(0,n.kt)("p",null,"\u8fd9\u4e9b\u65b9\u6cd5\u662f\u7279\u5b9a\u4e8e\u6d4f\u89c8\u5668",(0,n.kt)("a",{parentName:"p",href:"https://www.w3schools.com/js/js_window.asp"},"BOM"),"\u6216 HTML ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3schools.com/js/js_htmldom.asp"},"DOM"),"\u7684\u3002\u56e0\u6b64\uff0c\u5b83\u4eec\u4e0d\u662f JavaScript \u8bed\u8a00\u672c\u8eab\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64 Origami \u4e0d\u652f\u6301\u5b83\u4eec\u3002"),(0,n.kt)("p",null,"\u5176\u4ed6\u7c7b\u4f3c\u7684\u4e0d\u53d7\u652f\u6301\u7684 api\uff0c\u4e0d\u662f JavaScript \u7684\u4e00\u90e8\u5206\uff0c\u4f46\u7531\u6d4f\u89c8\u5668\u63d0\u4f9b:Ajax, WebWorkers, WebStorage, Canvas \u7b49\u3002"),(0,n.kt)("h3",{id:"modules-\u6a21\u5757"},"Modules \u6a21\u5757"),(0,n.kt)("p",null,"\u4e0d\u53ef\u80fd\u5c06\u811a\u672c\u62c6\u5206\u4e3a\u591a\u4e2a\u6587\u4ef6\u5e76\u5bfc\u5165\u6a21\u5757\u3002\u6574\u4e2a\u4ee3\u7801\u5fc5\u987b\u5305\u542b\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u7b26\u5408",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/scriptingbasics?fbclid=IwAR2y3vdZaoLrtlUoA-bio42zeWZefYd7vM6HPB4nnA-kGnxJTJPtxXmuBoo#getting-started"},"\u5165\u95e8"),"\u4e2d\u6982\u8ff0\u7684\u6b65\u9aa4\u3002"),(0,n.kt)("h3",{id:"hermes-unsupported-features-hermes-\u4e0d\u652f\u6301\u7684\u529f\u80fd"},"Hermes Unsupported Features Hermes \u4e0d\u652f\u6301\u7684\u529f\u80fd"),(0,n.kt)("p",null,"Hermes \u662f Origami \u7528\u6765\u6267\u884c JavaScript \u7684\u5f15\u64ce\u3002\u8fd9\u91cc\u6709\u4e00\u4e2a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/hermes/blob/main/doc/Features.md"},"\u94fe\u63a5"),"\u5b83\u4e0d\u652f\u6301\u7684\u529f\u80fd\u3002"),(0,n.kt)("p",null,"\u4f46\u603b\u7684\u6765\u8bf4\uff0cJavascript \u6587\u4ef6\u811a\u672c\u662f\u4e00\u4e2a\u4ee5\u903b\u8f91\u4e3a\u4e2d\u5fc3\u7684\u5b9e\u73b0\uff0c\u56e0\u6b64\u5b83\u4e0d\u652f\u6301\u4f7f\u7528\u6a21\u5757\u6216\u5916\u90e8\u5e93\u3002"),(0,n.kt)("h3",{id:"unsupported-origami-types-\u4e0d\u652f\u6301\u7684-origami-\u7c7b\u578b"},"Unsupported Origami Types \u4e0d\u652f\u6301\u7684 Origami \u7c7b\u578b"),(0,n.kt)("p",null,"\u5e76\u4e0d\u662f\u6240\u6709\u7684 Origami \u7c7b\u578b\u90fd\u88ab\u652f\u6301\u3002\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/documentation/concepts/ScriptingAPI.html#types"},"\u652f\u6301\u7684\u7c7b\u578b"),"\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002\u4e0d\u652f\u6301\u9700\u8981\u8d44\u6e90\u7684\u6574\u4f53\u7c7b\u578b\uff1b\u4f8b\u5982\u56fe\u50cf\u6216\u89c6\u9891\u3002"),(0,n.kt)("h3",{id:"maximum-log-messages-\u6700\u5927\u65e5\u5fd7\u6d88\u606f"},"Maximum log messages \u6700\u5927\u65e5\u5fd7\u6d88\u606f"),(0,n.kt)("p",null,"\u63a7\u5236\u53f0\u6700\u591a\u4fdd\u5b58 50 \u6761\u6d88\u606f\uff0c\u4e4b\u540e\u5c06\u6e05\u9664\u65e7\u7684\u6d88\u606f\u3002\u66f4\u597d\u7684\u65b9\u6cd5\u662f\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"console.watch"),"\u3002\u5b83\u7684\u6027\u80fd\u66f4\u597d\uff0c\u5e76\u7f13\u89e3\u4e86\u63a7\u5236\u53f0\u5145\u65a5\u7740\u6d88\u606f\u7684\u95ee\u9898\u3002"))}u.isMDXComponent=!0}}]);