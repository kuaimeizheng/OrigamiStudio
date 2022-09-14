"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[25748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=f(r),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var f=2;f<i;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},50784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var n=r(87462),a=(r(67294),r(3905));const i={title:"Layer Effect Combiner \u56fe\u5c42\u6548\u679c\u7ec4\u5408\u5668",sidebar_position:10},o="Layer Effect Combiner \u56fe\u5c42\u6548\u679c\u7ec4\u5408\u5668",c={unversionedId:"documentation/Effect/Layer Effect Combiner",id:"documentation/Effect/Layer Effect Combiner",title:"Layer Effect Combiner \u56fe\u5c42\u6548\u679c\u7ec4\u5408\u5668",description:"Combines multiple filters into a stack that can be applied to a layer.",source:"@site/docs/documentation/Effect/Layer Effect Combiner.md",sourceDirName:"documentation/Effect",slug:"/documentation/Effect/Layer Effect Combiner",permalink:"/OrigamiStudio/docs/documentation/Effect/Layer Effect Combiner",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Effect/Layer Effect Combiner.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1663136427,formattedLastUpdatedAt:"2022\u5e749\u670814\u65e5",sidebarPosition:10,frontMatter:{title:"Layer Effect Combiner \u56fe\u5c42\u6548\u679c\u7ec4\u5408\u5668",sidebar_position:10},sidebar:"documentionSidebar",previous:{title:"Invert Effect \u53cd\u8f6c\u6548\u679c",permalink:"/OrigamiStudio/docs/documentation/Effect/Invert Effect"},next:{title:"Saturation Effect \u9971\u548c\u5ea6\u6548\u679c",permalink:"/OrigamiStudio/docs/documentation/Effect/Saturation Effect"}},l={},f=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Layer Effect \u56fe\u5c42\u6548\u679c",id:"layer-effect-\u56fe\u5c42\u6548\u679c",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:f};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"layer-effect-combiner-\u56fe\u5c42\u6548\u679c\u7ec4\u5408\u5668"},"Layer Effect Combiner \u56fe\u5c42\u6548\u679c\u7ec4\u5408\u5668"),(0,a.kt)("p",null,"Combines multiple filters into a stack that can be applied to a layer."),(0,a.kt)("p",null,"\u5c06\u591a\u4e2a\u6ee4\u955c\u7ec4\u5408\u6210\u4e00\u4e2a\u5806\u6808\uff0c\u53ef\u4ee5\u5e94\u7528\u5230\u4e00\u4e2a\u56fe\u5c42\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Layer Effect Combiner"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null),(0,a.kt)("li",null),(0,a.kt)("li",null)),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Layer Effect ")))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"layer-effect-\u56fe\u5c42\u6548\u679c"},"Layer Effect \u56fe\u5c42\u6548\u679c"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")))}p.isMDXComponent=!0}}]);