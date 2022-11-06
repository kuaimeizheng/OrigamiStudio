"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[86815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=f(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var f=2;f<i;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var n=r(87462),a=(r(67294),r(3905));const i={title:"Sepia Effect \u68d5\u8910\u8272\u6548\u679c",sidebar_position:1,last_update:{author:"\u84af\u7f8e\u653f"}},o="Sepia Effect \u68d5\u8910\u8272\u6548\u679c",c={unversionedId:"documentation/Effect/Sepia Effect",id:"documentation/Effect/Sepia Effect",title:"Sepia Effect \u68d5\u8910\u8272\u6548\u679c",description:"According to Apple\u2019s Core Image Filter Reference, this filter maps the colors of an image to various shades of brown.",source:"@site/docs/documentation/Effect/Sepia Effect.md",sourceDirName:"documentation/Effect",slug:"/documentation/Effect/Sepia Effect",permalink:"/OrigamiStudio/docs/documentation/Effect/Sepia Effect",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Effect/Sepia Effect.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:1,frontMatter:{title:"Sepia Effect \u68d5\u8910\u8272\u6548\u679c",sidebar_position:1,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Saturation Effect \u9971\u548c\u5ea6\u6548\u679c",permalink:"/OrigamiStudio/docs/documentation/Effect/Saturation Effect"},next:{title:"Material \u8c37\u6b4c\u79fb\u52a8\u7aef",permalink:"/OrigamiStudio/docs/category/material-\u8c37\u6b4c\u79fb\u52a8\u7aef"}},l={},f=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Intensity \u5f3a\u5ea6",id:"intensity-\u5f3a\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Layer Effect \u56fe\u5c42\u6548\u679c",id:"layer-effect-\u56fe\u5c42\u6548\u679c",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:f};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sepia-effect-\u68d5\u8910\u8272\u6548\u679c"},"Sepia Effect \u68d5\u8910\u8272\u6548\u679c"),(0,a.kt)("p",null,"According to Apple\u2019s Core Image Filter Reference, this filter maps the colors of an image to various shades of brown."),(0,a.kt)("p",null,"\u6839\u636e\u82f9\u679c\u7684\u6838\u5fc3\u56fe\u50cf\u6ee4\u955c\u53c2\u8003\uff0c\u8fd9\u4e2a\u6ee4\u955c\u5c06\u56fe\u50cf\u7684\u989c\u8272\u6620\u5c04\u4e3a\u4e0d\u540c\u6df1\u6d45\u7684\u68d5\u8272\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Sepia Effect"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Intensity ",(0,a.kt)("span",null,"0"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Layer Effect ")))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"intensity-\u5f3a\u5ea6"},"Intensity \u5f3a\u5ea6"),(0,a.kt)("p",null,"The intensity of the brown tint that will be applied to a layer. Values can range between 0.0 and 1.0"),(0,a.kt)("p",null,"\u5c06\u88ab\u5e94\u7528\u5230\u4e00\u4e2a\u56fe\u5c42\u7684\u68d5\u8272\u8272\u8c03\u7684\u5f3a\u5ea6\u3002\u53d6\u503c\u8303\u56f4\u57280.0\u548c1.0\u4e4b\u95f4")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"layer-effect-\u56fe\u5c42\u6548\u679c"},"Layer Effect \u56fe\u5c42\u6548\u679c"),(0,a.kt)("p",null,"The final filter effect to pass to the Effects Override input on a layer or Layer Effect Combiner to stack filters with multiple Layer Effect patches."))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")))}s.isMDXComponent=!0}}]);