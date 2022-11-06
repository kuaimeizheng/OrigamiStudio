"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[67546],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58222:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Subarray \u5b50\u6570\u7ec4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Subarray \u5b50\u6570\u7ec4",u={unversionedId:"documentation/Data/Subarray",id:"documentation/Data/Subarray",title:"Subarray \u5b50\u6570\u7ec4",description:"Get a subset of items from an array.",source:"@site/docs/documentation/Data/Subarray.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Subarray",permalink:"/OrigamiStudio/docs/documentation/Data/Subarray",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Subarray.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{title:"Subarray \u5b50\u6570\u7ec4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Settings JSON \u8bbe\u7f6eJSON",permalink:"/OrigamiStudio/docs/documentation/Data/Settings JSON"},next:{title:"Value at Index \u7d22\u5f15\u503c",permalink:"/OrigamiStudio/docs/documentation/Data/Value at Index"}},l={},p=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Location \u4f4d\u7f6e",id:"location-\u4f4d\u7f6e",level:3},{value:"Length \u957f\u5ea6",id:"length-\u957f\u5ea6",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"subarray-\u5b50\u6570\u7ec4"},"Subarray \u5b50\u6570\u7ec4"),(0,n.kt)("p",null,"Get a subset of items from an array."),(0,n.kt)("p",null,"\u4ece\u6570\u7ec4\u4e2d\u83b7\u53d6\u9879\u76ee\u7684\u5b50\u96c6\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(4121).Z,width:"1502",height:"262"})),(0,n.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,n.kt)("p",null,"A JSON array to get a subset from."),(0,n.kt)("p",null,"\u8981\u4ece\u4e2d\u83b7\u53d6\u5b50\u96c6\u7684 JSON \u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"location-\u4f4d\u7f6e"},"Location \u4f4d\u7f6e"),(0,n.kt)("p",null,"An index that represents the start of the subset."),(0,n.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\uff0c\u8868\u793a\u5b50\u96c6\u7684\u5f00\u59cb\u4f4d\u7f6e\u3002"),(0,n.kt)("h3",{id:"length-\u957f\u5ea6"},"Length \u957f\u5ea6"),(0,n.kt)("p",null,"A number that represents the number of items from the JSON array to include."),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8981\u5305\u542b\u7684 JSON \u6570\u7ec4\u4e2d\u7684\u9879\u76ee\u6570\u91cf\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"A JSON array with the subset of items."),(0,n.kt)("p",null,"\u5305\u542b\u9879\u76ee\u5b50\u96c6\u7684 JSON \u6570\u7ec4\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Array%20Append"},"Array Append \u6570\u7ec4\u6dfb\u52a0")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")))}s.isMDXComponent=!0},4121:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/subarray-d2812dfd797af397baf013f6ec4918f9.png"}}]);