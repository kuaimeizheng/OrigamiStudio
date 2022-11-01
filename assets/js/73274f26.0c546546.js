"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[73893],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(o),m=l,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,a=new Array(r);a[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},38869:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(87462),l=(o(67294),o(3905));const r={sidebar_position:5},a="Loop Select \u5faa\u73af\u9009\u62e9",i={unversionedId:"documentation/Loops/Loop Select",id:"documentation/Loops/Loop Select",title:"Loop Select \u5faa\u73af\u9009\u62e9",description:"Select one or more values from a loop.",source:"@site/docs/documentation/Loops/Loop Select.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Select",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Select",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Select.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667316201,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Loop Reverse \u5faa\u73af\u53cd\u8f6c",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Reverse"},next:{title:"Loop Shuffle \u73af\u968f\u673a\u6392\u5e8f",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Shuffle"}},p={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Index Loop \u5faa\u73af\u7d22\u5f15",id:"index-loop-\u5faa\u73af\u7d22\u5f15",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"loop-select-\u5faa\u73af\u9009\u62e9"},"Loop Select \u5faa\u73af\u9009\u62e9"),(0,l.kt)("p",null,"Select one or more values from a loop."),(0,l.kt)("p",null,"\u4ece\u5faa\u73af\u4e2d\u9009\u62e9\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u3002"),(0,l.kt)("p",null,"Example A: Select one value."),(0,l.kt)("p",null,"\u793a\u4f8b A\uff1a\u9009\u62e9\u4e00\u4e2a\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:o(40539).Z,width:"240",height:"618"})),(0,l.kt)("p",null,"Example B: Select and reorder multiple values."),(0,l.kt)("p",null,"\u793a\u4f8b B\uff1a\u9009\u62e9\u5e76\u91cd\u65b0\u6392\u5e8f\u591a\u4e2a\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:o(19317).Z,width:"220",height:"787"})),(0,l.kt)("p",null,"Right-click the patch to change the expected type of the Input loop."),(0,l.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539 \u8f93\u5165\u5faa\u73af \u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:o(40493).Z,width:"1538",height:"244"})),(0,l.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,l.kt)("p",null,"A loop of values."),(0,l.kt)("p",null,"\u5305\u542b\u503c\u7684\u5faa\u73af\u3002"),(0,l.kt)("h3",{id:"index-loop-\u5faa\u73af\u7d22\u5f15"},"Index Loop \u5faa\u73af\u7d22\u5f15"),(0,l.kt)("p",null,"An index of the value to select. By default, the index is 0. Select multiple values using a loop of indices."),(0,l.kt)("p",null,"\u8981\u9009\u62e9\u503c\u7684\u7d22\u5f15\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7d22\u5f15\u4e3a 0\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u7d22\u5f15\u5faa\u73af\u9009\u62e9\u591a\u4e2a\u503c\u3002"),(0,l.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,l.kt)("p",null,"A value (or loop of values) from the loop at the selected index (or indices)."),(0,l.kt)("p",null,"\u4ece\u5faa\u73af\u6240\u9009\u7d22\u5f15\u5904(\u6216\u591a\u4e2a\u7d22\u5f15\u5904)\u83b7\u5f97\u7684\u4e00\u4e2a\u503c(\u6216\u503c\u7684\u5faa\u73af)\u3002"),(0,l.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,l.kt)("p",null,"The new index or set of indices to related to the output loop."),(0,l.kt)("p",null,"\u4e0e\u8f93\u51fa\u5faa\u73af\u76f8\u5173\u7684\u65b0\u7d22\u5f15\u6216\u4e00\u7ec4\u7d22\u5f15\u3002"),(0,l.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:o(61116).Z,width:"156",height:"494"})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")))}d.isMDXComponent=!0},40539:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-select-1-db96c2ecdcf3e803ba51a9fe25445a88.png"},19317:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-select-2-e586ac76611d90b1af652ae46bdd6af0.png"},61116:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-select-item-f1ab44d5c16cef5a631d696e9634b88b.png"},40493:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-select-54d40f22c03ac7941e44265f46d0199d.png"}}]);