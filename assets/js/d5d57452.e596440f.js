"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4776],{3905:(t,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>m});var n=o(67294);function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,l=function(t,e){if(null==t)return{};var o,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(l[o]=t[o]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}var u=n.createContext({}),p=function(t){var e=n.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},d=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var o=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(o),m=l,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||r;return o?n.createElement(k,a(a({ref:e},d),{},{components:o})):n.createElement(k,a({ref:e},d))}));function m(t,e){var o=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=o.length,a=new Array(r);a[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,a[1]=i;for(var p=2;p<r;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},17836:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(87462),l=(o(67294),o(3905));const r={title:"Loop Builder \u5faa\u73af\u751f\u6210\u5668",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},a="Loop Builder \u5faa\u73af\u751f\u6210\u5668",i={unversionedId:"documentation/Loops/Loop Builder",id:"documentation/Loops/Loop Builder",title:"Loop Builder \u5faa\u73af\u751f\u6210\u5668",description:"---",source:"@site/docs/documentation/Loops/Loop Builder.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Builder",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Builder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Builder.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:20,frontMatter:{title:"Loop Builder \u5faa\u73af\u751f\u6210\u5668",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop \u5faa\u73af",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop"},next:{title:"Loop Count \u5faa\u73af\u6570\u91cf",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Count"}},u={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-2",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Loop \u8f93\u51fa",id:"loop-\u8f93\u51fa",level:3},{value:"\u5faa\u73af\u652f\u6301\u7684\u7c7b\u578b",id:"\u5faa\u73af\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function s(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"loop-builder-\u5faa\u73af\u751f\u6210\u5668"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Create a loop of any value (ex: text, color, image)."),(0,l.kt)("p",null,"Right-click the patch to change the type, or add additional values."),(0,l.kt)("p",null,"To learn more about loops, see the ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Loop"},"Introduction to Loops"),"."),(0,l.kt)("p",null,"\u7ed9\u5faa\u73af\u4e2d\u7684\u5185\u5bb9\u521b\u5efa\u4e0d\u540c\u7684\u503c\uff08\u4f8b\u5982\uff1a\u540c\u4e00\u6837\u5f0f\u7684\u901a\u77e5\u5217\u8868\u91cc\u4e0d\u540c\u7684\u5934\u50cf\u3001\u56fe\u6807\uff09\u3002"),(0,l.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u7c7b\u578b\u6216\u8f93\u5165\u7aef\u53e3\u6570\u91cf\u3002\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Loop"},"\u5faa\u73af\u7b80\u4ecb")),(0,l.kt)("div",{className:"patch-container"},(0,l.kt)("div",{className:"patch loop"},(0,l.kt)("h3",null,"Loop Builder"),(0,l.kt)("ul",{className:"inputs"},(0,l.kt)("li",null,(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,(0,l.kt)("span",null,"0"))),(0,l.kt)("ul",{className:"outputs"},(0,l.kt)("li",null,"Index",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Numbers",(0,l.kt)("span",null,"0"))))),(0,l.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,l.kt)("p",null,"A value at index 0. By default, the value is a number."),(0,l.kt)("p",null,"\u7d22\u5f15 0 \u7684\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a\u6570\u503c\u3002"),(0,l.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,l.kt)("p",null,"A value at index 1. By default, the value is a number."),(0,l.kt)("p",null,"\u7d22\u5f15 1 \u7684\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a\u6570\u503c\u3002"),(0,l.kt)("h3",{id:"input-\u8f93\u5165-2"},"Input \u8f93\u5165"),(0,l.kt)("p",null,"A value at index 2. By default, the value is a number."),(0,l.kt)("p",null,"\u7d22\u5f15 2 \u7684\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a\u6570\u503c\u3002"),(0,l.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,l.kt)("p",null,"A loop of the indices for the input values. ex: ","[0, 1, 2]"),(0,l.kt)("p",null,"\u8f93\u5165\u53e3\u503c\u7684\u5faa\u73af\u7d22\u5f15\u3002\u4f8b\u5982\uff1a","[0\uff0c1\uff0c2]","\u3002"),(0,l.kt)("h3",{id:"loop-\u8f93\u51fa"},"Loop \u8f93\u51fa"),(0,l.kt)("p",null,"A loop of the input values. ex: ","[\u201capple\u201d, \u201ccarrot\u201d, \u201corange\u201d]"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5faa\u73af\u7684\u8f93\u5165\u503c\u3002\u4f8b\u5982\uff1a","[\u201c\u82f9\u679c\u201d\uff0c\u201c\u80e1\u841d\u535c\u201d\uff0c\u201c\u6a59\u5b50\u201d]"),(0,l.kt)("h3",{id:"\u5faa\u73af\u652f\u6301\u7684\u7c7b\u578b"},"\u5faa\u73af\u652f\u6301\u7684\u7c7b\u578b"),(0,l.kt)("p",null,"Anchor"),(0,l.kt)("p",null,"Bezier"),(0,l.kt)("p",null,"Boolean"),(0,l.kt)("p",null,"Color"),(0,l.kt)("p",null,"Edges"),(0,l.kt)("p",null,"Image"),(0,l.kt)("p",null,"Index"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("p",null,"Layer"),(0,l.kt)("p",null,"Number"),(0,l.kt)("p",null,"Photo Library Asset"),(0,l.kt)("p",null,"Point 3D"),(0,l.kt)("p",null,"Position"),(0,l.kt)("p",null,"Progress"),(0,l.kt)("p",null,"Pulse"),(0,l.kt)("p",null,"Size"),(0,l.kt)("p",null,"Size Axis"),(0,l.kt)("p",null,"Sound"),(0,l.kt)("p",null,"Space Axis"),(0,l.kt)("p",null,"Spacing"),(0,l.kt)("p",null,"Text"),(0,l.kt)("p",null,"Video"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Select"},"Loop Select \u5faa\u73af\u9009\u62e9")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Over%20Array"},"Loop Over Array \u6570\u7ec4\u904d\u5386")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20to%20Array"},"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Sum"},"Loop Sum \u5faa\u73af\u603b\u548c")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Running%20Total"},"Running Total \u7d2f\u79ef\u603b\u8ba1")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Count"},"Loop Count \u5faa\u73af\u6570\u91cf")))}s.isMDXComponent=!0}}]);