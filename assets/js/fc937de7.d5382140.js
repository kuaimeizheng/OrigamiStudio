"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[84851],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,a(a({ref:e},c),{},{components:r})):n.createElement(f,a({ref:e},c))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,a[1]=o;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1251:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const l={title:"Split Number",tags:["text"]},a="Split Number",o={unversionedId:"patches/Text/Split Number",id:"patches/Text/Split Number",title:"Split Number",description:"Split Number",source:"@site/docs/patches/Text/Split Number.md",sourceDirName:"patches/Text",slug:"/patches/Text/Split Number",permalink:"/OrigamiStudio/docs/patches/Text/Split Number",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Text/Split Number.md",tags:[{label:"text",permalink:"/OrigamiStudio/docs/tags/text"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",frontMatter:{title:"Split Number",tags:["text"]},sidebar:"patchesSidebar",previous:{title:"Word by Word \u6587\u5b57\u6e10\u5165",permalink:"/OrigamiStudio/docs/patches/Text/Word by Word"},next:{title:"Scroll \u6ed1\u52a8",permalink:"/OrigamiStudio/docs/category/scroll-\u6ed1\u52a8"}},p={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Depth \u6df1\u5ea6",id:"depth-\u6df1\u5ea6",level:4},{value:"Split \u62c6\u5206",id:"split-\u62c6\u5206",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"High \u9ad8",id:"high-\u9ad8",level:4},{value:"Low \u4f4e",id:"low-\u4f4e",level:4}],c={toc:u};function s(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"split-number"},"Split Number"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Split Number"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Depth",(0,i.kt)("span",null,"20")),(0,i.kt)("li",null,"Split",(0,i.kt)("span",null,"0.5"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"High",(0,i.kt)("span",null,"10")),(0,i.kt)("li",null,"Low",(0,i.kt)("span",null,"-10"))))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"depth-\u6df1\u5ea6"},"Depth \u6df1\u5ea6"),(0,i.kt)("h4",{id:"split-\u62c6\u5206"},"Split \u62c6\u5206")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"high-\u9ad8"},"High \u9ad8"),(0,i.kt)("h4",{id:"low-\u4f4e"},"Low \u4f4e"))))}s.isMDXComponent=!0}}]);