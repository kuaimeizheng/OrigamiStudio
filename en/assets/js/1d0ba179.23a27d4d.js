"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[79165],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},53617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Blur Effect \u6a21\u7cca\u6548\u679c",sidebar_position:1,last_update:{author:"\u84af\u7f8e\u653f"}},o="Blur Effect \u6a21\u7cca\u6548\u679c",l={unversionedId:"documentation/Effect/Blur Effect",id:"documentation/Effect/Blur Effect",title:"Blur Effect \u6a21\u7cca\u6548\u679c",description:"Applies a Gaussian Blur to a layer. Use a Layer Effect Combiner patch to stack filters with multiple Layer Effect patches.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Effect/Blur Effect.md",sourceDirName:"documentation/Effect",slug:"/documentation/Effect/Blur Effect",permalink:"/OrigamiStudio/en/docs/documentation/Effect/Blur Effect",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Effect/Blur Effect.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:1,frontMatter:{title:"Blur Effect \u6a21\u7cca\u6548\u679c",sidebar_position:1,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Effect \u6548\u679c",permalink:"/OrigamiStudio/en/docs/category/effect-\u6548\u679c"},next:{title:"Brightness Effect \u4eae\u5ea6\u6548\u679c",permalink:"/OrigamiStudio/en/docs/documentation/Effect/Brightness Effect"}},c={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Radius \u534a\u5f84",id:"radius-\u534a\u5f84",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Layer Effect \u56fe\u5c42\u6548\u679c",id:"layer-effect-\u56fe\u5c42\u6548\u679c",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],f={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blur-effect-\u6a21\u7cca\u6548\u679c"},"Blur Effect \u6a21\u7cca\u6548\u679c"),(0,a.kt)("p",null,"Applies a Gaussian Blur to a layer. Use a Layer Effect Combiner patch to stack filters with multiple Layer Effect patches."),(0,a.kt)("p",null,"\u5e94\u7528\u9ad8\u65af\u6a21\u7cca\u7684\u56fe\u5c42\u3002\u53ef\u4ee5\u4f7f\u7528 Layer Effect Combiner \u56fe\u5c42\u6548\u679c\u5408\u6210 \u6a21\u5757\u4e0e\u591a\u4e2a\u56fe\u5c42\u6548\u679c\u6a21\u5757\u7ec4\u5408\u4f7f\u7528\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Blur Effect"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Radius ",(0,a.kt)("span",null,"0"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Layer Effect ")))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"radius-\u534a\u5f84"},"Radius \u534a\u5f84"),(0,a.kt)("p",null,"The intensity at which the layer will be blurred. Values can range between 0.0 and 100.0"),(0,a.kt)("p",null,"\u6a21\u7cca\u56fe\u5c42\u7684\u5f3a\u5ea6\u3002\u53d6\u503c\u8303\u56f4\u57280.0\u548c100.0\u4e4b\u95f4")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"layer-effect-\u56fe\u5c42\u6548\u679c"},"Layer Effect \u56fe\u5c42\u6548\u679c"),(0,a.kt)("p",null,"The final filter effect to pass to the Effects Override input on a layer or Layer Effect Combiner to stack filters with multiple Layer Effect patches."),(0,a.kt)("p",null,"\u4f20\u9012\u5230\u4e00\u4e2a\u56fe\u5c42\u6216\u56fe\u5c42\u6548\u679c\u7ec4\u5408\u5668\u7684\u6700\u7ec8\u7684\u6ee4\u955c\u6548\u679c\uff0c\u4ee5\u5806\u53e0\u5177\u6709\u591a\u4e2a\u56fe\u5c42\u6548\u679c\u6a21\u5757\u7684\u6ee4\u955c\u4e0a\u3002"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")))}s.isMDXComponent=!0}}]);