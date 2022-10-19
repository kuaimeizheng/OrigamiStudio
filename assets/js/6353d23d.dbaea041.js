"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[10055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),h=o,c=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(c,r(r({ref:t},p),{},{components:n})):i.createElement(c,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<a;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},r="Creating an Origami System \u7cfb\u7edf\u521b\u5efa",l={unversionedId:"documentation/Workflow/Creating an Origami System",id:"documentation/Workflow/Creating an Origami System",title:"Creating an Origami System \u7cfb\u7edf\u521b\u5efa",description:"\u7cfb\u7edf\u6784\u5efa\u5668\u5141\u8bb8\u60a8\u76f4\u63a5\u5728 Origami \u4e2d\u521b\u5efa\u53ef\u4ee5\u4e0e\u4ed6\u4eba\u5171\u4eab\u7684\u7ec4\u4ef6\u7cfb\u7edf\u3002",source:"@site/docs/documentation/Workflow/Creating an Origami System.md",sourceDirName:"documentation/Workflow",slug:"/documentation/Workflow/Creating an Origami System",permalink:"/OrigamiStudio/docs/documentation/Workflow/Creating an Origami System",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Workflow/Creating an Origami System.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666145039,formattedLastUpdatedAt:"2022\u5e7410\u670819\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Components \u7ec4\u4ef6",permalink:"/OrigamiStudio/docs/documentation/Workflow/Components"},next:{title:"Custom Devices \u81ea\u5b9a\u4e49\u8bbe\u5907",permalink:"/OrigamiStudio/docs/documentation/Workflow/Custom Devices"}},s={},m=[{value:"The Original System Maker \u6700\u521d\u7684Origami\u7cfb\u7edf\u6784\u5efa\u5668",id:"the-original-system-maker-\u6700\u521d\u7684origami\u7cfb\u7edf\u6784\u5efa\u5668",level:2},{value:"The New Origami System Workflow \u65b0\u7684Origami\u7cfb\u7edf\u6d41\u7a0b",id:"the-new-origami-system-workflow-\u65b0\u7684origami\u7cfb\u7edf\u6d41\u7a0b",level:2},{value:"Loading and Sharing an Origami System \u52a0\u8f7d\u548c\u5206\u4eabOrigami\u7cfb\u7edf",id:"loading-and-sharing-an-origami-system-\u52a0\u8f7d\u548c\u5206\u4eaborigami\u7cfb\u7edf",level:2},{value:"Using components from the System \u4f7f\u7528\u7cfb\u7edf\u4e2d\u7684\u7ec4\u4ef6",id:"using-components-from-the-system-\u4f7f\u7528\u7cfb\u7edf\u4e2d\u7684\u7ec4\u4ef6",level:2},{value:"Wrapping up \u7ed3\u5c3e",id:"wrapping-up-\u7ed3\u5c3e",level:2},{value:"Migrating from System Maker to the New Publishing Flow \u4ece\u7cfb\u7edf\u6784\u5efa\u5668\u8fc1\u79fb\u5230\u65b0\u7684\u53d1\u5e03\u6d41\u7a0b",id:"migrating-from-system-maker-to-the-new-publishing-flow-\u4ece\u7cfb\u7edf\u6784\u5efa\u5668\u8fc1\u79fb\u5230\u65b0\u7684\u53d1\u5e03\u6d41\u7a0b",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-an-origami-system-\u7cfb\u7edf\u521b\u5efa"},"Creating an Origami System \u7cfb\u7edf\u521b\u5efa"),(0,o.kt)("p",null,"\u7cfb\u7edf\u6784\u5efa\u5668\u5141\u8bb8\u60a8\u76f4\u63a5\u5728 Origami \u4e2d\u521b\u5efa\u53ef\u4ee5\u4e0e\u4ed6\u4eba\u5171\u4eab\u7684\u7ec4\u4ef6\u7cfb\u7edf\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u5728\u7ebf\u89c6\u9891\u94fe\u63a5\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://player.vimeo.com/video/701724282?portrait=0&title=0&byline=0"},"https://player.vimeo.com/video/701724282?portrait=0&title=0&byline=0")),(0,o.kt)("p",null,"Create and share a library of ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Workflow/Components"},"layer and patch components")," with your team and keep everyone up to date by using an Origami System."),(0,o.kt)("p",null,"\u521b\u5efa\u5e76\u4e0e\u4f60\u7684\u56e2\u961f\u5171\u4eab\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Workflow/Components"},"\u56fe\u5c42\u548c\u6a21\u5757\u7ec4\u4ef6\u5e93")," \uff0c\u5e76\u901a\u8fc7\u4f7f\u7528Origami\u7cfb\u7edf\u8ba9\u6bcf\u4e2a\u4eba\u90fd\u4fdd\u6301\u66f4\u65b0\u3002"),(0,o.kt)("p",null,"In this tutorial, we\u2019ll walk through the steps to create an Origami System and how to publish the system and share it with others."),(0,o.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6b65\u9aa4\u521b\u5efa\u4e00\u4e2aOrigami\u7cfb\u7edf\uff0c\u4ee5\u53ca\u5982\u4f55\u53d1\u5e03\u7cfb\u7edf\uff0c\u5e76\u4e0e\u5176\u4ed6\u4eba\u5171\u4eab\u3002"),(0,o.kt)("p",null,"If you haven\u2019t already, review the ",(0,o.kt)("a",{parentName:"p",href:"https://origami.design/tutorials/smarter-interactions/Create-Component.html"},"Create a Component")," tutorial before starting this one. Download the tutorial starter assets to follow along as we build an Origami System."),(0,o.kt)("p",null,"\u5982\u679c\u8fd8\u6ca1\u6709\uff0c\u5728\u5f00\u59cb\u672c\u6559\u7a0b\u4e4b\u524d\uff0c\u8bf7\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://origami.design/tutorials/smarter-interactions/Create-Component.html"},"\u521b\u5efa\u7ec4\u4ef6")," \u6559\u7a0b\u3002\u4e0b\u8f7d\u6559\u7a0b\u542f\u52a8\u6587\u4ef6\u8ddf\u968f\u6211\u4eec\u5efa\u7acb\u4e00\u4e2aOrigami\u7cfb\u7edf\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"the-original-system-maker-\u6700\u521d\u7684origami\u7cfb\u7edf\u6784\u5efa\u5668"},"The Original System Maker \u6700\u521d\u7684Origami\u7cfb\u7edf\u6784\u5efa\u5668"),(0,o.kt)("p",null,"Previously, when you wanted to create an Origami System, you would first create a System Maker. From there, you would add Origami files that would contain document components that you wished to add to your System."),(0,o.kt)("p",null,"\u4ee5\u524d\uff0c\u5f53\u4f60\u60f3\u8981\u521b\u5efa\u4e00\u4e2aOrigami System\u65f6\uff0c\u4f60\u9996\u5148\u8981\u521b\u5efa\u4e00\u4e2aSystem Maker\u3002\u4ece\u8fd9\u91cc\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u60a8\u5e0c\u671b\u6dfb\u52a0\u5230\u7cfb\u7edf\u4e2d\u7684\u6587\u6863\u7ec4\u4ef6\u7684Origami\u6587\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/system-creation-original.png",alt:"The Original System Maker"})," The Original System Maker"),(0,o.kt)("p",null,"While this worked fine, there were a few shortcomings of the System Maker. It made it possible to have multiple versions of the same component within the system. Which could either lead to conflicts that would not allow the System to be published, or mismatching components between files. Added, with the original System Maker, you would have to manage numerous Origami files. This ended up making building and maintaining a System Library a tedious affair."),(0,o.kt)("p",null,"\u867d\u7136\u8fd9\u6837\u5b50\u5f88\u597d\uff0c\u4f46System Maker\u6709\u4e00\u4e9b\u7f3a\u70b9\u3002\u5b83\u4f7f\u5f97\u5728\u7cfb\u7edf\u4e2d\u6709\u4f1a\u51fa\u73b0\u76f8\u540c\u7ec4\u4ef6\u7684\u591a\u4e2a\u7248\u672c\u3002\u8fd9\u53ef\u80fd\u4f1a\u51fa\u73b0\u51b2\u7a81\u5bfc\u81f4\u4e0d\u5141\u8bb8\u53d1\u5e03\u7cfb\u7edf\uff0c\u6216\u8005\u5bfc\u81f4\u6587\u4ef6\u4e4b\u95f4\u7684\u7ec4\u4ef6\u4e0d\u5339\u914d\u3002\u53e6\u5916\uff0c\u4f7f\u7528\u539f\u59cb\u7684System Maker\uff0c\u4f60\u5fc5\u987b\u7ba1\u7406\u5927\u91cf\u7684Origami\u6587\u4ef6\u3002\u8fd9\u6700\u7ec8\u4f7f\u5f97\u6784\u5efa\u548c\u7ef4\u62a4\u7cfb\u7edf\u5e93\u6210\u4e3a\u4e00\u4ef6\u82e6\u607c\u7684\u4e8b\u60c5\u3002"),(0,o.kt)("h2",{id:"the-new-origami-system-workflow-\u65b0\u7684origami\u7cfb\u7edf\u6d41\u7a0b"},"The New Origami System Workflow \u65b0\u7684Origami\u7cfb\u7edf\u6d41\u7a0b"),(0,o.kt)("p",null,"While a System Maker no longer exists in Origami (Origami still supports legacy System Maker files, but no longer offers the ability to create a new one), creating a Origami System couldn\u2019t be easier. "),(0,o.kt)("p",null,"\u867d\u7136Origami\u4e2d\u4e0d\u518d\u5b58\u5728System Maker \uff0c\u4f46Origami\u4ecd\u7136\u652f\u6301\u9057\u7559\u7684System Maker\u6587\u4ef6\uff0c\u4f46\u4e0d\u518d\u63d0\u4f9b\u521b\u5efa\u65b0\u7684System Maker\u7684\u80fd\u529b\uff0c\u4f46\u521b\u5efa\u4e00\u4e2aOrigami System\u5b9e\u5728\u662f\u592a\u5bb9\u6613\u4e86\u3002"),(0,o.kt)("p",null,"An important note moving forward, the new/current workflow for building an Origami System requires that all of the Components be saved in a single Origami file. This is much different from the past which allowed multiple Origami files to be used to build a System. "),(0,o.kt)("p",null,"\u4e00\u4e2a\u91cd\u8981\u7684\u6ce8\u610f\u4e8b\u9879\u6b63\u5728\u63a8\u8fdb\uff0c\u65b0\u7684/\u5f53\u524d\u7684\u6784\u5efaOrigami\u7cfb\u7edf\u7684\u5de5\u4f5c\u6d41\u8981\u6c42\u6240\u6709\u7ec4\u4ef6\u90fd\u4fdd\u5b58\u5728\u4e00\u4e2aOrigami\u6587\u4ef6\u4e2d\u3002\u8fd9\u4e0e\u8fc7\u53bb\u5141\u8bb8\u4f7f\u7528\u591a\u4e2aOrigami\u6587\u4ef6\u6765\u6784\u5efa\u4e00\u4e2a\u7cfb\u7edf\u6709\u5f88\u5927\u7684\u4e0d\u540c\u3002"),(0,o.kt)("p",null,"For this lesson, we\u2019ll first start from scratch. Let\u2019s start by opening Origami Studio, create a new Origami file and save. We\u2019ll name the file Custom Components. In the Starting package folder, open up all three Origami files (Button, Post, and Profile). Then copy and paste each document component into our Custom Components file."),(0,o.kt)("p",null,"\u8fd9\u4e00\u8bfe\uff0c\u6211\u4eec\u5c06\u4ece\u5934\u5f00\u59cb\u3002\u8ba9\u6211\u4eec\u4ece\u6253\u5f00Origami Studio\u5f00\u59cb\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Origami\u6587\u4ef6\u5e76\u4fdd\u5b58\u3002\u6211\u4eec\u5c06\u6587\u4ef6\u547d\u540d\u4e3aCustom Components\u3002\u5728start package\u6587\u4ef6\u5939\u4e2d\uff0c\u6253\u5f00\u6240\u6709\u4e09\u4e2aOrigami\u6587\u4ef6(Button\u3001Post\u548cProfile)\u3002\u7136\u540e\u590d\u5236\u5e76\u7c98\u8d34\u6bcf\u4e2a\u6587\u6863\u7ec4\u4ef6\u5230\u6211\u4eec\u7684Custom Components\u6587\u4ef6\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/system-creation-workflow-1.png",alt:"img"})),(0,o.kt)("p",null,"With at least one component in our file, a new option appears under the Component tab in the menu bar."),(0,o.kt)("p",null,"\u5728\u6211\u4eec\u7684\u6587\u4ef6\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u7ec4\u4ef6\u65f6\uff0c\u5728\u83dc\u5355\u680f\u7684component\u9009\u9879\u5361\u4e0b\u4f1a\u51fa\u73b0\u4e00\u4e2a\u65b0\u9009\u9879\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/system-creation-workflow-2.png",alt:"img"})),(0,o.kt)("p",null,"Click on Publish Components to open the System Publisher. A new popover appears and here is where you\u2019ll manage what gets and does not get published. This will include all Document Components and Patch Components in your Origami File. Also, you can enter any information about each component, similar to the Component Info window."),(0,o.kt)("p",null,"\u5355\u51fb\u53d1\u5e03\u7ec4\u4ef6\u4ee5\u6253\u5f00\u7cfb\u7edf\u53d1\u5e03\u5668\u3002\u4e00\u4e2a\u65b0\u7684\u5f39\u51fa\u7a97\u53e3\u51fa\u73b0\u4e86\uff0c\u5728\u8fd9\u91cc\u60a8\u5c06\u7ba1\u7406\u4ec0\u4e48\u5f97\u53d1\u5e03\uff0c\u4ec0\u4e48\u4e0d\u53d1\u5e03\u3002\u8fd9\u5c06\u5305\u62ec\u6298\u7eb8\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u6587\u6863\u7ec4\u4ef6\u548c\u6a21\u5757\u7ec4\u4ef6\u3002\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u8f93\u5165\u5173\u4e8e\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u4efb\u4f55\u4fe1\u606f\uff0c\u7c7b\u4f3c\u4e8e\u7ec4\u4ef6\u4fe1\u606f\u7a97\u53e3\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/system-creation-workflow-3.png",alt:"img"})),(0,o.kt)("p",null,"Once you are satisfied with what component(s) are being included and the information for each component is correct, proceed to hit the Continue button. From here, a new window will appear. This is where you\u2019ll enter all of the information about your Component Library."),(0,o.kt)("p",null,"\u4e00\u65e6\u60a8\u5bf9\u6240\u5305\u542b\u7684\u7ec4\u4ef6\u611f\u5230\u6ee1\u610f\uff0c\u5e76\u4e14\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u4fe1\u606f\u90fd\u662f\u6b63\u786e\u7684\uff0c\u5c31\u53ef\u4ee5\u7ee7\u7eed\u70b9\u51fbContinue\u6309\u94ae\u3002\u4ece\u8fd9\u91cc\uff0c\u5c06\u51fa\u73b0\u4e00\u4e2a\u65b0\u7a97\u53e3\u3002\u5728\u8fd9\u91cc\uff0c\u60a8\u5c06\u8bbe\u7f6e\u6709\u5173\u7ec4\u4ef6\u5e93\u7684\u6240\u6709\u4fe1\u606f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/system-creation-workflow-4.png",alt:"img"})),(0,o.kt)("p",null,"The first line is where you\u2019ll enter the Name of your System, so for here, we\u2019ll type in Custom Components. The second line is where you\u2019ll enter your name or the name of the org that will be managing the Library. The last field is where you can enter a brief description about the Origami System. We\u2019ll type in \u201cA collection of regularly used custom components by Your Name.\u201d From here, you can also enter/edit a few additional options by clicking on the Advanced Options tab."),(0,o.kt)("p",null,"\u7b2c\u4e00\u884c\u662f\u8f93\u5165\u7cfb\u7edf\u540d\u79f0\u7684\u5730\u65b9\uff0c\u56e0\u6b64\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u8f93\u5165\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002\u7b2c\u4e8c\u884c\u662f\u4f60\u5c06\u8f93\u5165\u4f60\u7684\u540d\u5b57\u6216\u7ec4\u7ec7\u7684\u540d\u79f0\uff0c\u5c06\u7ba1\u7406\u7ec4\u4ef6\u5e93\u7684\u4f5c\u8005\u4fe1\u606f\u3002\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\u662f\u60a8\u53ef\u4ee5\u8f93\u5165\u5173\u4e8eOrigami\u7cfb\u7edf\u7684\u7b80\u8981\u63cf\u8ff0\u7684\u5730\u65b9\u3002\u6211\u4eec\u5c06\u8f93\u5165\u201c\u4ee5\u60a8\u7684\u540d\u5b57\u547d\u540d\u7684\u5e38\u7528\u7ec4\u4ef6\u96c6\u5408\u201d\u3002\u5728\u8fd9\u91cc\uff0c\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fbAdvanced options\u9009\u9879\u5361\u6765\u8f93\u5165/\u7f16\u8f91\u4e00\u4e9b\u989d\u5916\u7684\u9009\u9879\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/system-creation-workflow-5.png",alt:"img"})),(0,o.kt)("p",null,"The Advanced Options allows you to modify/tailor the System Identifier, set the versioning of the System and set a display Icon that will be displayed next to any component that is used from your published Origami System. Here is also where you will attach any JSON files that handle text styling, color libraries, or data. Let\u2019s add a custom icon for our System. In the Starting folder, there is an image file called \u201c",(0,o.kt)("a",{parentName:"p",href:"mailto:cranestudios_large@2x.png"},"cranestudios_large@2x.png"),"\u201d. Simply click on the image in your Finder and drag and drop it over the image field."),(0,o.kt)("p",null,"\u9ad8\u7ea7\u9009\u9879\u5141\u8bb8\u60a8\u4fee\u6539/\u5b9a\u5236\u7cfb\u7edf\u6807\u8bc6\u7b26\uff0c\u8bbe\u7f6e\u7cfb\u7edf\u7684\u7248\u672c\uff0c\u5e76\u8bbe\u7f6e\u4e00\u4e2a\u663e\u793a\u56fe\u6807\uff0c\u5c06\u663e\u793a\u65c1\u8fb9\u7684\u4efb\u4f55\u7ec4\u4ef6\uff0c\u4f7f\u7528\u4ece\u60a8\u53d1\u5e03\u7684Origami\u7cfb\u7edf\u3002\u8fd9\u91cc\u8fd8\u53ef\u4ee5\u9644\u52a0\u4efb\u4f55\u5904\u7406\u6587\u672c\u6837\u5f0f\u3001\u989c\u8272\u5e93\u6216\u6570\u636e\u7684JSON\u6587\u4ef6\u3002\u8ba9\u6211\u4eec\u4e3a\u7cfb\u7edf\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u56fe\u6807\u3002\u5728Starting\u6587\u4ef6\u5939\u4e2d\uff0c\u6709\u4e00\u4e2a\u540d\u4e3a\u201c",(0,o.kt)("a",{parentName:"p",href:"mailto:cranestudios_large@2x.png"},"cranestudios_large@2x.png"),"\u201d\u7684\u955c\u50cf\u6587\u4ef6\u3002\u53ea\u9700\u5355\u51fb\u60a8\u7684Finder\u4e2d\u7684\u56fe\u50cf\uff0c\u5e76\u5c06\u5176\u62d6\u653e\u5230\u56fe\u50cf\u5b57\u6bb5\u4e0a\u3002"),(0,o.kt)("p",null,"Once all of the fields are filled, hit the Continue button and you will be taken to a finder window to set where you wish to have your published library saved. You can change the name of the system if you wish, by default the system will inherit the name you entered in the Name field in the previous window. Click on Save and you have now published an Origami System."),(0,o.kt)("p",null,"\u4e00\u65e6\u6240\u6709\u5b57\u6bb5\u90fd\u88ab\u586b\u6ee1\uff0c\u70b9\u51fb\u7ee7\u7eed\u6309\u94ae\uff0c\u4f60\u5c06\u88ab\u5e26\u5230\u4e00\u4e2afinder\u7a97\u53e3\uff0c\u8bbe\u7f6e\u4f60\u5e0c\u671b\u5728\u54ea\u91cc\u4fdd\u5b58\u4f60\u53d1\u5e03\u7684\u5e93\u3002\u5982\u679c\u60a8\u613f\u610f\uff0c\u60a8\u53ef\u4ee5\u66f4\u6539\u7cfb\u7edf\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7cfb\u7edf\u5c06\u7ee7\u627f\u60a8\u5728\u4e0a\u4e00\u4e2a\u7a97\u53e3\u7684name\u5b57\u6bb5\u4e2d\u8f93\u5165\u7684\u540d\u79f0\u3002\u70b9\u51fbSave\uff0c\u73b0\u5728\u4f60\u5df2\u7ecf\u53d1\u5e03\u4e86\u4e00\u4e2aOrigami System\u3002"),(0,o.kt)("h2",{id:"loading-and-sharing-an-origami-system-\u52a0\u8f7d\u548c\u5206\u4eaborigami\u7cfb\u7edf"},"Loading and Sharing an Origami System \u52a0\u8f7d\u548c\u5206\u4eabOrigami\u7cfb\u7edf"),(0,o.kt)("p",null,"The first way to load your newly created System into Origami is by double-clicking on the exported file. This will automatically add it to Origami. The next way is to load it in directly via the Preferences pane. In the System Bar menu, Navigate to Origami Studio > Preferences. A pop-up menu will appear and from here, navigate to the Components Tab."),(0,o.kt)("p",null,"\u5c06\u65b0\u521b\u5efa\u7684System\u52a0\u8f7d\u5230Origami\u4e2d\u7684\u7b2c\u4e00\u79cd\u65b9\u6cd5\u662f\u53cc\u51fb\u5bfc\u51fa\u7684\u6587\u4ef6\u3002\u8fd9\u5c06\u81ea\u52a8\u6dfb\u52a0\u5230\u6298\u7eb8\u3002\u4e0b\u4e00\u79cd\u65b9\u6cd5\u662f\u901a\u8fc7Preferences\u7a97\u683c\u76f4\u63a5\u52a0\u8f7d\u5b83\u3002\u5728\u7cfb\u7edf\u680f\u83dc\u5355\u4e2d\uff0c\u5bfc\u822a\u5230Origami Studio ",">","\u504f\u597d\u3002\u5c06\u51fa\u73b0\u4e00\u4e2a\u5f39\u51fa\u83dc\u5355\uff0c\u4ece\u8fd9\u91cc\u5bfc\u822a\u5230Components\u9009\u9879\u5361\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/system-creation-adding.png",alt:"img"})),(0,o.kt)("p",null,"Click on the + symbol in the lower right corner, and then navigate to where the System you want to load into Origami resides. Select the file and then click Open."),(0,o.kt)("p",null,"\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684+\u7b26\u53f7\uff0c\u7136\u540e\u5bfc\u822a\u5230\u4f60\u60f3\u8981\u52a0\u8f7d\u5230Origami\u4e2d\u7684\u7cfb\u7edf\u6240\u5728\u7684\u4f4d\u7f6e\u3002\u9009\u62e9\u6587\u4ef6\uff0c\u7136\u540e\u5355\u51fbOpen\u3002"),(0,o.kt)("p",null,"If you plan on sharing the system with others, we\u2019d recommend publishing the system on a shared folder or a file sharing service like ",(0,o.kt)("a",{parentName:"p",href:"https://dropbox.com/"},"Dropbox")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/drive/"},"Google Drive"),". When the system is installed from a shared location, everyone will receive updates to the system, and existing documents with older components will be prompted to upgrade."),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4ed6\u4eba\u5171\u4eab\u7cfb\u7edf\uff0c\u6211\u4eec\u5efa\u8bae\u5c06\u7cfb\u7edf\u53d1\u5e03\u5728\u5171\u4eab\u6587\u4ef6\u5939\u6216\u6587\u4ef6\u5171\u4eab\u670d\u52a1\u4e0a\uff0c\u6bd4\u5982",(0,o.kt)("a",{parentName:"p",href:"https://dropbox.com/"},"Dropbox")," \u6216 ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/drive/"},"\u8c37\u6b4cDrive")," \u3002\u5f53\u7cfb\u7edf\u4ece\u5171\u4eab\u4f4d\u7f6e\u5b89\u88c5\u65f6\uff0c\u6bcf\u4e2a\u4eba\u90fd\u5c06\u6536\u5230\u5bf9\u7cfb\u7edf\u7684\u66f4\u65b0\uff0c\u5e76\u4e14\u5305\u542b\u8f83\u65e7\u7ec4\u4ef6\u7684\u73b0\u6709\u6587\u6863\u5c06\u88ab\u63d0\u793a\u8fdb\u884c\u5347\u7ea7\u3002"),(0,o.kt)("h2",{id:"using-components-from-the-system-\u4f7f\u7528\u7cfb\u7edf\u4e2d\u7684\u7ec4\u4ef6"},"Using components from the System \u4f7f\u7528\u7cfb\u7edf\u4e2d\u7684\u7ec4\u4ef6"),(0,o.kt)("p",null,"Let\u2019s check out our newly installed component by creating a new document and adding the new system Button component."),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u6863\u5e76\u6dfb\u52a0\u65b0\u7684\u7cfb\u7edf\u6309\u94ae\u7ec4\u4ef6\u6765\u68c0\u67e5\u65b0\u5b89\u88c5\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"First, quit and re-open Origami Studio to reload the libraries with our new components and open a new document."),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u9000\u51fa\u5e76\u91cd\u65b0\u6253\u5f00Origami Studio\uff0c\u91cd\u65b0\u52a0\u8f7d\u5305\u542b\u65b0\u7ec4\u4ef6\u7684\u5e93\uff0c\u5e76\u6253\u5f00\u4e00\u4e2a\u65b0\u6587\u6863\u3002"),(0,o.kt)("p",null,"Open the layer library and type Custom Components to search for our new system components. Select the Button component and press enter to add it to the layer list."),(0,o.kt)("p",null,"\u6253\u5f00\u56fe\u5c42\u5e93\u5e76\u8f93\u5165Custom Components\u6765\u641c\u7d22\u6211\u4eec\u7684\u65b0\u7cfb\u7edf\u7ec4\u4ef6\u3002\u9009\u62e9Button\u7ec4\u4ef6\u5e76\u6309enter\u5c06\u5176\u6dfb\u52a0\u5230\u56fe\u5c42\u5217\u8868\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/system-creation-workflow-using-components.png",alt:"img"})),(0,o.kt)("h2",{id:"wrapping-up-\u7ed3\u5c3e"},"Wrapping up \u7ed3\u5c3e"),(0,o.kt)("p",null,"And that\u2019s it, we have created our own System that can be easily distributed to other users. To add more components to the system, just build the new component within the same Origami file and re-publish the system."),(0,o.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\uff0c\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u6211\u4eec\u81ea\u5df1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5206\u4eab\u7ed9\u5176\u4ed6\u7528\u6237\u3002\u8981\u5411\u7cfb\u7edf\u6dfb\u52a0\u66f4\u591a\u7ec4\u4ef6\uff0c\u53ea\u9700\u5728\u540c\u4e00\u4e2aOrigami\u6587\u4ef6\u4e2d\u6784\u5efa\u65b0\u7ec4\u4ef6\uff0c\u7136\u540e\u91cd\u65b0\u53d1\u5e03\u7cfb\u7edf\u3002"),(0,o.kt)("p",null,"We can also add patch components to Origami systems to distribute along with layer components. Visit the ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Workflow/Components"},"Component")," section in the documentation to find out more."),(0,o.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u5c06\u6a21\u5757\u7ec4\u4ef6\u6dfb\u52a0\u5230Origami\u7cfb\u7edf\u4e2d\uff0c\u4e0e\u56fe\u5c42\u7ec4\u4ef6\u4e00\u8d77\u5206\u4eab\u3002\u8bbf\u95ee\u6587\u6863\u4e2d\u7684",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Workflow/Components"},"Component"),"\u90e8\u5206\u4ee5\u83b7\u5f97\u66f4\u591a\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"migrating-from-system-maker-to-the-new-publishing-flow-\u4ece\u7cfb\u7edf\u6784\u5efa\u5668\u8fc1\u79fb\u5230\u65b0\u7684\u53d1\u5e03\u6d41\u7a0b"},"Migrating from System Maker to the New Publishing Flow \u4ece\u7cfb\u7edf\u6784\u5efa\u5668\u8fc1\u79fb\u5230\u65b0\u7684\u53d1\u5e03\u6d41\u7a0b"),(0,o.kt)("p",null,"If you have a previously built Origami System that utilizes the old System Maker, upgrading to the new method is fairly straight-forward, but there are some caveats. If all of your layer and patch components are already in a single Origami file, you\u2019re good to go and can go straight to Components > Publish Components and fill out the corresponding fields."),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u4f7f\u7528\u65e7System Maker\u7684Origami System\uff0c\u5347\u7ea7\u5230\u65b0\u65b9\u6cd5\u662f\u76f8\u5f53\u7b80\u5355\u7684\uff0c\u4f46\u6709\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u3002\u5982\u679c\u4f60\u6240\u6709\u7684\u56fe\u5c42\u548c\u6a21\u5757\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2aOrigami\u6587\u4ef6\u4e2d\uff0c\u4f60\u5c31\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165components ",">","Publish Components \u5e76\u586b\u5199\u76f8\u5e94\u7684\u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"If the components are spread out through multiple files you\u2019ll need to copy and paste the components into a single Origami file. We suggest starting with the larger components that may contain other layer and/or patch components (subcomponents). "),(0,o.kt)("p",null,"\u5982\u679c\u7ec4\u4ef6\u5206\u5e03\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5219\u9700\u8981\u5c06\u7ec4\u4ef6\u590d\u5236\u5e76\u7c98\u8d34\u5230\u5355\u4e2aOrigami\u6587\u4ef6\u4e2d\u3002\u6211\u4eec\u5efa\u8bae\u4ece\u53ef\u80fd\u5305\u542b\u5176\u4ed6\u56fe\u5c42\u548c/\u6216\u6a21\u5757\u7ec4\u4ef6(\u5b50\u7ec4\u4ef6)\u7684\u8f83\u5927\u7ec4\u4ef6\u5f00\u59cb\u3002"),(0,o.kt)("p",null,"This will help mitigate any versioning issues with components and hopefully any breakage of a component. This will also help cutdown on the amount of copying and pasting you\u2019ll need to do. Once you\u2019ve finished copying and pasting all of the components into the new file, review all the components and double-check there are no duplicates."),(0,o.kt)("p",null,"\u8fd9\u5c06\u6709\u52a9\u4e8e\u7f13\u89e3\u7ec4\u4ef6\u7684\u4efb\u4f55\u7248\u672c\u95ee\u9898\uff0c\u5e0c\u671b\u8fd8\u80fd\u7f13\u89e3\u7ec4\u4ef6\u7684\u4efb\u4f55\u7834\u574f\u3002\u8fd9\u4e5f\u5c06\u6709\u52a9\u4e8e\u51cf\u5c11\u4f60\u9700\u8981\u505a\u7684\u590d\u5236\u548c\u7c98\u8d34\u7684\u6570\u91cf\u3002\u4e00\u65e6\u60a8\u5c06\u6240\u6709\u7ec4\u4ef6\u590d\u5236\u5e76\u7c98\u8d34\u5230\u65b0\u6587\u4ef6\u4e2d\uff0c\u68c0\u67e5\u6240\u6709\u7ec4\u4ef6\u5e76\u518d\u6b21\u68c0\u67e5\u662f\u5426\u6709\u91cd\u590d\u7684\u5185\u5bb9\u3002"),(0,o.kt)("p",null," If there are duplicates, and the component is used in several other components, unfortunately, you\u2019ll need to decide which is the version of the component you wish to keep. Rename the duplicate component to something that is easily identifiable (ex. Component Name (dup)), and then inspect all of the components that may contain the duplicate component(s). "),(0,o.kt)("p",null,"\u5982\u679c\u6709\u91cd\u590d\u7684\u7ec4\u4ef6\uff0c\u5e76\u4e14\u8be5\u7ec4\u4ef6\u5728\u5176\u4ed6\u51e0\u4e2a\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4e0d\u5e78\u7684\u662f\uff0c\u60a8\u9700\u8981\u51b3\u5b9a\u54ea\u4e00\u4e2a\u662f\u60a8\u5e0c\u671b\u4fdd\u7559\u7684\u7ec4\u4ef6\u7248\u672c\u3002\u5c06\u91cd\u590d\u7684\u7ec4\u4ef6\u91cd\u547d\u540d\u4e3a\u5bb9\u6613\u8bc6\u522b\u7684\u540d\u79f0(\u4f8b\u5982:\u7ec4\u4ef6\u540d\u79f0(dup))\uff0c\u7136\u540e\u68c0\u67e5\u6240\u6709\u53ef\u80fd\u5305\u542b\u91cd\u590d\u7ec4\u4ef6\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"If the duplicate exists inside of a component, you will need to replace it with the version that you wish to keep and re-attach it to any linkage that the duplicate was attached to previously in the Patch Graph. "),(0,o.kt)("p",null,"\u5982\u679c\u526f\u672c\u5b58\u5728\u4e8e\u7ec4\u4ef6\u5185\u90e8\uff0c\u60a8\u5c06\u9700\u8981\u7528\u60a8\u5e0c\u671b\u4fdd\u7559\u7684\u7248\u672c\u66ff\u6362\u5b83\uff0c\u5e76\u91cd\u65b0\u5c06\u5b83\u9644\u52a0\u5230\u8865\u4e01\u56fe\u4e2d\u5148\u524d\u9644\u52a0\u7684\u526f\u672c\u7684\u4efb\u4f55\u94fe\u63a5\u4e0a\u3002"),(0,o.kt)("p",null,"Once the migration is complete and you are satisfied with the state of the components, proceed onto the publishing flow."),(0,o.kt)("p",null,"\u4e00\u65e6\u8fc1\u79fb\u5b8c\u6210\uff0c\u5e76\u4e14\u60a8\u5bf9\u7ec4\u4ef6\u7684\u72b6\u6001\u611f\u5230\u6ee1\u610f\uff0c\u5c31\u53ef\u4ee5\u7ee7\u7eed\u53d1\u5e03\u6d41\u7a0b\u3002"))}u.isMDXComponent=!0}}]);