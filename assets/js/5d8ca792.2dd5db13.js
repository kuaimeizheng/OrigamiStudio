"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[90464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,p=function(e,n){if(null==e)return{};var t,o,p={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=m(t),u=p,k=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return t?o.createElement(k,r(r({ref:n},s),{},{components:t})):o.createElement(k,r({ref:n},s))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,r=new Array(i);r[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,r[1]=a;for(var m=2;m<i;m++)r[m]=t[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var o=t(87462),p=(t(67294),t(3905));const i={title:"Components \u7ec4\u4ef6",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Components \u7ec4\u4ef6",a={unversionedId:"documentation/Workflow/Components",id:"documentation/Workflow/Components",title:"Components \u7ec4\u4ef6",description:"\u7ec4\u4ef6\u662f Origami \u4e2d\u7684\u4e00\u9879\u5f3a\u5927\u529f\u80fd\uff0c\u5141\u8bb8\u60a8\u5728\u6587\u6863\u4e2d\u7684\u753b\u677f\u3001\u5c4f\u5e55\u751a\u81f3\u591a\u4e2a\u6587\u6863\u4e2d\u91cd\u590d\u4f7f\u7528\u56fe\u5c42\u548c\u6a21\u5757\u3002",source:"@site/docs/documentation/Workflow/Components.md",sourceDirName:"documentation/Workflow",slug:"/documentation/Workflow/Components",permalink:"/OrigamiStudio/docs/documentation/Workflow/Components",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Workflow/Components.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575955,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Components \u7ec4\u4ef6",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Workflow \u5de5\u4f5c\u6d41",permalink:"/OrigamiStudio/docs/category/workflow-\u5de5\u4f5c\u6d41"},next:{title:"Creating an Origami System \u7cfb\u7edf\u521b\u5efa",permalink:"/OrigamiStudio/docs/documentation/Workflow/Creating an Origami System"}},l={},m=[{value:"Creating Patch Components \u521b\u5efa\u6a21\u5757\u7ec4\u4ef6",id:"creating-patch-components-\u521b\u5efa\u6a21\u5757\u7ec4\u4ef6",level:2},{value:"Editing Patch Components \u7f16\u8f91\u6a21\u5757\u7ec4\u4ef6",id:"editing-patch-components-\u7f16\u8f91\u6a21\u5757\u7ec4\u4ef6",level:3},{value:"Creating Layer Components \u521b\u5efa\u56fe\u5c42\u7ec4\u4ef6",id:"creating-layer-components-\u521b\u5efa\u56fe\u5c42\u7ec4\u4ef6",level:2},{value:"Editing Layer Components \u7f16\u8f91\u56fe\u5c42\u7ec4\u4ef6",id:"editing-layer-components-\u7f16\u8f91\u56fe\u5c42\u7ec4\u4ef6",level:3},{value:"Components Inputs and Outputs \u7ec4\u4ef6\u7684\u8f93\u5165\u548c\u8f93\u51fa",id:"components-inputs-and-outputs-\u7ec4\u4ef6\u7684\u8f93\u5165\u548c\u8f93\u51fa",level:2},{value:"Inserting Components \u63d2\u5165\u7ec4\u4ef6",id:"inserting-components-\u63d2\u5165\u7ec4\u4ef6",level:2},{value:"Types of Components \u7ec4\u4ef6\u7c7b\u578b",id:"types-of-components-\u7ec4\u4ef6\u7c7b\u578b",level:2},{value:"Platform Components \u5e73\u53f0\u7ec4\u4ef6",id:"platform-components-\u5e73\u53f0\u7ec4\u4ef6",level:3},{value:"Device Components \u8bbe\u5907\u7ec4\u4ef6",id:"device-components-\u8bbe\u5907\u7ec4\u4ef6",level:3},{value:"Document Components \u6587\u6863\u7ec4\u4ef6",id:"document-components-\u6587\u6863\u7ec4\u4ef6",level:3},{value:"User Library Components \u7528\u6237\u5e93\u7ec4\u4ef6",id:"user-library-components-\u7528\u6237\u5e93\u7ec4\u4ef6",level:3},{value:"Patch Library \u7ec4\u4ef6\u5e93",id:"patch-library-\u7ec4\u4ef6\u5e93",level:2},{value:"Updating Components \u66f4\u65b0\u7ec4\u4ef6",id:"updating-components-\u66f4\u65b0\u7ec4\u4ef6",level:3},{value:"Platform-specific Components \u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u7ec4\u4ef6",id:"platform-specific-components-\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u7ec4\u4ef6",level:3},{value:"Sharing a Folder of Patches and Components \u5171\u4eab\u7ec4\u4ef6\u548c\u6a21\u5757\u7684\u6587\u4ef6\u5939",id:"sharing-a-folder-of-patches-and-components-\u5171\u4eab\u7ec4\u4ef6\u548c\u6a21\u5757\u7684\u6587\u4ef6\u5939",level:2}],s={toc:m};function c(e){let{components:n,...i}=e;return(0,p.kt)("wrapper",(0,o.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"components-\u7ec4\u4ef6"},"Components \u7ec4\u4ef6"),(0,p.kt)("p",null,"\u7ec4\u4ef6\u662f Origami \u4e2d\u7684\u4e00\u9879\u5f3a\u5927\u529f\u80fd\uff0c\u5141\u8bb8\u60a8\u5728\u6587\u6863\u4e2d\u7684\u753b\u677f\u3001\u5c4f\u5e55\u751a\u81f3\u591a\u4e2a\u6587\u6863\u4e2d\u91cd\u590d\u4f7f\u7528\u56fe\u5c42\u548c\u6a21\u5757\u3002"),(0,p.kt)("p",null,"\u5f53\u60a8\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u8fd9\u4e9b\u66f4\u6539\u540c\u6b65\u663e\u793a\u5728\u539f\u578b\u4e2d\u4f7f\u7528\u7ec4\u4ef6\u7684\u5730\u65b9\u3002 \u5b83\u4eec\u5728\u6982\u5ff5\u4e0a\u7c7b\u4f3c\u4e8e Figma \u6216 Sketch \u4e2d\u7684\u7ec4\u4ef6\u3002"),(0,p.kt)("hr",null),(0,p.kt)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u7531\u56fe\u5c42\u3001\u6a21\u5757\u6216\u4e24\u8005\u7ec4\u6210\u3002"),(0,p.kt)("p",null,"\u6a21\u5757\u7ec4\u4ef6\u4ec5\u7531\u6a21\u5757\u7ec4\u6210\u3002\u4f7f\u7528\u6a21\u5757\u7ec4\u4ef6\u6765\u51cf\u5c11\u6742\u4e71\uff0c\u5e76\u5c01\u88c5\u4e00\u7ec4\u6267\u884c\u67d0\u4e2a\u529f\u80fd\u7684\u6a21\u5757\u3002\u8fd9\u4e0e\u7f16\u7a0b\u4e2d\u7684\u51fd\u6570\u7c7b\u4f3c\u3002"),(0,p.kt)("p",null,"\u56fe\u5c42\u7ec4\u4ef6 \u7531\u56fe\u5c42\u548c\u6a21\u5757\u7ec4\u6210\u3002\u5728\u8bbe\u8ba1\u4e2d\u4e3a\u9700\u8981\u91cd\u590d\u4f7f\u7528\u7684 UI \u4f7f\u7528\u56fe\u5c42\u7ec4\u4ef6\uff0c\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u6709\u81ea\u5df1\u7684\u529f\u80fd\u3002"),(0,p.kt)("p",null,"(\u4f8b\u5982\uff0c\u6309\u94ae\u7ec4\u4ef6\u53ef\u4ee5\u6709\u6587\u672c\u548c\u77e9\u5f62\u56fe\u5c42\uff0c\u4e5f\u53ef\u4ee5\u5305\u542b\u4ea4\u4e92\u6a21\u5757\uff0c\u6216\u8005\u5176\u4ed6\u529f\u80fd)"),(0,p.kt)("h2",{id:"creating-patch-components-\u521b\u5efa\u6a21\u5757\u7ec4\u4ef6"},"Creating Patch Components \u521b\u5efa\u6a21\u5757\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u8981\u5c06\u591a\u4e2a\u6a21\u5757\u7ec4\u5408\u6210\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u8bf7\u9009\u62e9\u6a21\u5757\u5e76\u4ece\u83dc\u5355\u680f\u4e2d\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6 > Create component \u521b\u5efa\u7ec4\u4ef6")," ",(0,p.kt)("strong",{parentName:"p"},"\u2303\u2318G")," \u6216\u53f3\u952e\u5355\u51fb\u5e76\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"Group Into Component \u7ec4\u6210\u7ec4\u4ef6"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/even-or-odd.mp4"},"https://origami.design/public/images/videos/even-or-odd.mp4")),(0,p.kt)("p",null,"\u521b\u5efa\u6a21\u5757\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u4e0a\u9762\u7684\u4e00\u7ec4\u6a21\u5757\u5c06\u88ab\u4e00\u4e2a\u540d\u4e3a \u201cEven or Odd \u5076\u6570\u6216\u5947\u6570\u201d \u7684\u65b0\u6a21\u5757\u7ec4\u4ef6\u6240\u53d6\u4ee3\uff0c\u8be5\u7ec4\u4ef6\u5305\u542b\u5176\u6240\u8fde\u63a5\u8282\u70b9\u7684\u8f93\u5165\u548c\u8f93\u51fa\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Image",src:t(75767).Z,width:"1504",height:"196"})),(0,p.kt)("p",null,"\u6ce8\u610f\uff1a\u56fe\u5c42\u5c5e\u6027\u6a21\u5757\u4e0d\u80fd\u88ab\u7ec4\u5408\u5230\u4e00\u4e2a\u6a21\u5757\u7ec4\u4ef6\u4e2d\u2014\u2014\u8981\u7528\u56fe\u5c42\u6784\u5efa\u6a21\u5757\u7ec4\u4ef6\uff0c\u8bf7\u4f7f\u7528\u56fe\u5c42\u7ec4\u4ef6\u3002"),(0,p.kt)("h3",{id:"editing-patch-components-\u7f16\u8f91\u6a21\u5757\u7ec4\u4ef6"},"Editing Patch Components \u7f16\u8f91\u6a21\u5757\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u53cc\u51fb\u6216\u6309 ",(0,p.kt)("inlineCode",{parentName:"p"},"\u2325\u2193")," \u8fdb\u5165\u6a21\u5757\u7ec4\u3002\u6309\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"}," \u2325\u2191")," \u79bb\u5f00\u5e76\u8fd4\u56de\u3002"),(0,p.kt)("p",null,"\u8fdb\u5165\u548c\u79bb\u5f00\u6a21\u5757\u7ec4\u7684\u83dc\u5355\u9879\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6 > Enter Component \u8fdb\u5165\u7ec4\u4ef6 "),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6 > Exit Component \u9000\u51fa\u7ec4\u4ef6"),"\u3002"),(0,p.kt)("p",null,"\u7ec4\u4ef6\u4e2d\u7684\u8f93\u5165\u7aef\u53e3\u7531\u7d2b\u8272\u6a21\u5757\u8868\u793a\uff0c\u8f93\u51fa\u7aef\u53e3\u7531\u84dd\u8272\u6a21\u5757\u8868\u793a\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/edit-patch-components.png",alt:null})),(0,p.kt)("p",null,"\u7f16\u8f91\u6a21\u5757\u7ec4\u4ef6"),(0,p.kt)("h2",{id:"creating-layer-components-\u521b\u5efa\u56fe\u5c42\u7ec4\u4ef6"},"Creating Layer Components \u521b\u5efa\u56fe\u5c42\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u8981\u521b\u5efa\u7ec4\u4ef6\uff0c\u4ece\u6a21\u5757\u7f16\u8f91\u5668\u4e2d\u9009\u62e9\u6a21\u5757\u4ee5\u53ca\u4ece\u56fe\u5c42\u9762\u677f\u4e2d\u9009\u62e9\u4f60\u60f3\u8981\u8bbe\u7f6e\u4e3a\u7ec4\u4ef6\u7684\u56fe\u5c42\u3002"),(0,p.kt)("p",null,"\u7136\u540e\uff0c\u5728\u83dc\u5355\u680f\u4e2d\u5355\u51fb ",(0,p.kt)("inlineCode",{parentName:"p"}," Component \u7ec4\u4ef6 > Group Into Component \u7ec4\u4e3a\u7ec4\u4ef6"),"\u6216",(0,p.kt)("inlineCode",{parentName:"p"}," \u2303\u2318G")," \u3002\u4e3a\u7ec4\u4ef6\u8f93\u5165\u4e00\u4e2a\u540d\u79f0\uff0c\u7136\u540e\u5355\u51fb ",(0,p.kt)("inlineCode",{parentName:"p"},"Create \u521b\u5efa"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/create-layer-components.png",alt:null})),(0,p.kt)("p",null,"\u9009\u62e9\u8981\u6dfb\u52a0\u5230\u56fe\u5c42\u7ec4\u4ef6\u7684\u56fe\u5c42\u548c\u6a21\u5757"),(0,p.kt)("p",null,"\u60a8\u4f1a\u6ce8\u610f\u5230\u5e26\u6709\u7d2b\u8272\u9f7f\u8f6e\u56fe\u6807\u7684\u5355\u4e2a\u56fe\u5c42\u5df2\u7ecf\u53d6\u4ee3\u4e86\u5361\u7247\u7ec4\u56fe\u5c42\uff0c\u5e76\u4e14\u6a21\u5757\u5df2\u7ecf\u6d88\u5931\u3002"),(0,p.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6240\u6709\u5185\u5bb9\u90fd\u5df2\u79fb\u81f3\u7ec4\u4ef6\u4e2d\u3002\u73b0\u5728\u662f\u4e00\u4e2a\u672c\u5730\u6587\u6863\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5728\u6587\u6863\u7ec4\u4ef6\u4e0b\u7684\u56fe\u5c42\u5e93\u4e2d\u627e\u5230\u3002"),(0,p.kt)("h3",{id:"editing-layer-components-\u7f16\u8f91\u56fe\u5c42\u7ec4\u4ef6"},"Editing Layer Components \u7f16\u8f91\u56fe\u5c42\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u901a\u8fc7\u5728\u753b\u5e03\u4e0a\u9009\u62e9\u7ec4\u4ef6\u753b\u677f\u6216\u5728\u56fe\u5c42\u5217\u8868\u6216\u6a21\u5757\u7f16\u8f91\u5668\u4e2d\u53cc\u51fb\u7ec4\u4ef6\u6765\u7f16\u8f91\u7ec4\u4ef6\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/edit-layer-components.png",alt:null})),(0,p.kt)("p",null,"\u7f16\u8f91\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u8fdb\u5165\u7ec4\u4ef6\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e9b\u6a21\u5757\uff0c\u663e\u793a\u8be5\u7ec4\u4ef6\u7684\u5df2\u53d1\u5e03\u7684\u8f93\u5165\u548c\u8f93\u51fa\u3002\u53d1\u5e03\u7684\u5c5e\u6027\u662f\u7ec4\u4ef6\u7684\u4e00\u90e8\u5206\uff0c\u7136\u540e\u53ef\u4ee5\u4ece\u4e3b\u89c6\u56fe\u4e2d\u8fdb\u884c\u7f16\u8f91\u3002\u4f60\u8fd8\u4f1a\u770b\u5230\u4f60\u5728\u521b\u5efa\u7ec4\u4ef6\u65f6\u6dfb\u52a0\u7684\u6a21\u5757\u548c\u56fe\u5c42\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7\u70b9\u51fb ",(0,p.kt)("inlineCode",{parentName:"p"}," Components \u7ec4\u4ef6 > Exit component \u9000\u51fa\u7ec4\u4ef6"),"\u6216",(0,p.kt)("inlineCode",{parentName:"p"}," \u2303\u2325\u2191"),"\u6216\u4f7f\u7528\u5c42\u5217\u8868\u9876\u90e8\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"\u8fd4\u56de\u7bad\u5934"),"\u9000\u51fa\u7ec4\u4ef6\u3002"),(0,p.kt)("h2",{id:"components-inputs-and-outputs-\u7ec4\u4ef6\u7684\u8f93\u5165\u548c\u8f93\u51fa"},"Components Inputs and Outputs \u7ec4\u4ef6\u7684\u8f93\u5165\u548c\u8f93\u51fa"),(0,p.kt)("p",null,"\u8981\u6dfb\u52a0\u3001\u7f16\u8f91\u3001\u91cd\u65b0\u6392\u5e8f\u6216\u5220\u9664\u5355\u4e2a\u8f93\u5165\u548c\u8f93\u51fa\uff0c\u8bf7\u9009\u62e9\u6a21\u5757\u7ec4\u5e76\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"}," Component \u7ec4\u4ef6 > Component Info \u7ec4\u4ef6\u4fe1\u606f")," \u6216",(0,p.kt)("inlineCode",{parentName:"p"},"\u21e7\u2318I"),"\u6253\u5f00\u6a21\u5757\u4fe1\u606f\u5f39\u7a97\u3002"),(0,p.kt)("p",null,"\u7aef\u53e3\u8bbe\u7f6e\u9009\u9879\u5141\u8bb8\u60a8\u66f4\u6539\u7aef\u53e3\u7c7b\u578b\u548c\u5176\u4ed6\u5c5e\u6027\uff0c\u4f8b\u5982\u9ed8\u8ba4\u503c\u3001\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/edit-component.png",alt:null})),(0,p.kt)("p",null,"\u7f16\u8f91\u7ec4\u4ef6\u4fe1\u606f"),(0,p.kt)("p",null,"\u8981\u4ece\u6a21\u5757\u7ec4\u4ef6\u5185\u90e8\u53d1\u5e03\u8f93\u5165\u6216\u8f93\u51fa\uff0c\u8bf7\u9009\u62e9\u4e00\u4e2a\u7aef\u53e3\u5e76\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6 > Publish Port \u53d1\u5e03\u7aef\u53e3"),"\u6216",(0,p.kt)("inlineCode",{parentName:"p"}," \u2325P"),"\u3002\u5c06\u6dfb\u52a0\u4e00\u4e2a\u7d2b\u8272\u6216\u84dd\u8272\u6a21\u5757\uff0c\u8868\u793a\u6a21\u5757\u7ec4\u4e0a\u7684\u8f93\u5165\u6216\u8f93\u51fa\u3002"),(0,p.kt)("p",null,"\u7ec4\u4ef6\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u8fd8\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u7aef\u53e3\u6807\u7b7e\u53ef\u7528 \u2014\u2014 \u4f8b\u5982\uff0c\u4f7f\u7528 Enable \u542f\u7528 \u6807\u7b7e\u5c06\u663e\u793a\u7ec4\u4ef6\u4e0a\u7684\u773c\u775b\u56fe\u6807\uff0c\u4ee5\u4fbf\u5feb\u901f\u542f\u7528\u6216\u7981\u7528\u3002\u5f53\u4e0d\u9700\u8981\u7279\u6b8a\u6807\u7b7e\u65f6\uff0c\u8bf7\u4f7f\u7528\u901a\u7528\u81ea\u5b9a\u4e49\u6807\u7b7e\u3002"),(0,p.kt)("h2",{id:"inserting-components-\u63d2\u5165\u7ec4\u4ef6"},"Inserting Components \u63d2\u5165\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u7ec4\u4ef6\u662f Origami \u4e2d\u7684\u4e00\u79cd\u56fe\u5c42\u7c7b\u578b\uff0c\u5728\u56fe\u5c42\u5e93\u4e2d\u3002\u8981\u63d2\u5165\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u8bf7\u70b9\u51fb\u5de5\u5177\u680f\u4e0a\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"+"),"\u8fdb\u5165\u4e0b\u62c9\u83dc\u5355\uff0c\u7136\u540e\u70b9\u51fb\u56fe\u5c42\u5e93\uff0c\u6216\u8005\u4f7f\u7528\u5feb\u6377\u952e ",(0,p.kt)("inlineCode",{parentName:"p"},"\u2318+ \u56de\u8f66\u952e"),"\uff0c\u76f4\u63a5\u6253\u5f00\u56fe\u5c42\u5e93\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/adding-components.png",alt:null})),(0,p.kt)("h2",{id:"types-of-components-\u7ec4\u4ef6\u7c7b\u578b"},"Types of Components \u7ec4\u4ef6\u7c7b\u578b"),(0,p.kt)("h3",{id:"platform-components-\u5e73\u53f0\u7ec4\u4ef6"},"Platform Components \u5e73\u53f0\u7ec4\u4ef6"),(0,p.kt)("p",null,"iOS \u548c Android \u539f\u751f\u7ec4\u4ef6\uff0c\u4f8b\u5982\u72b6\u6001\u680f\u3001\u6807\u7b7e\u680f\u3001\u64cd\u4f5c\u5217\u8868\u3001\u8fdb\u5ea6\u52a0\u8f7d\u5668\u7b49\u3002"),(0,p.kt)("p",null,"\u8fd9\u4e9b\u5177\u6709\u5176\u5e73\u53f0\u7684\u5c5e\u6027\u548c\u884c\u4e3a\uff0c\u56e0\u6b64\u60a8\u7684\u539f\u578b\u7528\u8d77\u6765\u662f\u539f\u751f\u7684\u4f53\u9a8c\u3002\u8fd9\u4e9b\u6a21\u5757\u4e5f\u7531 Origami \u56e2\u961f\u7ef4\u62a4\u3002"),(0,p.kt)("h3",{id:"device-components-\u8bbe\u5907\u7ec4\u4ef6"},"Device Components \u8bbe\u5907\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u5141\u8bb8\u60a8\u8bbf\u95ee\u8bbe\u5907\u7279\u5b9a\u5143\u7d20\u7684\u7279\u6b8a\u7ec4\u4ef6\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\u76f8\u673a\uff08\u79f0\u4e3a\u201c\u53d6\u666f\u5668\u201d\uff09\u548c\u6355\u83b7\u5728\u8bbe\u5907\u952e\u76d8\u4e0a\u8f93\u5165\u7684\u6587\u672c\u7684\u6587\u672c\u5b57\u6bb5\u3002"),(0,p.kt)("h3",{id:"document-components-\u6587\u6863\u7ec4\u4ef6"},"Document Components \u6587\u6863\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u5355\u4e2a\u6587\u6863\u4e2d\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002\u8be5\u7ec4\u4ef6\u5c06\u4ec5\u51fa\u73b0\u5728\u8be5\u6587\u6863\u7684\u56fe\u5c42\u5e93\u4e2d\u3002"),(0,p.kt)("h3",{id:"user-library-components-\u7528\u6237\u5e93\u7ec4\u4ef6"},"User Library Components \u7528\u6237\u5e93\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u5df2\u4fdd\u5b58\u5230\u7528\u6237\u5e93\u5e76\u5728\u4efb\u4f55 Origami \u6587\u4ef6\u7684\u56fe\u5c42\u5e93\u4e2d\u53ef\u7528\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),(0,p.kt)("h2",{id:"patch-library-\u7ec4\u4ef6\u5e93"},"Patch Library \u7ec4\u4ef6\u5e93"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u91cd\u590d\u4f7f\u7528\u7684\u6a21\u5757\u7ec4\u4ef6\uff0c\u5c31\u5efa\u8bae\u5c06\u5176\u6dfb\u52a0\u5230\u60a8\u7684\u6a21\u5757\u5e93\u4e2d\u3002"),(0,p.kt)("p",null,"\u9009\u62e9\u6a21\u5757\u7ec4\u4ef6\uff0c\u7136\u540e\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6 > Add to User Library \u6dfb\u52a0\u5230\u7528\u6237\u5e93"),"\u6216",(0,p.kt)("inlineCode",{parentName:"p"}," \u2318\u2325L"),"\u3002\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6\u201d> Show Patch Folder \u663e\u793a\u6a21\u5757\u6587\u4ef6\u5939"),"\u6765\u663e\u793a\u5728\u7535\u8111\u4e0a\u7684\u6a21\u5757\u5e93\u6587\u4ef6\u5939\u3002"),(0,p.kt)("p",null,"\u5f53\u7ec4\u4ef6\u5728\u60a8\u7684\u5e93\u4e2d\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728\u4e0b\u6b21\u542f\u52a8\u6216\u6253\u5f00\u6587\u6863\u65f6\u50cf\u6dfb\u52a0\u5176\u4ed6\u6a21\u5757\u548c\u56fe\u5c42\u4e00\u6837\u6dfb\u52a0\u5b83\u3002"),(0,p.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u8981\u5728\u5f53\u524d\u6587\u6863\u4e2d\u7acb\u5373\u53ef\u7528\uff0c\u9700\u8981\u5173\u95ed\u5e76\u91cd\u65b0\u6253\u5f00\u6587\u6863\u3002"),(0,p.kt)("h3",{id:"updating-components-\u66f4\u65b0\u7ec4\u4ef6"},"Updating Components \u66f4\u65b0\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u8981\u5bf9\u5e93\u4e2d\u7684\u7ec4\u4ef6\u8fdb\u884c\u66f4\u6539\u6216\u6dfb\u52a0\u529f\u80fd\uff0c\u8bf7\u5c06\u6a21\u5757\u6216\u56fe\u5c42\u7ec4\u4ef6\u63d2\u5165\u5230\u60a8\u7684\u6587\u6863\u4e2d\u8fdb\u884c\u66f4\u6539\uff0c\u5e76\u518d\u6b21\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6 > Add to User Library \u6dfb\u52a0\u5230\u7528\u6237\u5e93")," \u3002"),(0,p.kt)("p",null,"\u5173\u95ed\u5e76\u91cd\u65b0\u6253\u5f00\u4f7f\u7528\u6b64\u6a21\u5757\u6216\u7ec4\u4ef6\u7684\u6587\u6863\uff0c\u968f\u540e Origami Studio \u5c06\u63d0\u793a\u60a8\u5c06\u6a21\u5757\u5347\u7ea7\u5230\u65b0\u7248\u672c\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7\u4ece\u5e93\u4e2d\u53d6\u6d88\u94fe\u63a5\uff0c\u5bf9\u4efb\u4f55\u6a21\u5757\u6216\u7ec4\u4ef6\u8fdb\u884c\u4e34\u65f6\u66f4\u6539\u3002\u9009\u62e9\u6a21\u5757\u6216\u56fe\u5c42\u7ec4\u4ef6\uff0c\u7136\u540e\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6 > Unlink Component from Library \u4ece\u5e93\u4e2d\u53d6\u6d88\u94fe\u63a5\u7ec4\u4ef6"),"\u3002"),(0,p.kt)("h3",{id:"platform-specific-components-\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u7ec4\u4ef6"},"Platform-specific Components \u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u8981\u5c06\u6a21\u5757\u6216\u7ec4\u4ef6\u9650\u5236\u7528\u5728\u67d0\u4e2a\u5e73\u53f0\uff0c\u8bf7\u5728\u201c\u6a21\u5757\u4fe1\u606f\u201d\u5f39\u7a97\u7684\u201c\u6a21\u5757\u8bbe\u7f6e\u201d\u9009\u9879\u5361\u4e2d\u6307\u5b9a\u4e00\u4e2a\u5e73\u53f0\u3002\u8fd9\u5c06\u4f7f\u60a8\u7684\u6a21\u5757\u6216\u7ec4\u4ef6\u4ec5\u5728\u5f53\u524d\u8bbe\u5907\u4e0e\u6240\u9009\u5e73\u53f0\u5339\u914d\u65f6\u624d\u53ef\u7528\u3002"),(0,p.kt)("h2",{id:"sharing-a-folder-of-patches-and-components-\u5171\u4eab\u7ec4\u4ef6\u548c\u6a21\u5757\u7684\u6587\u4ef6\u5939"},"Sharing a Folder of Patches and Components \u5171\u4eab\u7ec4\u4ef6\u548c\u6a21\u5757\u7684\u6587\u4ef6\u5939"),(0,p.kt)("p",null,"\u8981\u8ba9\u5176\u4ed6\u56e2\u961f\u6210\u5458\u53ef\u4ee5\u8bbf\u95ee\u7ec4\u4ef6\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u5171\u4eab\u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://dropbox.com/"},"Dropbox"),"  \u6587\u4ef6\u5939\uff0c\u5e76\u5c06\u60a8\u7684\u7ec4\u4ef6\u6dfb\u52a0\u5230\u5176\u4e2d\u3002"),(0,p.kt)("p",null,"\u8981\u5c06\u6587\u6863\u4e2d\u7684\u7ec4\u4ef6\u4fdd\u5b58\u5230\u5171\u4eab\u6587\u4ef6\u5939\uff0c\u8bf7\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Component \u7ec4\u4ef6 > Add to Other Library \u6dfb\u52a0\u5230\u5176\u4ed6\u5e93"),"\u3002"),(0,p.kt)("p",null,"\u56e2\u961f\u6210\u5458\u53ef\u4ee5\u4f7f\u7528 Origami Studio \u504f\u597d\u8bbe\u7f6e\u4e2d\u7cfb\u7edf\u9009\u9879\u5361\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"+"),"\u6309\u94ae\uff0c\u5c06\u6a21\u5757\u6587\u4ef6\u5939\u6dfb\u52a0\u5230\u5e93\u5217\u8868\u4e2d\u4f7f\u7528\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://origami.design/public/images/docs/patchGroups-system.png",alt:null})))}c.isMDXComponent=!0},75767:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/components-1-c587049dc767f7693f5b09dedfbc22bc.png"}}]);