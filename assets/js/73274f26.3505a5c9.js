"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[73893],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var l=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=l.createContext({}),u=function(e){var t=l.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||r;return o?l.createElement(k,p(p({ref:t},c),{},{components:o})):l.createElement(k,p({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,p=new Array(r);p[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,p[1]=a;for(var u=2;u<r;u++)p[u]=o[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,o)}d.displayName="MDXCreateElement"},38869:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var l=o(87462),n=(o(67294),o(3905));const r={title:"Loop Select \u5faa\u73af\u9009\u62e9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},p="Loop Select \u5faa\u73af\u9009\u62e9",a={unversionedId:"documentation/Loops/Loop Select",id:"documentation/Loops/Loop Select",title:"Loop Select \u5faa\u73af\u9009\u62e9",description:"---",source:"@site/docs/documentation/Loops/Loop Select.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Select",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Select",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Select.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Loop Select \u5faa\u73af\u9009\u62e9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop Reverse \u5faa\u73af\u53cd\u8f6c",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Reverse"},next:{title:"Loop Shuffle \u5faa\u73af\u968f\u673a\u6392\u5e8f",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Shuffle"}},i={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Index Loop \u5faa\u73af\u7d22\u5f15",id:"index-loop-\u5faa\u73af\u7d22\u5f15",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loop-select-\u5faa\u73af\u9009\u62e9"},"Loop Select \u5faa\u73af\u9009\u62e9"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Select one or more values from a loop."),(0,n.kt)("p",null,"\u4ece\u5faa\u73af\u4e2d\u9009\u62e9\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u3002"),(0,n.kt)("p",null,"Example A: Select one value."),(0,n.kt)("p",null,"\u793a\u4f8b A\uff1a\u9009\u62e9\u4e00\u4e2a\u503c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(40539).Z,width:"240",height:"618"})),(0,n.kt)("p",null,"Example B: Select and reorder multiple values."),(0,n.kt)("p",null,"\u793a\u4f8b B\uff1a\u9009\u62e9\u5e76\u91cd\u65b0\u6392\u5e8f\u591a\u4e2a\u503c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(19317).Z,width:"220",height:"787"})),(0,n.kt)("p",null,"Right-click the patch to change the expected type of the Input loop."),(0,n.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539 \u8f93\u5165\u5faa\u73af \u7684\u7c7b\u578b\u3002"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch loop"},(0,n.kt)("h3",null,"Loop Select"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Input",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"Index Loop",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Loop",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"Index",(0,n.kt)("span",null,"0"))))),(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("p",null,"A loop of values."),(0,n.kt)("p",null,"\u5305\u542b\u503c\u7684\u5faa\u73af\u3002"),(0,n.kt)("h3",{id:"index-loop-\u5faa\u73af\u7d22\u5f15"},"Index Loop \u5faa\u73af\u7d22\u5f15"),(0,n.kt)("p",null,"An index of the value to select. By default, the index is 0. Select multiple values using a loop of indices."),(0,n.kt)("p",null,"\u8981\u9009\u62e9\u503c\u7684\u7d22\u5f15\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7d22\u5f15\u4e3a 0\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u7d22\u5f15\u5faa\u73af\u9009\u62e9\u591a\u4e2a\u503c\u3002"),(0,n.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,n.kt)("p",null,"A value (or loop of values) from the loop at the selected index (or indices)."),(0,n.kt)("p",null,"\u4ece\u5faa\u73af\u6240\u9009\u7d22\u5f15\u5904(\u6216\u591a\u4e2a\u7d22\u5f15\u5904)\u83b7\u5f97\u7684\u4e00\u4e2a\u503c(\u6216\u503c\u7684\u5faa\u73af)\u3002"),(0,n.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,n.kt)("p",null,"The new index or set of indices to related to the output loop."),(0,n.kt)("p",null,"\u4e0e\u8f93\u51fa\u5faa\u73af\u76f8\u5173\u7684\u65b0\u7d22\u5f15\u6216\u4e00\u7ec4\u7d22\u5f15\u3002"),(0,n.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,n.kt)("p",null,"Anchor"),(0,n.kt)("p",null,"Bezier"),(0,n.kt)("p",null,"Boolean"),(0,n.kt)("p",null,"Color"),(0,n.kt)("p",null,"Edges"),(0,n.kt)("p",null,"Image"),(0,n.kt)("p",null,"Index"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("p",null,"Layer"),(0,n.kt)("p",null,"Number"),(0,n.kt)("p",null,"Photo Library Asset"),(0,n.kt)("p",null,"Point 3D"),(0,n.kt)("p",null,"Position"),(0,n.kt)("p",null,"Progress"),(0,n.kt)("p",null,"Pulse"),(0,n.kt)("p",null,"Size"),(0,n.kt)("p",null,"Size Axis"),(0,n.kt)("p",null,"Sound"),(0,n.kt)("p",null,"Space Axis"),(0,n.kt)("p",null,"Spacing"),(0,n.kt)("p",null,"Text"),(0,n.kt)("p",null,"Video"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")))}s.isMDXComponent=!0},40539:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/loop-select-1-db96c2ecdcf3e803ba51a9fe25445a88.png"},19317:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/loop-select-2-e586ac76611d90b1af652ae46bdd6af0.png"}}]);