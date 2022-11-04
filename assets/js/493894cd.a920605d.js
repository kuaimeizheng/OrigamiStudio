"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[43201],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),p=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(r),m=n,O=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(O,i(i({ref:e},c),{},{components:r})):a.createElement(O,i({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},93341:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"JSON to Text JSON\u8f6c\u6587\u672c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="JSON to Text JSON\u8f6c\u6587\u672c",l={unversionedId:"documentation/Data/JSON to Text",id:"documentation/Data/JSON to Text",title:"JSON to Text JSON\u8f6c\u6587\u672c",description:"Formats any JSON value into a text string to be used with a Text Layer for debugging.",source:"@site/docs/documentation/Data/JSON to Text.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/JSON to Text",permalink:"/OrigamiStudio/docs/documentation/Data/JSON to Text",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/JSON to Text.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"JSON to Text JSON\u8f6c\u6587\u672c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"JSON Object JSON\u5bf9\u8c61",permalink:"/OrigamiStudio/docs/documentation/Data/JSON Object"},next:{title:"Network Request \u7f51\u7edc\u8bf7\u6c42",permalink:"/OrigamiStudio/docs/documentation/Data/Network Request"}},u={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:p};function d(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"json-to-text-json\u8f6c\u6587\u672c"},"JSON to Text JSON\u8f6c\u6587\u672c"),(0,n.kt)("p",null,"Formats any JSON value into a text string to be used with a Text Layer for debugging."),(0,n.kt)("p",null,"\u5c06\u4efb\u4f55JSON\u503c\u683c\u5f0f\u5316\u4e3a\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u7528\u6587\u672c\u56fe\u5c42\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(62821).Z,width:"1508",height:"198"})),(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("p",null,"A JSON object or array."),(0,n.kt)("p",null,"JSON\u5bf9\u8c61\u6216\u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"A text string that represents the JSON data."),(0,n.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793aJSON\u6570\u636e\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Set%20Value%20for%20Key"},"Set Value for Key \u8bbe\u7f6e\u952e\u503c")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}d.isMDXComponent=!0},62821:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/json-to-text-265a6992095db0d82cbe24638a933edd.png"}}]);