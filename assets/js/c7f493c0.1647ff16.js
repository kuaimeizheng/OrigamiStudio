"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[48634],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(o),m=l,k=c["".concat(i,".").concat(m)]||c[m]||s[m]||r;return o?n.createElement(k,p(p({ref:t},d),{},{components:o})):n.createElement(k,p({ref:t},d))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,p=new Array(r);p[0]=c;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,p[1]=a;for(var u=2;u<r;u++)p[u]=o[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},71116:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=o(87462),l=(o(67294),o(3905));const r={title:"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",sidebar_position:30,last_update:{author:"\u84af\u7f8e\u653f"}},p="Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",a={unversionedId:"documentation/Loops/Loop Dedupe",id:"documentation/Loops/Loop Dedupe",title:"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",description:"---",source:"@site/docs/documentation/Loops/Loop Dedupe.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Dedupe",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Dedupe",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Dedupe.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:30,frontMatter:{title:"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",sidebar_position:30,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop Count \u5faa\u73af\u6570\u91cf",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Count"},next:{title:"Loop Filter \u5faa\u73af\u7b5b\u9009",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Filter"}},i={},u=[{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af-1",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7684\u7c7b\u578b",id:"\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function s(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"loop-dedupe-\u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664"},"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Remove duplicate values in a loop."),(0,l.kt)("p",null,"\u5220\u9664\u5faa\u73af\u4e2d\u7684\u91cd\u590d\u503c\u3002"),(0,l.kt)("p",null,"Right-click to change the type of the loop."),(0,l.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4ee5\u66f4\u6539\u5faa\u73af\u7684\u7c7b\u578b\u3002"),(0,l.kt)("div",{className:"patch-container"},(0,l.kt)("div",{className:"patch loop"},(0,l.kt)("h3",null,"Loop Dedupe"),(0,l.kt)("ul",{className:"inputs"},(0,l.kt)("li",null,"Loop",(0,l.kt)("span",null,"0"))),(0,l.kt)("ul",{className:"outputs"},(0,l.kt)("li",null,"Loop",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Index",(0,l.kt)("span",null,"0"))))),(0,l.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,l.kt)("p",null,"A loop to remove duplicate values from."),(0,l.kt)("p",null,"\u9700\u8981\u5220\u9664\u91cd\u590d\u6570\u636e\u7684\u5faa\u73af\u3002"),(0,l.kt)("h3",{id:"loop-\u5faa\u73af-1"},"Loop \u5faa\u73af"),(0,l.kt)("p",null,"The resulting loop without duplicated values."),(0,l.kt)("p",null,"\u6ca1\u6709\u91cd\u590d\u6570\u636e\u7684\u5faa\u73af\u3002"),(0,l.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,l.kt)("p",null,"A loop of the indices for the output values. ex: ","[0, 1, 2]"),(0,l.kt)("p",null,"\u8f93\u51fa\u6570\u636e\u7684\u7d22\u5f15\u5faa\u73af\u3002\u4f8b\u5982\uff1a","[0, 1, 2]"),(0,l.kt)("h3",{id:"\u652f\u6301\u7684\u7c7b\u578b"},"\u652f\u6301\u7684\u7c7b\u578b"),(0,l.kt)("p",null,"Anchor"),(0,l.kt)("p",null,"Bezier"),(0,l.kt)("p",null,"Boolean"),(0,l.kt)("p",null,"Color"),(0,l.kt)("p",null,"Edges"),(0,l.kt)("p",null,"Image"),(0,l.kt)("p",null,"Index"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("p",null,"Layer"),(0,l.kt)("p",null,"Number"),(0,l.kt)("p",null,"Photo Library Asset"),(0,l.kt)("p",null,"Point 3D"),(0,l.kt)("p",null,"Position"),(0,l.kt)("p",null,"Progress"),(0,l.kt)("p",null,"Pulse"),(0,l.kt)("p",null,"Size"),(0,l.kt)("p",null,"Size Axis"),(0,l.kt)("p",null,"Sound"),(0,l.kt)("p",null,"Space Axis"),(0,l.kt)("p",null,"Spacing"),(0,l.kt)("p",null,"Text"),(0,l.kt)("p",null,"Video"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Remove"},"Loop Remove \u5faa\u73af\u79fb\u9664")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Remove%20Last"},"Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Reverse"},"Loop Reverse \u5faa\u73af\u53cd\u8f6c")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Shuffle"},"Loop Shuffle \u5faa\u73af\u968f\u673a\u6392\u5e8f")))}s.isMDXComponent=!0}}]);