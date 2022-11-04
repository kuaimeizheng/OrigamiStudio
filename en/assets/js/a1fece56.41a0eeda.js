"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[69270],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=p(r),m=a,O=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(O,i(i({ref:e},c),{},{components:r})):n.createElement(O,i({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=s;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88885:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"JSON to Text JSON\u8f6c\u6587\u672c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="JSON to Text JSON\u8f6c\u6587\u672c",u={unversionedId:"documentation/Data/JSON to Text",id:"documentation/Data/JSON to Text",title:"JSON to Text JSON\u8f6c\u6587\u672c",description:"Formats any JSON value into a text string to be used with a Text Layer for debugging.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Data/JSON to Text.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/JSON to Text",permalink:"/OrigamiStudio/en/docs/documentation/Data/JSON to Text",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/JSON to Text.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{title:"JSON to Text JSON\u8f6c\u6587\u672c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"JSON Object JSON\u5bf9\u8c61",permalink:"/OrigamiStudio/en/docs/documentation/Data/JSON Object"},next:{title:"Network Request \u7f51\u7edc\u8bf7\u6c42",permalink:"/OrigamiStudio/en/docs/documentation/Data/Network Request"}},l={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:p};function d(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-to-text-json\u8f6c\u6587\u672c"},"JSON to Text JSON\u8f6c\u6587\u672c"),(0,a.kt)("p",null,"Formats any JSON value into a text string to be used with a Text Layer for debugging."),(0,a.kt)("p",null,"\u5c06\u4efb\u4f55JSON\u503c\u683c\u5f0f\u5316\u4e3a\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u7528\u6587\u672c\u56fe\u5c42\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(62821).Z,width:"1508",height:"198"})),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A JSON object or array."),(0,a.kt)("p",null,"JSON\u5bf9\u8c61\u6216\u6570\u7ec4\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A text string that represents the JSON data."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793aJSON\u6570\u636e\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Set%20Value%20for%20Key"},"Set Value for Key \u8bbe\u7f6e\u952e\u503c")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}d.isMDXComponent=!0},62821:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/json-to-text-265a6992095db0d82cbe24638a933edd.png"}}]);