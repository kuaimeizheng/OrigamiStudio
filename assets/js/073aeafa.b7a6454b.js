"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[61288],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),d=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=d(r),m=a,y=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return r?n.createElement(y,o(o({ref:e},p),{},{components:r})):n.createElement(y,o({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},92101:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:5},o="Text Style Builder \u6587\u672c\u6837\u5f0f\u751f\u6210\u5668",l={unversionedId:"documentation/Text/Text Style Builder",id:"documentation/Text/Text Style Builder",title:"Text Style Builder \u6587\u672c\u6837\u5f0f\u751f\u6210\u5668",description:"Used with Text Style patch to combine multiple text styles for a text layer.",source:"@site/docs/documentation/Text/Text Style Builder.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Style Builder",permalink:"/OrigamiStudio/docs/documentation/Text/Text Style Builder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Style Builder.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Text Starts With \u6587\u672c\u5f00\u59cb",permalink:"/OrigamiStudio/docs/documentation/Text/Text Starts With"},next:{title:"Text Style \u6587\u672c\u6837\u5f0f",permalink:"/OrigamiStudio/docs/documentation/Text/Text Style"}},u={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],p={toc:d};function c(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text-style-builder-\u6587\u672c\u6837\u5f0f\u751f\u6210\u5668"},"Text Style Builder \u6587\u672c\u6837\u5f0f\u751f\u6210\u5668"),(0,a.kt)("p",null,"Used with ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Style"},"Text Style")," patch to combine multiple text styles for a text layer."),(0,a.kt)("p",null,"\u4e0e\u6587\u672c\u6837\u5f0f\u6a21\u5757\u4e00\u8d77\u4f7f\u7528\uff0c\u4e3a\u6587\u672c\u56fe\u5c42\u7ec4\u5408\u591a\u79cd\u6587\u672c\u6837\u5f0f\u3002"),(0,a.kt)("p",null,"Right-click to add additional text style inputs."),(0,a.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4ee5\u6dfb\u52a0\u5176\u4ed6\u6587\u672c\u6837\u5f0f\u8f93\u5165\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(13828).Z,width:"1498",height:"230"})),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A text style from the ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Style"},"Text Style")," patch."),(0,a.kt)("p",null,"\u6587\u672c\u6837\u5f0f\u6a21\u5757\u4e2d\u7684\u6587\u672c\u6837\u5f0f\u3002"),(0,a.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A text style from the ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Style"},"Text Style")," patch."),(0,a.kt)("p",null,"\u6587\u672c\u6837\u5f0f\u6a21\u5757\u4e2d\u7684\u6587\u672c\u6837\u5f0f\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The combined formatted text range to pass to the Style Override input on a ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer"),"."),(0,a.kt)("p",null,"\u5408\u5e76\u7684\u6587\u672c\u683c\u5f0f\u4f20\u9012\u5230\u8f93\u5165\u6587\u672c\u56fe\u5c42\u4e0a\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Style"},"Text Style \u6587\u672c\u6837\u5f0f")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}c.isMDXComponent=!0},13828:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/text-style-builder-d263dbda7e66764093099fd13c778882.png"}}]);