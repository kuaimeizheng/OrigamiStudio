"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[67969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?o.createElement(y,i(i({ref:t},u),{},{components:r})):o.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:5},i="Loop Over Array \u6570\u7ec4\u904d\u5386",p={unversionedId:"documentation/Loops/Loop Over Array",id:"documentation/Loops/Loop Over Array",title:"Loop Over Array \u6570\u7ec4\u904d\u5386",description:"Create a loop over the items in an array.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Loops/Loop Over Array.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Over Array",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Over Array",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Over Array.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667493511,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Option Switch"},next:{title:"Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Remove Last"}},l={},c=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Items \u9009\u9879",id:"items-\u9009\u9879",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loop-over-array-\u6570\u7ec4\u904d\u5386"},"Loop Over Array \u6570\u7ec4\u904d\u5386"),(0,n.kt)("p",null,"Create a loop over the items in an array."),(0,n.kt)("p",null,"\u5728\u6570\u7ec4\u4e2d\u7684\u9879\u76ee\u4e0a\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\u3002"),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Data/JSON%20Array"},"Array Builder")," to create arrays."),(0,n.kt)("p",null,"\u4f7f\u7528 JSON Array \u6a21\u5757 \u521b\u5efa\u6570\u7ec4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(38130).Z,width:"1492",height:"268"})),(0,n.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,n.kt)("p",null,"A JSON array of values."),(0,n.kt)("p",null,"\u503c\u7684JSON\u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,n.kt)("p",null,"A loop of the indices for the input values. ex: ","[0, 1, 2]"),(0,n.kt)("p",null,"\u8f93\u5165\u503c\u7684\u7d22\u5f15\u5faa\u73af\u3002\u4f8b\u5982\uff1a","[0, 1, 2]"),(0,n.kt)("h3",{id:"items-\u9009\u9879"},"Items \u9009\u9879"),(0,n.kt)("p",null,"A loop of values from the array."),(0,n.kt)("p",null,"\u6570\u7ec4\u4e2d\u7684\u503c\u5faa\u73af\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Data/JSON%20Array"},"JSON Array JSON\u6570\u7ec4")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")))}s.isMDXComponent=!0},38130:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/loop-over-array-2fb4f29c09541468856cf4e644c00b92.png"}}]);