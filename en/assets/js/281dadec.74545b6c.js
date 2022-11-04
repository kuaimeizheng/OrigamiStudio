"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[21133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Sepia Effect \u68d5\u8910\u8272\u6548\u679c",sidebar_position:1,last_update:{author:"\u84af\u7f8e\u653f"}},o="Sepia Effect \u68d5\u8910\u8272\u6548\u679c",c={unversionedId:"documentation/Effect/Sepia Effect",id:"documentation/Effect/Sepia Effect",title:"Sepia Effect \u68d5\u8910\u8272\u6548\u679c",description:"According to Apple\u2019s Core Image Filter Reference, this filter maps the colors of an image to various shades of brown.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Effect/Sepia Effect.md",sourceDirName:"documentation/Effect",slug:"/documentation/Effect/Sepia Effect",permalink:"/OrigamiStudio/en/docs/documentation/Effect/Sepia Effect",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Effect/Sepia Effect.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575955,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:1,frontMatter:{title:"Sepia Effect \u68d5\u8910\u8272\u6548\u679c",sidebar_position:1,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Saturation Effect \u9971\u548c\u5ea6\u6548\u679c",permalink:"/OrigamiStudio/en/docs/documentation/Effect/Saturation Effect"},next:{title:"Material \u8c37\u6b4c\u79fb\u52a8\u7aef",permalink:"/OrigamiStudio/en/docs/category/material-\u8c37\u6b4c\u79fb\u52a8\u7aef"}},l={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Intensity \u5f3a\u5ea6",id:"intensity-\u5f3a\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Layer Effect \u56fe\u5c42\u6548\u679c",id:"layer-effect-\u56fe\u5c42\u6548\u679c",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],f={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sepia-effect-\u68d5\u8910\u8272\u6548\u679c"},"Sepia Effect \u68d5\u8910\u8272\u6548\u679c"),(0,a.kt)("p",null,"According to Apple\u2019s Core Image Filter Reference, this filter maps the colors of an image to various shades of brown."),(0,a.kt)("p",null,"\u6839\u636e\u82f9\u679c\u7684\u6838\u5fc3\u56fe\u50cf\u6ee4\u955c\u53c2\u8003\uff0c\u8fd9\u4e2a\u6ee4\u955c\u5c06\u56fe\u50cf\u7684\u989c\u8272\u6620\u5c04\u4e3a\u4e0d\u540c\u6df1\u6d45\u7684\u68d5\u8272\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Sepia Effect"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Intensity ",(0,a.kt)("span",null,"0"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Layer Effect ")))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"intensity-\u5f3a\u5ea6"},"Intensity \u5f3a\u5ea6"),(0,a.kt)("p",null,"The intensity of the brown tint that will be applied to a layer. Values can range between 0.0 and 1.0"),(0,a.kt)("p",null,"\u5c06\u88ab\u5e94\u7528\u5230\u4e00\u4e2a\u56fe\u5c42\u7684\u68d5\u8272\u8272\u8c03\u7684\u5f3a\u5ea6\u3002\u53d6\u503c\u8303\u56f4\u57280.0\u548c1.0\u4e4b\u95f4")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"layer-effect-\u56fe\u5c42\u6548\u679c"},"Layer Effect \u56fe\u5c42\u6548\u679c"),(0,a.kt)("p",null,"The final filter effect to pass to the Effects Override input on a layer or Layer Effect Combiner to stack filters with multiple Layer Effect patches."))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")))}p.isMDXComponent=!0}}]);