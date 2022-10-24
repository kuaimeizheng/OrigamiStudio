"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[87288],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=i.createContext({}),s=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return i.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(f,o(o({ref:e},p),{},{components:n})):i.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9839:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:5},o="Transition \u8fc7\u6e21",l={unversionedId:"documentation/Utility/Transition",id:"documentation/Utility/Transition",title:"Transition \u8fc7\u6e21",description:"Convert a value between 0 and 1 (often a progress value) to a value between a new range defined by the start and end values.",source:"@site/docs/documentation/Utility/Transition.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Transition",permalink:"/OrigamiStudio/docs/documentation/Utility/Transition",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Transition.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666622342,formattedLastUpdatedAt:"2022\u5e7410\u670824\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Time \u65f6\u95f4",permalink:"/OrigamiStudio/docs/documentation/Utility/Time"},next:{title:"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Variable Broadcaster"}},u={},s=[{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"End \u7ed3\u675f",id:"end-\u7ed3\u675f",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:s};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transition-\u8fc7\u6e21"},"Transition \u8fc7\u6e21"),(0,a.kt)("p",null,"Convert a value between 0 and 1 (often a progress value) to a value between a new range defined by the start and end values."),(0,a.kt)("p",null,"\u5c06 0 \u548c 1 \u4e4b\u95f4\u7684\u503c\uff08\u901a\u5e38\u662f\u8fdb\u5ea6\u503c\uff09\u8f6c\u6362\u4e3a\u7531\u5f00\u59cb\u503c\u548c\u7ed3\u675f\u503c\u5b9a\u4e49\u7684\u65b0\u8303\u56f4\u4e4b\u95f4\u7684\u503c\u3002"),(0,a.kt)("p",null,"For example, if the start value is 50 and the end value is 100:"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u5f00\u59cb\u503c\u4e3a 50\uff0c\u7ed3\u675f\u503c\u4e3a 100\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a progress of 0 will output 50 0 \u8fdb\u5ea6\u65f6\u5c06\u8f93\u51fa50"),(0,a.kt)("li",{parentName:"ul"},"a progress of .5 will output 75 0.5 \u8fdb\u5ea6\u65f6\u5c06\u8f93\u51fa75"),(0,a.kt)("li",{parentName:"ul"},"a progress of 1 will output 100 1 \u8fdb\u5ea6\u65f6\u5c06\u8f93\u51fa100")),(0,a.kt)("p",null,"The number wraps when progress exceeds the 0 to 1 range:"),(0,a.kt)("p",null,"\u5f53\u8fdb\u5ea6\u8d85\u8fc70\u52301\u8303\u56f4\u65f6\uff0c\u6570\u5b57\u4f1a\u81ea\u52a8\u6362\u884c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a progress of -.5 will output 25 -.5\u8fdb\u5ea6\u65f6\u5c06\u8f93\u51fa25"),(0,a.kt)("li",{parentName:"ul"},"a progress of 2 will output 150 2\u8fdb\u5ea6\u65f6\u5c06\u8f93\u51fa150")),(0,a.kt)("p",null,"Convert a number from any range to 0 to 1 with ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Progress"},"Progress"),"."),(0,a.kt)("p",null,"\u4f7f\u7528 Progress \u53ef\u4ee5\u5c06\u4efb\u610f\u8303\u56f4\u5185\u7684\u6570\u503c\u8f6c\u6362\u4e3a 0 \u5230 1\u3002"),(0,a.kt)("p",null,"Often used with a ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch")," and ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop"),"/",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation"),". See ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/Animations"},"Animation Basics")," for more information."),(0,a.kt)("p",null,"Right-click to change the type (ex: number, position, color)."),(0,a.kt)("p",null,"\u901a\u5e38\u4e0e Switch \u548c Pop/Classic Animation \u4f7f\u7528\u3002\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 Animation Basics\u3002"),(0,a.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4ee5\u66f4\u6539\u9700\u8981\u8f6c\u6362\u7684\u7c7b\u578b\uff0c"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("p",null,"Anchor \u951a\u70b9"),(0,a.kt)("p",null,"Color \u989c\u8272"),(0,a.kt)("p",null,"Index \u7d22\u5f15"),(0,a.kt)("p",null,"Number \u6570\u503c"),(0,a.kt)("p",null,"Point 3D 3D\u70b9"),(0,a.kt)("p",null,"Position \u4f4d\u7f6e"),(0,a.kt)("p",null,"Progress"),(0,a.kt)("p",null,"Size \u5927\u5c0f"),(0,a.kt)("p",null,"Size Axis"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(7025).Z,width:"1330",height:"274"})),(0,a.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,a.kt)("p",null,"A progress value. See ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/Animations"},"Animation Basics")," for more information."),(0,a.kt)("p",null,"\u8fdb\u5ea6\u503c\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 Animation Basics"),(0,a.kt)("h3",{id:"start-\u5f00\u59cb"},"Start \u5f00\u59cb"),(0,a.kt)("p",null,"The start value of the new range."),(0,a.kt)("p",null,"\u65b0\u8303\u56f4\u7684\u5f00\u59cb\u503c\uff08\u6700\u5c0f\u503c\uff09\u3002"),(0,a.kt)("h3",{id:"end-\u7ed3\u675f"},"End \u7ed3\u675f"),(0,a.kt)("p",null,"The end value of the new range."),(0,a.kt)("p",null,"\u65b0\u8303\u56f4\u7684\u7ed3\u675f\u503c\uff08\u6700\u5927\u503c\uff09\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The converted value."),(0,a.kt)("p",null,"\u8f6c\u6362\u540e\u7684\u503c\u3002"),(0,a.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(3155).Z,width:"104",height:"252"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Clip"},"Clip \u88c1\u526a")))}c.isMDXComponent=!0},3155:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/transition-item-a07f262fdb22aeda197cc4ab273f5e75.png"},7025:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/transition-bf1390effb6085c5599b73a9d66d115c.png"}}]);