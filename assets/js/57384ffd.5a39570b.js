"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[32656],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),u=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=u(r),m=n,y=s["".concat(i,".").concat(m)]||s[m]||c[m]||o;return r?a.createElement(y,l(l({ref:e},d),{},{components:r})):a.createElement(y,l({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},24304:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Array Append \u6570\u7ec4\u6dfb\u52a0",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},l="Array Append \u6570\u7ec4\u6dfb\u52a0",p={unversionedId:"documentation/Data/Array Append",id:"documentation/Data/Array Append",title:"Array Append \u6570\u7ec4\u6dfb\u52a0",description:"Add items to a JSON array.",source:"@site/docs/documentation/Data/Array Append.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Array Append",permalink:"/OrigamiStudio/docs/documentation/Data/Array Append",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Array Append.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Array Append \u6570\u7ec4\u6dfb\u52a0",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Data \u6570\u636e",permalink:"/OrigamiStudio/docs/category/data-\u6570\u636e"},next:{title:"Array Count \u6570\u7ec4\u6570\u91cf",permalink:"/OrigamiStudio/docs/documentation/Data/Array Count"}},i={},u=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Item \u9009\u9879",id:"item-\u9009\u9879",level:3},{value:"Append \u6dfb\u52a0",id:"append-\u6dfb\u52a0",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"array-append-\u6570\u7ec4\u6dfb\u52a0"},"Array Append \u6570\u7ec4\u6dfb\u52a0"),(0,n.kt)("p",null,"Add items to a JSON array."),(0,n.kt)("p",null,"\u5c06\u9879\u76ee\u6dfb\u52a0\u5230JSON\u6570\u7ec4\u3002"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Array Append"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Array",(0,n.kt)("span",null)),(0,n.kt)("li",null,"Item",(0,n.kt)("span",null)),(0,n.kt)("li",null,"Append",(0,n.kt)("span",null))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,(0,n.kt)("span",null))))),(0,n.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,n.kt)("p",null,"A JSON array to add items to."),(0,n.kt)("p",null,"\u8981\u5411\u5176\u4e2d\u6dfb\u52a0\u9879\u76ee\u7684 JSON \u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"item-\u9009\u9879"},"Item \u9009\u9879"),(0,n.kt)("p",null,"The item to add to the JSON array."),(0,n.kt)("p",null,"\u8981\u6dfb\u52a0\u5230 JSON \u6570\u7ec4\u7684\u9879\u76ee\u3002"),(0,n.kt)("h3",{id:"append-\u6dfb\u52a0"},"Append \u6dfb\u52a0"),(0,n.kt)("p",null,"A pulse that adds the item to the end of the JSON array."),(0,n.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5c06\u9879\u76ee\u6dfb\u52a0\u5230 JSON \u6570\u7ec4\u7684\u672b\u5c3e\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"The JSON array with the new item appended."),(0,n.kt)("p",null,"\u6dfb\u52a0\u4e86\u65b0\u9879\u76ee\u7684 JSON \u6570\u7ec4\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Subarray"},"Subarray \u5b50\u6570\u7ec4")))}c.isMDXComponent=!0}}]);